import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { useEffect, useState } from "react";
import logo from "../assets/favicon.png";


const AllToys = () => {
  useTitle('All Toys');
  const [loadAllToys, setLoadAllToys] = useState([]);
  const [limit, setLimit] = useState("20");
  const [page, setPage] = useState("1")
  const [spin, setSpin] = useState(false);
  useEffect(() => {
    setSpin(true);

    const options = { method: 'GET' };

    fetch(`https://heroic-toys-server.vercel.app/all-products/all?limit=${limit}&page=${page}`, options)
      .then(response => response.json())
      .then(response => {
        setLoadAllToys(response)
        setSpin(false);
      })
      .catch(err => console.error(err));
  }, [limit, page])

  const handelSearch = e => {
    const searchBox = e.target.parentNode.childNodes[0].value;
    setSpin(true);
    const options = { method: 'GET' };

    fetch(`https://heroic-toys-server.vercel.app/searchText/${searchBox}`, options)
      .then(response => response.json())
      .then(response => {
        setLoadAllToys(response)
        setSpin(false);
      })
      .catch(err => console.error(err));
    console.log(searchBox);
  }

  if (spin) {
    return (
      <section className="pb-16 bg-base-100">
        <div className="w-full my-60 text-8xl flex justify-center">
          <img src={logo} className='w-40 animate-ping' />
        </div>
      </section>
    )
  }

  return (
    <section className="max-w my-16 flex flex-col justify-center items-center gap-8">
      <div className="relative w-1/2 mx-auto">
        <input type="text" className="input input-bordered w-full pr-16 rounded-r-none" />
        <button onClick={handelSearch} className="btn btn-outline btn-primary absolute top-0 rounded-l-none">
          Search
        </button>
      </div>
      <div className="lg:w-full overflow-x-auto">
        <table className="table w-full mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              loadAllToys.map(product => <tr key={product._id}>
                <th>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={product.image} />
                    </div>
                  </div>
                </th>
                <th>{product.name.slice(0, 20)}...</th>
                <th><span className="uppercase">{product.category}</span></th>
                <th>
                  <p>{product.seller.name}</p>
                  <p>{product.seller.email}</p>
                </th>
                <th>${product.price}</th>
                <th>{product.availableQuantity}</th>
                <th>
                  <div className="card-actions justify-end">
                    <Link to={`/single-toy/${product._id}`} className="btn btn-primary">View Details</Link>
                  </div>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      <div>
        <div className="btn-group grid grid-cols-2">
          <button className="btn btn-outline" onClick={() => {
            parseInt(page) === 1 ? setPage(1) : setPage(parseInt(page) - 1)
          }}>Previous page</button>
          <button className="btn btn-outline" onClick={() => {
            setPage(parseInt(page) + 1)
          }}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default AllToys;
