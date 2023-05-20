import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Modal = ({ toy }) => {
  const { _id, name, image, price, featuredAs, details, category, availableQuantity, rating } = toy;
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const id = form.id.value;
    const image = form.image.value;
    const price = form.price.value;
    const featuredAs = form.featuredAs.value;
    const details = form.details.value;
    const category = form.category.value;
    const availableQuantity = form.availableQuantity.value;
    const rating = form.rating.value;

    const data = { id, name, image, price, featuredAs, details: [details], category, availableQuantity, rating }
    console.log(data);

    const options = {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(`http://localhost:3000/product/${_id}`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Product Add Successfully 🎉'
          });
          navigate(`/single-toy/${_id}`);
        }
      })
      .catch(err => console.error(err));
  }


  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-full max-w-5xl">
          <form onSubmit={handleSubmit}>
            <input name="name" defaultValue={name} type="text" className="input input-bordered w-full mb-8" required />
            <input name="id" defaultValue={_id} type="text" className="input input-bordered w-full mb-8 hidden" required />
            <div className="grid grid-cols-2 gap-8">
              <input name="image" defaultValue={image} type="url" className="input input-bordered w-full" required />
              <input name="price" defaultValue={price} type="text" className="input input-bordered w-full" required />
              <input name="category" defaultValue={category} type="text" className="input input-bordered w-full" required />
              <input name="availableQuantity" defaultValue={availableQuantity} type="text" className="input input-bordered w-full" required />
              <input name="rating" defaultValue={rating} type="text" className="input input-bordered w-full" required />
              <select name="featuredAs" defaultValue={featuredAs} className="input input-bordered w-full" required>
                <option value="">Featured As</option>
                <option value="hot-product">Hot Product</option>
                <option value="best-sellers">Best Sellers</option>
                <option value="new-arrival">New Arrival</option>
              </select>
            </div>
            <textarea name="details" defaultValue={details} className="textarea textarea-bordered w-full my-8" required></textarea>
            <div className="flex justify-center items-center gap-4">
              <input type="submit" value='Update' className="btn btn-outline btn-primary btn-lg" />
              <div className="modal-action mt-0">
                <label htmlFor="my-modal" className="btn btn-lg">Close</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
