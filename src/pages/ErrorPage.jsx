import Lottie from "lottie-react";
import error from "../assets/lottieJson/error.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="max-w h-screen flex flex-col justify-center items-center">
      <Lottie className="lg:w-1/2 mx-auto" animationData={error} loop={true} />
      <Link to='/' className="w-full btn btn-lg btn-outline">Back to Home</Link>
    </section>
  );
};

export default ErrorPage;
