import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../AuthProvider/AuthContext';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
  const { login, setUser } = useContext(AuthProvider);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from.pathname || '/';
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, { replace: true });
        // const currentUser = {
        //   email: user.email,
        // };
        // console.log(currentUser);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className='lg:hero lg:min-h-screen md:hero md:min-h-screen bg-base-200'>
      <div className='hero-content flex-row'>
        <div className='card shrink-0 w-full lg:max-w-sm md:max-w-sm shadow-2xl bg-base-100'>
          <form onSubmit={handleLogin} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control mt-6'>
              <input className='btn btn-primary' type='submit' value='Submit' />
            </div>
            <SocialLogin></SocialLogin>
          </form>
        </div>
        <div className='text-center lg:text-left hidden lg:block'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
          <p className='py-6'>
            A photograph is a bridge between reality and the imagination,
            connecting the seen with the unseen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
