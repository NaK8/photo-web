import ContactForm from "../components/ContactForm";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HtmlMap from "../components/HtmlMap";

const Contact = () => {
  document.title = "Photo Web | Contact";
  return (
    <div>
      <Header />
      <HtmlMap />
      <ContactMe />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
