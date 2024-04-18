import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface NewModelTypes {
  src: string;
  alt: string;
}

const NewModal = ({ src, alt }: NewModelTypes) => {
  return (
    <Zoom>
      <img
        className="h-[280px] w-[280px] rounded-full object-cover hover:filter hover:cursor-pointer hover:grayscale"
        alt={alt}
        src={src}
        width="500"
      />
    </Zoom>
  );
};

export default NewModal;
