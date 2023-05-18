import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import registerImg from "../../assets/lottieJson/registration.json";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { useTitle } from "../../hooks/useTitle";

const RegistrationPage = () => {
  useTitle('Registration');
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data)
    const { name, photo, email, password } = data;
    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        updateData(createdUser, name, photo)
        Swal.fire({
          icon: 'success',
          title: 'Successfully! Registration Compleat🎉',
          text: 'Now, Log In'
        })
        navigate('/log-in');
      })
      .catch(error => console.log(error));

    const updateData = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo
      })
        .then(() => console.log('name add'))
        .catch(error => console.log(error.message))
    }
  };

  return (
    <section className="max-w">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <Lottie animationData={registerImg} loop={true} />
          </div>
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input {...register("name")} type="text" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Image</span>
                </label>
                <input {...register("photo")} type="url" placeholder="image url" className="input input-bordered" />
              </div>
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
                    Already have an Account? <Link to='/log-in' className="btn btn-link">Log In</Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value='Register' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
