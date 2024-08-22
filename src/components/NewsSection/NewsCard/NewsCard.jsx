import Image from "../../common/Image/Image";
import Typography from "../../common/Typography/Typography"; 
import Link from "../../common/Link/Link";
import './NewsCard.scss';

//Define the NewsCard component that renders a news card with an image, heading, subheading,
const NewsCard = ({ imageSrc, heading, subheading, body, link }) => {
  return (
    <div className="news-card">
      <Image src={imageSrc} alt={heading} className="news-card-image" />
      <div className="news-card-content">
        <Typography variant="h4" className="news-card-heading">{heading}</Typography>
        <Typography variant="h6" className="news-card-subheading">{subheading}</Typography>
        <Typography variant="body1" className="news-card-body">{body}</Typography>
        <Typography variant="body1" className="news-card-link">
          <Link href={link}>
            Learn More
          </Link>
          </Typography>
      </div>
    </div>
  );
};

export default NewsCard;