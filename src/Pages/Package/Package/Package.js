import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PackageList from '../PackageList/PackageList';

const Package = () => {
  const services = useLoaderData();

  return (
    <div className='grid grid-cols-3 gap-4 mx-8 justify-items-center my-10'>
      {services.map((service) => (
        <PackageList key={service._id} service={service}></PackageList>
      ))}
    </div>
  );
};

export default Package;
