import CircleMeter from "./CircleMeter";

const Experienced = () => {
  return (
    <div className="text-center py-8">
      <h3 className="text-gray-800 text-4xl font-semibold">
        MY EXPERIENCE & SKILLS
      </h3>
      <p className="text-sm text-gray-500">I cultivate every day for you</p>
      <p className="text-sm text-gray-500 py-5">
        Photography has become an integral part of our lives. Agree, it is
        difficult sometimes to keep everything in memory only. Time is so
        fleeting. But it's nice to sit in the evening with loved ones, open the
        album and relive all of your important moments. "That's my birthday!
        Here are the first steps of our baby. Here, mother's priceless tears at
        my wedding." There are so many important events!
      </p>
      <div className="flex justify-center md:justify-evenly flex-col md:flex-row items-center md:items-baseline pt-8 pb-4">
        <CircleMeter
          heading="CELEBRITIES COOPERATE WITH ME"
          percentage={60}
          textValue="60%"
        />
        <CircleMeter heading="HAPPY CLIENTS" percentage={90} textValue="90%" />
        <CircleMeter
          heading="WORKS WON AWARDS"
          percentage={75}
          textValue="75%"
        />
        <CircleMeter
          heading="ALL CLIENTS ARE ABIDING"
          percentage={70}
          textValue="70%"
        />
      </div>
    </div>
  );
};

export default Experienced;
