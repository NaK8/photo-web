import Blogs from "../components/Blogs";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Blog = () => {
  document.title = "Photo Web | Blog";
  return (
    <>
      <Container>
        <Header />
        <Blogs />
        <Footer />
      </Container>
    </>
  );
};

export default Blog;
