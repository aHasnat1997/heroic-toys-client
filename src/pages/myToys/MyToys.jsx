import { useContext, useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import Modal from "./Modal";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";


const MyToys = () => {
  useTitle('My Toys');
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [modal, setModal] = useState({});
  const [sort, setSort] = useState("1");


  const handelSort = event => {
    const value = event.target.value;
    // console.log(value);
    setSort(value);
  }

  useEffect(() => {
    const options = { method: 'GET' };

    fetch(`http://localhost:3000/my-toys?email=${user.email}&value=${sort}`, options)
      .then(response => response.json())
      .then(response => setToys(response))
      .catch(err => console.error(err));
  }, [sort]);

  const handelDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const options = { method: 'DELETE' };
        fetch(`http://localhost:3000/product/${id}`, options)
          .then(response => response.json())
          .then(response => {
            console.log(response);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            const remaining = toys.filter(toy => toy._id !== id);
            setToys(remaining);
          })
          .catch(err => console.error(err));
      }
    })
  }

  // console.log(toys);

  return (
    <section className="max-w w-full my-16">
      {
        toys.length !== 0 ? <>
          <div className="mb-4 ml-auto">
            <select onChange={handelSort} className="select select-bordered w-full max-w-xs">
              <option value="1">Price Low to High</option>
              <option value="-1">Price High to Low</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>name</th>
                  <th>price</th>
                  <th>Quantity</th>
                  <th>details</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  toys.map(toy => <tr key={toy._id} className="hover">
                    <td>
                      <button onClick={() => handelDelete(toy._id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </td>
                    <td className="w-10">{toy.name.slice(0, 20)}...</td>
                    <td>${toy.price}</td>
                    <td>{toy.availableQuantity}</td>
                    <td>{toy.details[0].slice(0, 30)}...</td>
                    <td>
                      <label onClick={() => setModal(toy)} htmlFor="my-modal" className="btn btn-outline btn-primary">Update</label>
                    </td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
          <Modal toy={modal} />
        </> :
          <h1 className="text-6xl font-bold text-center">You don't add any Product</h1>
      }
    </section>
  );
};

export default MyToys;
