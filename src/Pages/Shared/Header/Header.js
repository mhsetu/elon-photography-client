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
      <div className='navbar flex place-content-center bg-base-100'>
        <div className='flex-none'>
          <label
            htmlFor='gallery'
            className='btn btn-square btn-ghost drawer-button'
          >
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
          </label>
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

        <div className='inline-block lg:hidden md:hidden'>
          {user?.uid && (
            <div className='dropdown dropdown-end mx-2'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <div className='w-10 rounded-full'>
                  {user?.photoURL ? (
                    <img
                      alt='Tailwind CSS Navbar component'
                      src={user?.photoURL}
                    />
                  ) : (
                    <div className='avatar placeholder'>
                      <div className='bg-neutral text-neutral-content rounded-full w-10'>
                        <span>
                          {user?.displayName?.slice(0, 1).toUpperCase()}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
              >
                <li>
                  <p className='justify-between text-[#f4a261] font-semibold'>
                    {user?.displayName}
                  </p>
                </li>
                <li>
                  <Link to='orders'>Orders</Link>
                </li>
                <li onClick={handleLogout}>
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className='lg:inline-block md:inline-block hidden'>
          {user?.email ? (
            <div className='flex'>
              <Link to='/home'>
                <button className='btn btn-ghost'>Home</button>
              </Link>
              <Link to='/blog'>
                {' '}
                <button className='btn btn-ghost'>Blog</button>
              </Link>
              <Link to='/services'>
                <button className='btn btn-ghost'>Services</button>
              </Link>
              <div className='dropdown dropdown-end mx-2'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
                >
                  <div className='w-10 rounded-full'>
                    {user?.photoURL ? (
                      <img
                        alt='Tailwind CSS Navbar component'
                        src={user?.photoURL}
                      />
                    ) : (
                      <div className='avatar placeholder'>
                        <div className='bg-neutral text-neutral-content rounded-full w-10'>
                          <span>
                            {user?.displayName?.slice(0, 1).toUpperCase()}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
                >
                  <li>
                    <p className='justify-between text-[#f4a261] font-semibold'>
                      {user?.displayName}
                    </p>
                  </li>
                  <li>
                    <Link to='orders'>Orders</Link>
                  </li>
                  <li onClick={handleLogout}>
                    <p>Logout</p>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <Link to='/home'>
                <button className='btn btn-ghost'>Home</button>
              </Link>
              <Link to='/blog'>
                {' '}
                <button className='btn btn-ghost'>Blog</button>
              </Link>
              <Link to='/services'>
                <button className='btn btn-ghost mr-2'>Services</button>
              </Link>
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
    </div>
  );
};

export default Header;
