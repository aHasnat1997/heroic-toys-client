import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import login from "../../assets/lottieJson/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { useTitle } from "../../hooks/useTitle";

const LogInPage = () => {
  useTitle('Log in');
  const { singInUser, googlePopup } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || '/';

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const {email, password} = data;
    singInUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        Swal.fire({
          icon: 'success',
          title: 'Successfully! Log In Compleat🎉'
        });
        navigate(from, { replace: true });
      })
      .catch(error => {
        const message = error.message;
        setErrorMessage(message);
        Swal.fire({
          icon: 'error',
          title: '⛔ Oops...',
          text: 'Something went wrong!',
        });
        console.log(errorMessage);
      });
  };

  const google = () => {
    googlePopup()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        ('🎉 Successfully Log In with Google');
        navigate(from, { replace: true });
        console.log(user, token);
      })
      .catch((error) => console.log(error.code, error.message));
  }



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
                <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
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
            <div className="divider">OR</div>
            <div className='mx-auto mb-8'>
              <button onClick={google} className='btn btn-lg btn-outline'>
                <FaGoogle className="mr-2" /> Log in With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogInPage;
