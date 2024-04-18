import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircleMetertypes {
  heading: string;
  percentage: number;
  textValue: string;
}

const CircleMeter = ({ heading, percentage, textValue }: CircleMetertypes) => {
  return (
    <div className="min-h-[250px] w-[250px] text-center my-4">
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={1}
        text={`${textValue}`}
        styles={buildStyles({
          pathColor: "rgb(249 115 22 / 1)",
          trailColor: "#ffff",
          textColor: "#838383",
        })}
      >
        <div style={{ width: "90%" }}>
          <CircularProgressbar
            value={100}
            strokeWidth={5}
            styles={buildStyles({
              pathColor: "#efefef",
            })}
          />
        </div>
      </CircularProgressbarWithChildren>
      <h3 className="text-gray-800 hover:text-orange-500 pt-3 md:pt-6 hover:cursor-pointer transition-all uppercase font-semibold text-lg">
        {heading}
      </h3>
    </div>
  );
};

export default CircleMeter;
