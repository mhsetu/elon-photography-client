import { Link, useLoaderData } from 'react-router-dom';
import ServiceList from './ServiceList';

const Services = () => {
  const services = useLoaderData();

  return (
    <div className='mx-8 my-8'>
      <h1 className='text-5xl my-5'>Services</h1>
      {/* <p>services :{services.length}</p> */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-8 my-8 justify-items-center'>
        {services.slice(0, 3).map((service) => (
          <ServiceList key={service._id} service={service}></ServiceList>
        ))}
      </div>
      <Link to='/services'>
        <button className='btn btn-success'>Show All</button>
      </Link>
    </div>
  );
};

export default Services;
