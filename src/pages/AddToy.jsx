import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

const AddToy = () => {
  useTitle('Add Toy');
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    const { name, image, price, rating, details, category, availableQuantity, featuredAs, sellerEmail, sellerName
    } = data;
    const productInfo = {
      name: name,
      image: image,
      price: price,
      rating: rating,
      details: [details],
      category: category,
      availableQuantity: availableQuantity,
      featuredAs: featuredAs,
      seller: {
        name: sellerName,
        email: sellerEmail,
      }
    }
    console.log(productInfo);

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productInfo)
    };

    fetch('https://heroic-toys-server.vercel.app/all-products', options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Product Add Successfully 🎉'
          });
          navigate('/all-toys');
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: '⛔ Oops...',
          text: 'Something went wrong!',
        });
      });
  };



  return (
    <section className="max-w my-16">
      <h1 className='text-center text-4xl md:text-8xl mb-8'>Add Product to Store</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} type="text" placeholder="Product Name" className="input input-bordered w-full mb-8" required />
        <div className="grid grid-cols-2 gap-8">
          <input {...register("sellerName")} type="text" value={user.displayName} className="input input-bordered w-full" readOnly />
          <input {...register("sellerEmail")} type="text" value={user.email} className="input input-bordered w-full" readOnly />
          <input {...register("image")} type="url" placeholder="Image Url" className="input input-bordered w-full" required />
          <input {...register("price")} type="text" placeholder="Price" className="input input-bordered w-full" required />
          <input {...register("category")} type="text" placeholder="Category" className="input input-bordered w-full" required />
          <input {...register("availableQuantity")} type="text" placeholder="Available Quantity" className="input input-bordered w-full" required />
          <input {...register("rating")} type="text" placeholder="Rating" className="input input-bordered w-full" required />
          <select {...register("featuredAs")} placeholder="Featured As" className="input input-bordered w-full" required>
            <option>Featured As</option>
            <option value="hot-product">Hot Product</option>
            <option value="best-sellers">Best Sellers</option>
            <option value="new-arrival">New Arrival</option>
          </select>
        </div>
        <textarea {...register("details")} className="textarea textarea-bordered w-full h-60 my-8" placeholder="Product Details"></textarea>
        <input type="submit" value='Submit' className="w-full btn btn-outline btn-primary btn-lg text-2xl mt-8" />
      </form>
    </section>
  );
};

export default AddToy;
