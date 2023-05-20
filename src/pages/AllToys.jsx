import { Link, useLoaderData } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";


const AllToys = () => {
  useTitle('All Toys');
  const loadAllToys = useLoaderData();
  const [allToys, setAllToys] = useState(loadAllToys)

  const handelSearch = e => {
    const searchBox = e.target.parentNode.childNodes[0].value;
    
    const options = { method: 'GET' };

    fetch(`http://localhost:3000/searchText/${searchBox}`, options)
      .then(response => response.json())
      .then(response => setAllToys(response))
      .catch(err => console.error(err));
  }

  return (
    <section className="max-w my-16 flex flex-col justify-center items-center gap-8">
      <div className="relative w-1/2 mx-auto">
        <input type="text" className="input input-bordered w-full pr-16 rounded-r-none" />
        <button onClick={handelSearch} className="btn btn-outline btn-primary absolute top-0 rounded-l-none">
          Search
        </button>
      </div>
      <div className="w-full">
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
              allToys.map(product => <tr key={product._id}>
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
    </section>
  );
};

export default AllToys;
