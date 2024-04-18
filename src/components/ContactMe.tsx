import { Mail, Map, Phone } from "react-feather";

const ContactMe = () => {
  return (
    <section className="text-center py-8">
      <h3 className="text-4xl text-gray-800 font-semibold">CONTACT ME</h3>
      <p className="text-sm text-gray-500">
        I would like always to stay in touch with you!
      </p>
      <div className="flex justify-evenly flex-col md:flex-row py-8">
        <div className="text-center py-6">
          <Phone size={100} fontWeight={100} className="mx-auto pb-4" />
          <h4 className="font-semibold text-gray-900 hover:text-orange-500 hover:cursor-pointer">
            +1 800 123 4567
          </h4>
          <h4 className="font-semibold text-gray-900 hover:text-orange-500 hover:cursor-pointer">
            +1 800 123 4568
          </h4>
        </div>
        <div className="text-center py-6">
          <Map size={100} fontWeight={100} className="mx-auto pb-4" />
          <h4 className="font-semibold text-gray-900 hover:text-orange-500 hover:cursor-pointer">
            9870 ST VINCENT PLACE, GLASGOW, DC 45 FR 45.
          </h4>
        </div>
        <div className="text-center py-6">
          <Mail size={100} fontWeight={100} className="mx-auto pb-4" />
          <h4 className="font-semibold text-gray-900 hover:text-orange-500 hover:cursor-pointer">
            MAIL@DEMOLINK.ORG
          </h4>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
