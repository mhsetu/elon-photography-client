import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { AuthProvider } from '../AuthProvider/AuthContext';

const Main = () => {
  const { user } = useContext(AuthProvider);
  return (
    <div>
      <Header></Header>
      <div className='drawer drawer-end'>
        <input id='gallery' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          {/* <label htmlFor='gallery' className='btn btn-primary drawer-button'>
            Open drawer
          </label> */}
        </div>
        <div className='drawer-side'>
          <label htmlFor='gallery' className='drawer-overlay'></label>
          <ul className='menu p-4 w-80 bg-base-100 text-base-content min-h-full'>
            {/* <!-- Sidebar content here --> */}
            {user?.email ? (
              <div>
                <li>
                  <Link to='/home'>Home</Link>
                </li>
                <li>
                  <Link to='/blog'>Blog</Link>
                </li>
                <li>
                  <Link to='/services'>Services</Link>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link to='/home'>Home</Link>
                </li>
                <li>
                  <Link to='/blog'> Blog</Link>
                </li>
                <li>
                  <Link to='/services'>Services</Link>
                </li>
                <li>
                  <Link className='mr-5' to='signup'>
                    Signup
                  </Link>
                </li>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
