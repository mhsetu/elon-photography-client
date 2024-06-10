import React, { useContext } from 'react';
import { AuthProvider } from '../../AuthProvider/AuthContext';
import { DeleteForever } from '@mui/icons-material';

const Table = ({ orders, handleDelete }) => {
  const { _id, email, message, phone, price, serviceName } = orders;
  // console.log(_id);
  const { user } = useContext(AuthProvider);

  return (
    <tr>
      <th>
        <label className='ml-5'>
          <button onClick={() => handleDelete(_id)} className='btn btn-glass'>
            <DeleteForever fontSize='large' color='error' />
          </button>
        </label>
      </th>
      <td>
        <div className='flex items-center gap-3'>
          <div className='avatar'>
            <div className='mask mask-squircle w-12 h-12'>
              <img src={user?.photoURL} alt='Avatar Tailwind CSS Component' />
            </div>
          </div>
          <div>
            <div className='font-bold'>{user?.displayName}</div>
            <div className='text-sm opacity-50'>{email}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className='badge badge-ghost badge-sm'>{price}</span>
      </td>
      <td> {phone}</td>
      <th>
        <p className='font-normal'>{message}</p>
      </th>
    </tr>
  );
};

export default Table;
