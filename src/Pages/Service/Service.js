import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleService from './SingleService';
import Review from './Review';
import toast from 'react-hot-toast';

const Service = () => {
  const { _id, name, price, image, short_description } = useLoaderData();
  // console.log(_id, name, price, image, short_description);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://elon-photography-server.onrender.com/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [reviews]);

  const filterReview = reviews.filter((rview) => rview.package_id === _id);
  // console.log(filterReview);

  const handleDelete = (id) => {
    // console.log(id);
    const proceed = window.confirm('Are yo sure');
    if (proceed) {
      fetch(`https://elon-photography-server.onrender.com/reviews/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            // alert('Deleted Successfully');
            toast.success('Successfully Deleted', {
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

            const remaining = reviews.filter((rvw) => rvw._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <div className='mx-10 my-10'>
        {/* <h1>Service</h1> */}
        <div className=' flex gap-5 bg-[#edede9] shadow-xl  rounded-md '>
          <img className='w-3/5 rounded-md' src={image} alt='Album' />
          <div className='mt-10'>
            <h2 className='text-4xl text-left'>{name}</h2>
            <p className='text-left mt-5 text-xl'>{short_description}</p>
            <p className='text-left mt-5 text-xl'>
              {' '}
              <span className='font-semibold'>Price:</span> {price}
            </p>
            <div className='absolute'>
              <Link to={`/checkout/${_id}`}>
                <button className='btn btn-outline mt-5'>Book Now</button>
              </Link>
            </div>
            <div className='absolute  bottom-0'>
              {/* <h3 className='text-2xl text-left'>Feel Free to write</h3> */}
              <Review p_id={_id}></Review>
            </div>
          </div>
        </div>
        <h1 className='text-4xl mt-10 mb-5 text-left'>
          Reviews From Customers
        </h1>
        <div>
          {filterReview.map((rview) => (
            <SingleService
              key={rview._id}
              handleDelete={handleDelete}
              rview={rview}
            ></SingleService>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
