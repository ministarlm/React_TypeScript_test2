import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const ImageFrame = ({ imageUrl }: Props) => {
  const placeholder = <FontAwesomeIcon icon={faUser} size="3x" color="gray" />;

  return (
    <div className="image-frame">
      {imageUrl ? <img src={imageUrl} alt="" /> : placeholder}
    </div>
  );
};

type Props = { imageUrl: string };

export default ImageFrame;
