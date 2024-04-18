interface SlideTypes {
  url: string;
  heading: string;
}

const Slide = ({ url, heading }: SlideTypes) => {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className="min-h-[350px] h-auto md:min-h-[500px] bg-no-repeat justify-center bg-cover bg-fixed bg-[top_center] flex items-center text-center"
    >
      <h3 className="text-[10vw] font-bold text-white leading-normal">
        {heading}
      </h3>
    </div>
  );
};

export default Slide;
