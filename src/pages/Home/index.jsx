import "../../index.css";
import NavDasboard from "../../components/NavDashboard";
import HeroSection from "../../components/HeroSection";
import CardSection from "../../components/CardSection";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <NavDasboard />
      <HeroSection />
      <CardSection />
      <Footer />
    </>
  );
};

export default Home;
