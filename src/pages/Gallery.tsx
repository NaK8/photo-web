import BgBanner from "../components/BgBanner";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageGallery from "../components/ImageGallery";
import InterestingInfo from "../components/InterestingInfo";

const Gallery = () => {
  document.title = "Photo Web | Gallery";
  return (
    <>
      <Container>
        <Header />
        <ImageGallery />
      </Container>
      <BgBanner url="/gallery-bg-2.webp" />
      <Container>
        <InterestingInfo />
      </Container>
      <BgBanner url="/gallery-bg.webp" />
      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default Gallery;
