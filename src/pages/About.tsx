import AboutOffer from "../components/AboutOffer";
import Aboutus from "../components/Aboutus";
import BgBanner from "../components/BgBanner";
import Container from "../components/Container";
import Experienced from "../components/Experienced";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";

const About = () => {
  document.title = "Photo Web | About";
  return (
    <>
      <Container>
        <Header />
        <Aboutus />
      </Container>
      <BgBanner url="/about-bg-1.webp" />
      <Container>
        <Experienced />
      </Container>
      <AboutOffer />
      <Container>
        <Testimonial />
      </Container>
      <BgBanner url="/about-bg-2.webp" />
      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default About;
