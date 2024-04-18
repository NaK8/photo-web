import BgBanner from "./BgBanner";
import OfferBox from "./OfferBox";

const AboutOffer = () => {
  return (
    <BgBanner url="/gradient-bg.jpg">
      <div className="flex-1 text-center py-4">
        <h3 className="text-white font-semibold text-4xl">WHAT I OFFER</h3>
        <p className="text-sm pb-8 text-white">
          Mgnonec accuan malesuada orcinec
        </p>

        <div className="grid grid-cols-3 gap-4">
          <OfferBox
            heading="WEDDING PHOTOGRAPHY"
            para="Wedding photographs give an excellent opportunity to experience the joyful moments of the special day again and again."
          />
          <OfferBox
            heading="PHOTOPROJECT 'SWEET OCTOBER'"
            para="Photo zones in the colorful park, beautiful scenery and decorations, good mood, 15 photos in the author's treatment, as well as tasty treats are waiting for you!"
          />
          <OfferBox
            heading="CATALOG SHOOT"
            para="You need to carry out a professional subject shooting, as it is said - catalog shoot? Professional photographer with pleasure will implement your order."
          />
          <OfferBox
            heading="PORTRAIT PHOTOSHOOT"
            para="A separate kind of photo art , that requires incredible skill of the photographer, it is a portrait photographer."
          />
          <OfferBox
            heading="PHOTOPROJECT 'SPRING ANGEL'"
            para="I will try my best to uncover and show your natural beauty and lightness. Professional  open air photoshoot is guaranteed to give you pleasure. Feel harmony with nature."
          />
          <OfferBox
            heading="THE WORLD ON THE PALM"
            para="You can see the world the way I see it. Plunge into the atmosphere of different countries and cultures, look at the world through the lens of my camera and travel with me."
          />
        </div>
      </div>
    </BgBanner>
  );
};

export default AboutOffer;
