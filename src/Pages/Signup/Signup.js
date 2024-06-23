import React, { useContext } from 'react';
import { AuthProvider } from '../../AuthProvider/AuthContext';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {
  const { update, createUser, setUser } = useContext(AuthProvider);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from.pathname || '/';
  // console.log(from);

  const handleSignup = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, { replace: true });
        update(photo, name);
        // .catch((err) => console.error(err));
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex'>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form onSubmit={handleSignup} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Photo</span>
              </label>
              <input
                type='text'
                name='photo'
                placeholder='Your Photo'
                className='input input-bordered'
              />
            </div>
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
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Signup</h1>
          <p className='py-6'>
            With each frame, photographers weave a tapestry of emotions, colors,
            and stories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
