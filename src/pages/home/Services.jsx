import icon1 from '../../assets/icons/small-truck.png';
import icon2 from '../../assets/icons/money-1.png';
import icon3 from '../../assets/icons/discount.png';
import icon4 from '../../assets/icons/money-2.png';

const Services = () => {
  return (
    <section className="max-w my-16 flex flex-col lg:flex-row gap-2">
      <div className="flex items-center gap-2 bg-secondary p-8 rounded-md">
        <img className='w-20' src={icon1} alt="icon" />
        <div>
          <h4 className='text-lg font-semibold'>Delivery Anywhere</h4>
          <p>Shipping On All Over World</p>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-secondary p-8 rounded-md">
        <img className='w-20' src={icon2} alt="icon" />
        <div>
          <h4 className='text-lg font-semibold'>Money Return</h4>
          <p>Back Guarantee in 7 days</p>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-secondary p-8 rounded-md">
        <img className='w-20' src={icon3} alt="icon" />
        <div>
          <h4 className='text-lg font-semibold'>Member Discount</h4>
          <p>On every order over $130.00</p>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-secondary p-8 rounded-md">
        <img className='w-20' src={icon4} alt="icon" />
        <div>
          <h4 className='text-lg font-semibold'>Return Policy</h4>
          <p>Support 24 hours a day</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
