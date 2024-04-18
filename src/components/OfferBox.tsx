interface OfferBox {
  heading: string;
  para: string;
}

const OfferBox = ({ heading, para }: OfferBox) => {
  return (
    <div className="p-3">
      <h3 className="text-white font-semibold text-xl hover:text-orange-500 hover:cursor-pointer">
        {heading}
      </h3>
      <p className="text-white py-3 text-sm">{para}</p>
    </div>
  );
};

export default OfferBox;
