const Quotes = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="60"
    width="60"
    viewBox="0 0 448 512"
    className="mx-auto"
  >
    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
  </svg>
);

const Testimonial = () => {
  return (
    <section className="text-center py-8">
      <h3 className="text-4xl text-gray-800 font-semibold">TESTIMONIALS</h3>
      <p className="text-sm text-gray-500">Duis ultr icies pharetra magnonec</p>
      <div className="flex justify-evenly flex-col md:flex-row py-8">
        <div className="text-center py-6">
          {Quotes}
          <p className="text-sm text-gray-500 p-4">
            We have been working with Sergio for a long time and we can easily
            say that he is our family photographer. Sergio has done a lot photo
            shoots for us and our friends. Very pleased with his work: the
            quality of the photos, photo books, flexibility and efficiency.
            Thank you, Sergio!
          </p>
          <h4 className="font-semibold text-gray-900 hover:text-orange-500 hover:cursor-pointer">
            +1 800 123 4567
          </h4>
        </div>
        <div className="text-center py-6">
          {Quotes}
          <p className="text-sm text-gray-500 p-4">
            Recently in my life was an important event - my wedding. Friends
            advised to go to the professional photographer Sergio Sobacovich. At
            the first meeting, Sergio has produced very good impression and made
            a number of interesting proposals.
          </p>
          <h4 className="font-semibold text-gray-900 hover:text-orange-500 hover:cursor-pointer">
            +1 800 123 4567
          </h4>
        </div>
        <div className="text-center py-6">
          {Quotes}
          <p className="text-sm text-gray-500 p-4">
            Sergio, thank you very much for the photos! It was incredibly cool
            to be involved in your project, "Sweet October". They are very
            beautiful, especially printed. All the relatives are
            delighted.Impressions from the process of the shooting were
            unforgettable.
          </p>
          <h4 className="font-semibold text-gray-900 hover:text-orange-500 hover:cursor-pointer">
            +1 800 123 4567
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
