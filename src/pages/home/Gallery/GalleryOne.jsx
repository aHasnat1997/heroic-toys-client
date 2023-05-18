import gallery1 from '../../../assets/gallery/gallery-img-1.jpg';
import gallery2 from '../../../assets/gallery/gallery-img-4.jpg';
import gallery3 from '../../../assets/gallery/gallery-img-11.jpg';
import gallery4 from '../../../assets/gallery/gallery-img-6.jpg';
import gallery5 from '../../../assets/gallery/gallery-img-8.jpg';
import gallery6 from '../../../assets/gallery/gallery-img-9.jpg';
import gallery7 from '../../../assets/gallery/gallery-img-2.jpg';
import gallery9 from '../../../assets/gallery/gallery-img-10.jpg';
import gallery10 from '../../../assets/gallery/gallery-img-7.jpg';

const GalleryOne = () => {
  return (
    <div className='grid grid-cols-3 lg:grid-cols-6 overflow-hidden'>
      <img src={gallery1} />
      <div>
        <img src={gallery2} />
        <img src={gallery3} />
      </div>
      <img src={gallery4} />
      <div>
        <img src={gallery5} />
        <img src={gallery6} />
      </div>
      <img src={gallery7} />
      <div>
        <img src={gallery9} />
        <img src={gallery10} />
      </div>
    </div>
  );
};

export default GalleryOne;
