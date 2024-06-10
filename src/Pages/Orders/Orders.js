import React, { useEffect, useState } from 'react';
import Table from './Table';
import toast, { Toaster } from 'react-hot-toast';

const Orders = () => {
  // const orders = useLoaderData();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(`https://elon-photography-server.onrender.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [order]);

  const handleDelete = (id) => {
    // console.log(id);
    const proceed = window.confirm('Are yo sure');
    if (proceed) {
      fetch(`https://elon-photography-server.onrender.com/orders/${id}`, {
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

            const remaining = order.filter((odr) => odr._id !== id);
            setOrder(remaining);
            // console.log(remaining);
          }
        });
    }
  };
  // console.log(order);
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service Name</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {order.map((order) => (
              <Table
                orders={order}
                handleDelete={handleDelete}
                key={order._id}
              ></Table>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Orders;
