import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../AuthProvider/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const Checkout = () => {
  const { _id, name, price } = useLoaderData();
  //   console.log(service);

  const { user } = useContext(AuthProvider);
  // console.log(user);

  //   console.log(title);
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const Name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const order = {
      service: _id,
      serviceName: name,
      price,
      Name,
      email,
      phone,
      message,
    };
    fetch(`https://elon-photography-server.vercel.app/orders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          // alert('Order Placed');
          toast.success('Successfully Placed', {
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
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className='min-h-[800px]'>
      <Toaster
        position='top-center'
        containerStyle={{
          top: 100,
        }}
        reverseOrder={false}
      />
      <form
        className='mx-10
      '
        onSubmit={handlePlaceOrder}
      >
        {/* <h2 className='text-4xl'>You are about to order:{title}</h2>
        <h4 className='text-2xl'>Price: {price}</h4> */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8'>
          <input
            name='name'
            readOnly
            defaultValue={user?.displayName}
            type='text'
            placeholder='First Name'
            className='input input-bordered w-full '
          />

          <input
            name='phone'
            type='text'
            placeholder='Your Phone'
            className='input input-bordered w-full '
          />
          <input
            name='email'
            type='text'
            placeholder='Your Email'
            defaultValue={user?.email}
            readOnly
            className='input input-bordered w-full '
          />
        </div>
        <textarea
          name='message'
          className='textarea textarea-primary w-full'
          placeholder='Your Message'
        ></textarea>
        <div className='flex'>
          <input
            className='btn btn-outline btn-primary my-5 float-left'
            type='submit'
            value='Place Your Order'
          />
          <Link to='/orders'>
            <button className='btn btn-outline btn-success my-5 ml-2'>
              Show Orders
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
