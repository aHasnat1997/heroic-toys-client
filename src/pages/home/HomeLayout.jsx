import { useTitle } from "../../hooks/useTitle";
import Customers from "./Customers";
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
    </div>
  );
};

export default HomeLayout;
