import React, { useContext } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { AuthProvider } from '../../AuthProvider/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const Review = ({ p_id }) => {
  const { user } = useContext(AuthProvider);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = event.target.comment.value;
    console.log(comment);
    const review = {
      package_id: p_id,
      email: user.email,
      reviewer_name: user.displayName,
      review: comment,
      reviewer_image: user.photoURL,
    };

    fetch(`https://elon-photography-server.onrender.com/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          // alert('Thanks for review');
          toast.success('Thanks for Review', {
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
    <div>
      <Toaster
        position='top-right'
        containerStyle={{
          top: 100,
        }}
        reverseOrder={false}
      />
      <form
        className='font-semibold flex place-items-center'
        onSubmit={handleSubmit}
      >
        <div className='chat-image avatar mr-2 mb-1'>
          <div className='w-10 rounded-full'>
            <img
              alt='Tailwind CSS chat bubble component'
              src={user?.photoURL}
            />
          </div>
        </div>
        <input
          name='comment'
          type='text'
          placeholder='Write a review'
          className='input input-bordered w-full max-w-xs'
        />
        <button className='btn btn-outline btn-primary ml-2'>
          <SendIcon className='ml-2' />
        </button>
      </form>
    </div>
  );
};

export default Review;
