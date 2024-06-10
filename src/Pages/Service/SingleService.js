import React, { useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { AuthProvider } from '../../AuthProvider/AuthContext';
import { Toaster } from 'react-hot-toast';

const SingleService = ({ rview, handleDelete }) => {
  const { user } = useContext(AuthProvider);
  const { _id, reviewer_name, review, reviewer_image, email } = rview;

  //   console.log(_id);

  return (
    <div>
      <Toaster
        position='top-right'
        containerStyle={{
          top: 100,
        }}
        reverseOrder={false}
      />
      <div className='chat chat-start'>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img
              alt='Tailwind CSS chat bubble component'
              src={reviewer_image}
            />
          </div>
        </div>
        <div className='chat-header'>{reviewer_name}</div>
        <div className='flex'>
          <div className='chat-bubble'>
            <p>{review}</p>
          </div>
          {user?.email === email ? (
            <div>
              <button className='btn btn-outline btn-warning  ml-3'>
                <EditIcon />
              </button>
              <button
                onClick={() => handleDelete(_id)}
                className='btn btn-outline btn-error ml-3'
              >
                <DeleteForeverIcon />
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleService;
