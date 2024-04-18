import NewModal from "./NewModal";

const ImageGallery = () => {
  return (
    <>
      <div className="flex justify-center gap-8 pt-12">
        <span className="text-gray-800 font-bold hover:text-orange-500 transition-all hover:cursor-pointer uppercase">
          Show All
        </span>
        <span className="text-gray-800 font-bold hover:text-orange-500 transition-all hover:cursor-pointer uppercase">
          First Category
        </span>
        <span className="text-gray-800 font-bold hover:text-orange-500 transition-all hover:cursor-pointer uppercase">
          Second Category
        </span>
        <span className="text-gray-800 font-bold hover:text-orange-500 transition-all hover:cursor-pointer uppercase">
          Third Category
        </span>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8">
        <NewModal src="/gallery-img01-bg.webp" alt="gallary 1" />
        <NewModal src="/gallery-img02-bg.webp" alt="gallary 2" />
        <NewModal src="/gallery-img08-bg.webp" alt="gallary 8" />
        <NewModal src="/gallery-img04-bg.webp" alt="gallary 4" />
        <NewModal src="/gallery-img05-bg.webp" alt="gallary 5" />
        <NewModal src="/gallery-img06-bg.webp" alt="gallary 6" />
        <NewModal src="/gallery-img07-bg.webp" alt="gallary 7" />
        <NewModal src="/gallery-img03-bg.webp" alt="gallary 3" />
      </section>
    </>
  );
};

export default ImageGallery;
