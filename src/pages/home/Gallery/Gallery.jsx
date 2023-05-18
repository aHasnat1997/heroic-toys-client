import gallery1 from '../../../assets/gallery/gallery-img-1.jpg';
import gallery2 from '../../../assets/gallery/gallery-img-4.jpg';
import gallery3 from '../../../assets/gallery/gallery-img-11.jpg';
import gallery4 from '../../../assets/gallery/gallery-img-6.jpg';
import gallery5 from '../../../assets/gallery/gallery-img-8.jpg';
import gallery6 from '../../../assets/gallery/gallery-img-9.jpg';
import gallery7 from '../../../assets/gallery/gallery-img-2.jpg';
import gallery9 from '../../../assets/gallery/gallery-img-10.jpg';
import gallery10 from '../../../assets/gallery/gallery-img-7.jpg';

const Gallery = () => {
  return (
    <>
      {/* <h1 className='text-center text-8xl mb-8'>Gallery</h1> */}
      <div className='mb-16 grid grid-cols-3 lg:grid-cols-6'>
        <div className="overflow-hidden">
          <img className='h-full duration-[2000ms] hover:scale-150' src={gallery1} />
        </div>
        <div className='flex flex-col'>
          <div className="h-1/2 overflow-hidden">
            <img className='h-full duration-[2000ms] hover:scale-150' src={gallery2} />
          </div>
          <div className="h-1/2 overflow-hidden">
            <img className='h-full duration-[2000ms] hover:scale-150' src={gallery3} />
          </div>
        </div>
        <div className="overflow-hidden">
          <img className='h-full duration-[2000ms] hover:scale-150' src={gallery4} />
        </div>
        <div className='flex flex-col'>
          <div className="h-1/2 overflow-hidden">
            <img className='h-full duration-[2000ms] hover:scale-150' src={gallery5} />
          </div>
          <div className="h-1/2 overflow-hidden">
            <img className='h-full duration-[2000ms] hover:scale-150' src={gallery6} />
          </div>
        </div>
        <div className="overflow-hidden">
          <img className='h-full duration-[2000ms] hover:scale-150' src={gallery7} />
        </div>
        <div className='flex flex-col'>
        <div className="h-1/2 overflow-hidden">
            <img className='h-full duration-[2000ms] hover:scale-150' src={gallery9} />
          </div>
          <div className="h-1/2 overflow-hidden">
            <img className='h-full w-full duration-[2000ms] hover:scale-150' src={gallery10} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
