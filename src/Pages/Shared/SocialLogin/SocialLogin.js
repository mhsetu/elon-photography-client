import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../AuthProvider/AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const SocialLogin = () => {
  const { setUser, auth } = useContext(AuthProvider);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || '/';

  const googleSignup = () => {
    // googleLogin()
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <p className='text-center mb-8'>
        <button
          onClick={googleSignup}
          className='btn btn-outline btn-success w-full'
        >
          Google
        </button>
      </p>
    </div>
  );
};

export default SocialLogin;
