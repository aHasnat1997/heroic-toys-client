// import bgImg from '../../assets/banner/banner-6.jpg';

const Discount = () => {
  return (
    <section className="bg-base-100 py-16">
      <div className="max-w rounded-3xl">
        <h1 className="text-6xl font-extrabold mb-4">Get upto 20%<br />off with coupon code </h1>
        <div className="form-control lg:w-1/2">
          <div className="relative">
            <input type="text" placeholder="username@email.com" className="input input-bordered w-full pr-16 text-white" />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Generate Code</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
