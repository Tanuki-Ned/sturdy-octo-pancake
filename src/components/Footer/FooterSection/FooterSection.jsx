import Typography from "../../common/Typography/Typography";
import LinkList from "../LinkList/LinkList";
import '../FooterSection/FooterSection.scss';

//Define-Creates a FooterSection component that will house the footer links and titles.
const FooterSection = ({ title, links}) => (
  <div className="footer-section">
    <Typography variant="h6">{title}</Typography>
    <LinkList links={links} />
  </div>
);

export default FooterSection;