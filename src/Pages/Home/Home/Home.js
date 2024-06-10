import React from 'react';
import cover from '../../../Assets/cover.jpg';
import './Home.css';
import img1 from '../../../Assets/Section-1/img-1.jpg';
import img2 from '../../../Assets/Section-1/img-2.jpg';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <div>
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
      </div>
      <div className='inline-block w-5/6'>
        <div className='flex mt-10 mx-8 '>
          <div className='w-2/4 mt-24 text-4xl font-light '>
            <p>
              If you see something that moves you, and then snap it up, you keep
              a moment.
            </p>
          </div>
          <div className='w-2/4 '>
            {/* <img className='w-3/5 z-40' src={img2} alt='' /> */}
            <img
              className='w-3/4 rounded float-right border-8 border-[#6a994e] shadow-xl'
              src={img1}
              alt=''
            />
          </div>
        </div>
        <div className='flex mt-10 mx-8'>
          <div className='w-2/4'>
            {/* <img className='w-3/5 z-40' src={img2} alt='' /> */}
            <img
              className='w-3/4 rounded border-8 border-[#e0e1dd] shadow-xl'
              src={img2}
              alt=''
            />
          </div>
          <div className='w-2/4 mt-24 text-4xl font-light mr-8'>
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
