interface CardTypes {
  MainHeading: string;
  MiniPara: string;
  children: React.ReactNode;
  SecondHeading: string;
  Para: string;
}

const Card = ({
  MainHeading,
  MiniPara,
  children,
  SecondHeading,
  Para,
}: CardTypes) => {
  return (
    <div className="text-center py-8">
      <h2 className="text-4xl font-semibold text-gray-800">{MainHeading}</h2>
      <p className="text-sm text-gray-500">{MiniPara}</p>
      {children}
      <h3 className="text-gray-800 text-xl font-semibold py-3 hover:text-orange-500 hover:cursor-pointer pb-4">
        {SecondHeading}
      </h3>
      <p className="text-sm text-gray-500">{Para}</p>
    </div>
  );
};

export default Card;
