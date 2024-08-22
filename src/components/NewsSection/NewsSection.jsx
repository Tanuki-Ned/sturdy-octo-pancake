import Typography from "../common/Typography/Typography";
import NewsCard from "../NewsSection/NewsCard/NewsCard";
import NewsImage from "../../img/News_Image.jpg";
import "../NewsSection/NewsSection.scss";

const NewsSection = () => {
  return (
    <div className="news-container">
      <Typography variant="h2" className="news-section-title">
        News
      </Typography>
      <div className="news-section">
        <NewsCard
          imageSrc={NewsImage}
          heading="Emergency Assistance AI"
          subheading="Fetch dives into emergency management"
          body="Fetch AI, a leading innovator in artificial intelligence solutions, has announced its latest venture into emergency management systems. This bold move aims to revolutionize how emergencies are handled by integrating advanced AI technologies to enhance response times and improve decision-making processes."
          link=<a href="/">Learn More</a>
        />
        <Typography variant="body1">
          <a href="/">More news</a>
        </Typography>
      </div>
    </div>
  );
};

export default NewsSection;
