interface CircleImgTypes {
  Img: string;
  Alt: string;
  className: string;
}

const CircleImg = ({ Img, Alt, className }: CircleImgTypes) => {
  return <img className={className} src={Img} alt={Alt} />;
};

export default CircleImg;
