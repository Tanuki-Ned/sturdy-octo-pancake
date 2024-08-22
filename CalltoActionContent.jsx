import Typography from "../../common/Typography/Typography";
import Button from "../../common/Button/Button";
import ClickImage from "../../../img/click_here.png";
import "./CallToActionContent.scss";

const CTAContent = ({ title, onButtonClick }) => (
  // The main container for the Call to Action content
  <div className="cta-content">
    <Typography variant="subheading1" className="cta-content__title">
      {title}
    </Typography>
     {/* ImageButton component for the clickable image */}
     <Button onClick={onButtonClick}>
      <img src={ClickImage} alt="Click Here" />
    </Button>
  </div>
);

export default CTAContent;
