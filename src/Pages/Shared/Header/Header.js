import React, { useContext } from 'react';
import logo from '../../../Assets/Logo.png';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../AuthProvider/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const Header = () => {
  const { user, logout } = useContext(AuthProvider);
  const handleLogout = () => {
    logout()
      .then((result) => {
        // alert('SignOut successfully');
        toast.success('SignOut successfully', {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
          iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
          },
        });
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  };
  return (
    <div className='mx-8 my-8 shadow-md'>
      <div className='navbar flex bg-base-100'>
        <div className='flex-none'>
          <button className='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-5 h-5 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>
        </div>
        <div className='w-20 mx-4'>
          <img src={logo} alt='' />
        </div>
        <div className='flex-1'>
          <Link to='/' className=' text-xl '>
            Elon Gallery
          </Link>
        </div>
        <Toaster
          position='top-right'
          containerStyle={{
            top: 100,
          }}
          reverseOrder={false}
        />
        <div className='flex-1 gap-2'>
          <Link to='/home'>Home</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/services'>Services</Link>
        </div>

        {user?.email ? (
          <div className='flex-none'>
            <div className='dropdown dropdown-end'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <div className='w-10 rounded-full'>
                  <img
                    alt='Tailwind CSS Navbar component'
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
              >
                <li>
                  <a className='justify-between'>
                    <p className='text-[#f4a261] font-semibold'>
                      {user?.displayName}
                    </p>
                  </a>
                </li>
                <li>
                  <Link to='orders'>Orders</Link>
                </li>
                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <Link className='mr-5' to='signup'>
              <button className='btn btn-outline-primary'>Signup</button>
            </Link>
            <Link to='/login'>
              <button className='btn btn-outline-primary'>Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
