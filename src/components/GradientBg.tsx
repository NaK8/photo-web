import BgBanner from "./BgBanner";
import Couter from "./Couter";

const GradientBg = () => {
  return (
    <BgBanner url="/gradient-bg.jpg">
      <div className="text-center flex-1 py-4">
        <h3 className="text-white text-5xl py-2">WHAT I DO</h3>
        <p className="text-white pb-12 text-sm">
          You can order any type of photo shoot
        </p>
        <div className="flex justify-evenly flex-col md:flex-row">
          <Couter
            start={200}
            end={387}
            heading="AWARDS"
            para="I usually take part in exhibitions"
          />
          <Couter
            start={1}
            end={78}
            heading="POTRAIT AWARDS"
            para="Shooting people is my passion"
          />
          <Couter
            start={1}
            end={20}
            heading="ARCHITECTURE PHOTO"
            para="Аble to breathe life into any premise"
          />
          <Couter
            start={1}
            end={55}
            heading="MOTION PHOTO"
            para="I can stop an instant"
          />
        </div>
      </div>
    </BgBanner>
  );
};

export default GradientBg;
