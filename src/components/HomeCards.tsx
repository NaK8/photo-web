import Card from "./Card";
import CircleImg from "./CircleImg";

const circleCardData = [
  {
    MainHeading: "ARCHITECTURE",
    MiniPara: "Even walls can be magical",
    SecondHeading: "ARCHITECTURAL PHOTOGRAPHING",
    Para: "This task for professional photographer is quite regular. It is a separate, quite a specific genre of photographs whose mission - appealing to the viewer, reflect the beauty of the buildings, structures and building structures.",
    Circle: {
      Img: "/home-circle-1.webp",
      Alt: "architechture",
      className: "mx-auto py-6 md:w-[350px] w-3/6",
    },
  },
  {
    MainHeading: "PORTRAIT",
    MiniPara: "Look straight into the soul",
    SecondHeading: "PORTRAIT PHOTOGRAPHER",
    Para: "The photographic art of portraiture requires a special highly artistic perception. These pictures clearly express emotions, each pixel contains surreal lighting and demonstrates all that is best in portrait photography.",
    Circle: {
      Img: "/home-circle-2.webp",
      Alt: "portrait",
      className: "mx-auto py-6 md:w-[350px] w-3/6",
    },
  },
  {
    MainHeading: "MOTION",
    MiniPara: "All your life is motion",
    SecondHeading: "MOTION PHOTOGRAPHY",
    Para: "It's an interesting challenge, but at the same time quite difficult. The main difficulty is to convey the effect of motion in the picture and, if possible, all the dynamics and emotions of the event.",
    Circle: {
      Img: "/home-circle-3.webp",
      Alt: "motion",
      className: "mx-auto py-6 md:w-[350px] w-3/6",
    },
  },
];

const HomeCards = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 p-4">
      {circleCardData.map((item, index) => (
        <Card
          key={index}
          MainHeading={item.MainHeading}
          MiniPara={item.MiniPara}
          SecondHeading={item.SecondHeading}
          Para={item.Para}
        >
          <CircleImg
            Img={item.Circle.Img}
            Alt={item.Circle.Alt}
            className={item.Circle.className}
          />
        </Card>
      ))}
    </section>
  );
};

export default HomeCards;
