import "../WorkSectionImage/WorkSectionImage.scss";
import Image from "../../common/Image/Image";
import WorkImage from "../../../img/Work_Image.jpg";
import Typography from "../../common/Typography/Typography";
import ResearchImage from "../../../img/Work_Research.jpg";
import ComImage from "../../../img/Work_Communication.jpg";

function WorkSectionImage() {
  return (
    <div className="work-section">
      <Typography variant="h3" className="work-section-title">
        Harnessing AI to Empower Your Vision
      </Typography>
      <div className="work-section-image">
        <Image src={WorkImage} />
        <div className="section-text">
          <Typography variant="h3">Images</Typography>
        </div>
      </div>
      <div className="work-section-image">
        <Image src={ResearchImage} />
        <div className="section-text">
          <Typography variant="h3">Research</Typography>
        </div>
      </div>
      <div className="work-section-image">
        <Image src={ComImage} />
        <div className="section-text">
          <Typography variant="h3">Communication</Typography>
        </div>
      </div>
    </div>
  );
}

export default WorkSectionImage;
