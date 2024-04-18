import CountUp from "react-countup";

interface CouterTypes {
  heading: string;
  para: string;
  start: number;
  end: number;
}

const Couter = ({ heading, para, start, end }: CouterTypes) => {
  return (
    <div className="text-center py-4 md:py-3">
      <CountUp
        className="text-7xl md:text-9xl font-bold text-white"
        end={end}
        start={start}
      />
      <h3 className="text-white text-lg md:text-xl py-2">{heading}</h3>
      <p className="text-white">{para}</p>
    </div>
  );
};

export default Couter;
