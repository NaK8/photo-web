import BgBanner from "../components/BgBanner";
import Container from "../components/Container";
import Footer from "../components/Footer";
import GradientBg from "../components/GradientBg";
import Header from "../components/Header";
import HelloThere from "../components/HelloThere";
import HomeCards from "../components/HomeCards";
import HomeContact from "../components/HomeContact";
import HtmlMap from "../components/HtmlMap";
import Slider from "../components/Slider";

const HomePage = () => {
  document.title = "Photo Web | Home";
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Slider />
      <Container>
        <HelloThere />
      </Container>
      <BgBanner url="/home-bg.jpg" />
      <Container>
        <HomeCards />
      </Container>
      <GradientBg />
      <Container>
        <HomeContact />
      </Container>
      <BgBanner url="/boxer-bg.webp" />
      <HtmlMap />
      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
