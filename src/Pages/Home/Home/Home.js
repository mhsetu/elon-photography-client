import React from 'react';
import cover from '../../../Assets/cover.jpg';
import './Home.css';
import img1 from '../../../Assets/Section-1/img-1.jpg';
import img2 from '../../../Assets/Section-1/img-2.jpg';
import Services from '../Services/Services';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* <div>
        <div>
          <img className=' w-full centered ' src={cover} alt='' />
        </div>
        <div className='para w-full h-[430px]'>
          <p className=' text-white text-3xl mt-[150px] font-light'>
            {' '}
            Photography is the art of capturing fleeting moments and turning
            them into timeless stories.
          </p>
        </div>
      </div> */}

      <div
        className='hero min-h-screen'
        style={{
          backgroundImage: `url("https://plus.unsplash.com/premium_photo-1664367173144-7e854e199524?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-lg'>
            <p className='mb-5 text-3xl font-light'>
              Photography is the art of capturing fleeting moments and turning
              them into timeless stories.
            </p>
            <Link to='/login'>
              <button className='btn btn-primary'>Get Started</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='mx-auto w-5/6'>
        <div className='lg:flex mt-10  mx-8 '>
          <div className='lg:w-2/4 mt-24 text-4xl font-light'>
            <p>
              If you see something that moves you, and then snap it up, you keep
              a moment.
            </p>
          </div>
          <div className='lg:w-2/4'>
            {/* <img className='w-3/5 z-40' src={img2} alt='' /> */}
            <img
              className='lg:w-3/4 rounded lg:mt-0 md:mt-0 mt-5 lg:mb-0 md:mb-0 mb-12 float-right border-8 border-[#6a994e] shadow-xl'
              src={img1}
              alt=''
            />
          </div>
        </div>
        <div className='lg:flex mt-10 mx-8'>
          <div className='lg:w-2/4'>
            {/* <img className='w-3/5 z-40' src={img2} alt='' /> */}
            <img
              className='lg:w-3/4 rounded border-8 border-[#e0e1dd]  shadow-xl'
              src={img2}
              alt=''
            />
          </div>
          <div className='lg:w-2/4 lg:mt-24 mt-5 text-4xl font-light'>
            <p>
              The magic of photography lies in its ability to reveal the
              extraordinary in the ordinary.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
