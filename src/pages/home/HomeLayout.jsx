import { useTitle } from "../../hooks/useTitle";
import Gallery from "./Gallery/Gallery";
import Hero from "./Hero";
import Services from "./Services";


const HomeLayout = () => {
  useTitle('Welcome');
  return (
    <div>
      <Hero />
      <Services />
      <Gallery />
    </div>
  );
};

export default HomeLayout;
