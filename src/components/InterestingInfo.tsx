import ReadMore from "./ReadMore";

const InterestingInfo = () => {
  return (
    <section className="text-center py-8">
      <h3 className="text-4xl text-gray-800 font-semibold">INTERESTING INFO</h3>
      <p className="text-sm text-gray-500">
        Usefull advice for your development
      </p>
      <div className="flex justify-evenly flex-col md:flex-row py-8">
        <div className="text-left py-6 px-4">
          <h4 className="font-semibold text-xl text-gray-900 hover:text-orange-500 hover:cursor-pointer">
            HOW TO CHOOSE A FLASH FOR THE CAMERA
          </h4>
          <p className="text-sm text-gray-500 py-5">
            No flash will replace a full-fledged studio lighting (although, in
            the studio with multiple external flashes, you can use the same
            lighting circuits). But it allows to obtain the correct
            flash-exposed shots with a lack of light in a sequential shooting -
            especially indoors. And also greatly gains at light enough, but
            incorrect, creates sharp and unsightly shadows - for example, at
            bright summer day, or against backlight.
          </p>
          <ReadMore />
        </div>
        <div className="text-left py-6 px-4">
          <h4 className="font-semibold text-xl text-gray-900 hover:text-orange-500 hover:cursor-pointer">
            HOW TO BE PHOTOGRAPHED, POSTURES (PHOTO)
          </h4>
          <p className="text-sm text-gray-500 py-5">
            It happens that after a lot of time spent to apply the right makeup,
            selection of colors, clothes and suitable background the result is
            not as good as expected. And it seems the camera was set up as it
            should, and interesting background is selected, but the result is
            not what was expected. And sometimes, hastily we get brilliantly
            executed shots. Many people complain of being not photogenic, but it
            has no sense.
          </p>
          <ReadMore />
        </div>
      </div>
    </section>
  );
};

export default InterestingInfo;
