import { useForm } from "react-hook-form";


const Modal = ({ toy }) => {
  const { name, image, price, featuredAs, details, category, availableQuantity, rating } = toy;
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  }




  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-full max-w-5xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} defaultValue={name} type="text" className="input input-bordered w-full mb-8" required />
            <div className="grid grid-cols-2 gap-8">
              <input {...register("image")} defaultValue={image} type="url" className="input input-bordered w-full" required />
              <input {...register("price")} defaultValue={price} type="text" className="input input-bordered w-full" required />
              <input {...register("category")} defaultValue={category} type="text" className="input input-bordered w-full" required />
              <input {...register("availableQuantity")} defaultValue={availableQuantity} type="text" className="input input-bordered w-full" required />
              <input {...register("rating")} defaultValue={rating} type="text" className="input input-bordered w-full" required />
              <select {...register("featuredAs")} className="input input-bordered w-full" required>
                <option value="">Featured As</option>
                <option value="hot-product">Hot Product</option>
                <option value="best-sellers">Best Sellers</option>
                <option value="new-arrival">New Arrival</option>
              </select>
            </div>
            <textarea {...register("details")} defaultValue={details} className="textarea textarea-bordered w-full my-8" placeholder="Product Details"></textarea>
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
