import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import Modal from "./Modal";


const MyToys = () => {
  useTitle('My Toys');
  const [toys, setToys] = useState([]);
  const [modal, setModal] = useState({});
  useEffect(() => {
    const options = { method: 'GET' };

    fetch('https://heroic-toys-server.vercel.app/my-toys', options)
      .then(response => response.json())
      .then(response => setToys(response))
      .catch(err => console.error(err));
  }, []);

  // console.log(toys);

  return (
    <section className="max-w my-16">
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
                  <button className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </td>
                <td className="w-10">{toy.name.slice(0, 20)}...</td>
                <td>${toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td>{toy.details[0].slice(0, 30)}...</td>
                <td>
                  <label onClick={()=>setModal(toy)} htmlFor="my-modal" className="btn btn-outline btn-primary">Update</label>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      <Modal toy={modal} />
    </section>
  );
};

export default MyToys;
