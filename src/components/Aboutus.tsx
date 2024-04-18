import CircleImg from "./CircleImg";
import ReadMore from "./ReadMore";

const Aboutus = () => {
  return (
    <section className="grid md:grid-cols-[40%_60%] grid-cols-1 py-8">
      <CircleImg
        Img="/about-img.jpg"
        Alt="about me"
        className="h-[350px] w-[350px] md:h-[400px] md:w-[400px] object-cover rounded-full mx-auto md:mx-1"
      />
      <div>
        <div className="w-full md:w-fit text-center py-8">
          <h1 className="text-gray-800 text-3xl font-semibold">
            A FEW WORDS ABOUT ME
          </h1>
          <p className="text-gray-500 text-sm">My Philosophy</p>
        </div>
        <h3 className="text-xl text-gray-800 font-semibold hover:cursor-pointer hover:text-orange-500">
          WHO IS THE PHOTOGRAPHER?
        </h3>
        <p className="py-4 text-gray-500 text-sm">
          Artist. instead of an easel - a tripod. instead of brushes - a camera
          that transmits feelings and emotions in one shot. and one day opening
          the album, reviewing pictures in the minds memories begin to emerge,
          the same emotions that had been on the day of the shooting. And by the
          will of a smile appears on the face, and maybe even tears, tears of
          joy.
        </p>
        <p className="py-4 text-gray-500 text-sm">
          And you realize that there is something to show our grandchildren
          proudly saying, "it is me" this site is a small part of my work, i
          want to show you. with each pair, with every man, i have shot,
          watching their emotions, feelings - i was feeling the same and tried
          to show these feelings in the photos. That is how i see this world.
          enjoy watching
        </p>
        <ReadMore />
      </div>
    </section>
  );
};

export default Aboutus;
