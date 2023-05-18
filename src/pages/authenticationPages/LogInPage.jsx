import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import login from "../../assets/lottieJson/login.json";
import { Link } from "react-router-dom";

const LogInPage = () => {


  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
  };




  return (
    <section className="max-w">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie animationData={login} loop={true} />
          </div>
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input {...register("email")} type="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input {...register("password")} type="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <p className="text-lg">
                    Do not have an Account? <Link to='/registration' className="btn btn-link">Register</Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value='Login' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogInPage;
