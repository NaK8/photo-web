const ContactForm = () => {
  return (
    <div className="w-full md:w-4/5 mx-auto px-3 text-center py-16">
      <form>
        <div className="py-5">
          <input
            className="border-b border-gray-300 p-4 outline-none focus:countline-none w-full focus:border-orange-500"
            type="text"
            placeholder="Name*"
          />
        </div>
        <div className="py-5">
          <input
            type="email"
            placeholder="Email*"
            className="border-b border-gray-300 p-4 outline-none focus:countline-none w-full focus:border-orange-500"
          />
        </div>
        <div className="py-5">
          <textarea
            name="message"
            id="message"
            rows={7}
            placeholder="Message*"
            className="border-b border-gray-300 p-4 outline-none focus:countline-none w-full focus:border-orange-500"
          ></textarea>
        </div>
      </form>
      <button className="py-5 px-12 uppercase rounded-md bg-orange-500 hover:bg-gray-800 text-white transition-all">
        Submit Comment
      </button>
    </div>
  );
};

export default ContactForm;
