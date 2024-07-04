import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PackageList from '../PackageList/PackageList';

const Package = () => {
  const services = useLoaderData();

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-2 mx-8 justify-items-center my-10'>
      {services.map((service) => (
        <PackageList key={service._id} service={service}></PackageList>
      ))}
    </div>
  );
};

export default Package;
