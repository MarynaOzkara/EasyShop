import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import WomenTopWear from "../components/Products/WomenTopWear";
import BestSeller from "../components/Products/BestSeller";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrivals />
      <BestSeller />
      <WomenTopWear />
      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
