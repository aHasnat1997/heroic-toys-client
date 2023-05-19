import { Link, useLoaderData } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";


const AllToys = () => {
  useTitle('All Toys');
  const allToys = useLoaderData();

  return (
    <section className="max-w my-16 grid lg:grid-cols-3 gap-4">
      {
        allToys.map(product => <div key={product._id} className="card h-[70vh] bg-secondary shadow-xl">
          <figure><img className='duration-1000 hover:scale-150' src={product.image} alt="product image" /></figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <div className="card-actions justify-end">
              <Link to={`/single-toy/${product._id}`} className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>)
      }
    </section>
  );
};

export default AllToys;
