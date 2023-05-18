import { useTitle } from "../../hooks/useTitle";
import Customers from "./Customers";
import Discount from "./Discount";
import Gallery from "./Gallery";
import Hero from "./Hero";
import OurProducts from "./OurProducts";
import Services from "./Services";


const HomeLayout = () => {
  useTitle('Welcome');
  return (
    <div>
      <Hero />
      <Services />
      <Gallery />
      <OurProducts />
      <Customers />
      <Discount />
    </div>
  );
};

export default HomeLayout;
