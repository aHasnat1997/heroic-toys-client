import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import bg from '../../assets/banner/background.jpg';

const Customers = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch('https://heroic-toys-server.vercel.app/customer-feedback')
      .then(response => response.json())
      .then(response => setFeedbacks(response))
      .catch(err => console.error(err));
  }, []);
  // console.log(feedbacks);


  return (
    <section className="mb-16 relative">
      <img className="opacity-30 fixed top-0 -z-50" src={bg} />
      <div className="text-white">
        <h1 className='text-center text-4xl md:text-8xl mb-8'>Customer Feedback</h1>
        <Marquee speed={30} pauseOnHover='true'>
          {
            feedbacks.map(feedback => <div key={feedback._id} className="card w-96 bg-transparent shadow-xl">
              <figure className="px-10 pt-10">
                <img src={feedback.image} alt="Customers Image" className="w-40 h-40 rounded-full" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{feedback.name}</h2>
                <p>{feedback.feedback}</p>
              </div>
            </div>)
          }
        </Marquee>
      </div>
    </section>
  );
};

export default Customers;
