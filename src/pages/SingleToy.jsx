import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";


const SingleToy = () => {
  const { image, name, price, category, featuredAs, seller, rating, details } = useLoaderData();
  // console.log(toy);


  return (
    <section className='max-w my-16'>
      <div className='mb-16 flex flex-col lg:flex-row gap-8'>
        {/* <figure><img className='duration-1000 hover:scale-150' src={image} alt="product image" /></figure> */}
        <div className="w-full rounded-2xl overflow-hidden">
          <img className='w-full duration-1000 hover:scale-150' src={image} alt="Product Image" />
        </div>
        <div className="w-full flex flex-col">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold leading-tight">{name}</h1>
            <p className="text-4xl">Price: ${price}</p>
            <p className="text-xl">Category: <span className="uppercase">{category}</span></p>
            <p className="badge badge-lg badge-primary uppercase">{featuredAs}</p>
          </div>
          <div className="mt-auto flex justify-between">
            <p>
              <span>Seller: {seller.name}</span>
              <br />
              <span>Email: {seller.email}</span>
            </p>
            <p className="flex items-center gap-2 text-4xl"><FaStar />{rating}</p>
          </div>
        </div>
      </div>
      <div>
        {
          details.map((detail, i) => <p key={i} className="my-4">{detail}</p>)
        }
      </div>
    </section>
  );
};

export default SingleToy;
