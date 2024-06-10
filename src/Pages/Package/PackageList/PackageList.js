import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const PackageList = ({ service }) => {
  // const [data, setData] = useState({});
  const { _id, name, price, image, short_description } = service;
  // const handleSingleService = (singleId) => {

  //   console.log(singleId);
  // };

  return (
    <PhotoProvider>
      <div className='card card-compact w-96 bg-base-100 shadow-xl mb-5'>
        <PhotoView src={image}>
          <figure>
            <img className='max-h-200px' src={image} alt='Shoes' />
          </figure>
        </PhotoView>
        <div className='card-body'>
          <h2 className='card-title'>{name}</h2>
          <p className='text-left'>{short_description}</p>
          <p className='text-left text-2xl font-semibold'>{price}</p>
          <div className='card-actions justify-end'>
            <Link to={`/service/${_id}`}>
              <button className='btn btn-primary mb-5 mr-4'>
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default PackageList;
