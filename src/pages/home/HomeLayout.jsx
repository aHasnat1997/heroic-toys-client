import { useTitle } from "../../hooks/useTitle";
import Hero from "./Hero";
import Services from "./Services";


const HomeLayout = () => {
  useTitle('Welcome');
  return (
    <div>
      <Hero />
      <Services />
    </div>
  );
};

export default HomeLayout;
