import Typography from '../common/Typography/Typography';
import './Copyright.scss'

//Define a copyright component to be placed on the page.
const Copyright = () => {
  return (
    <div className="copy-right">
      <Typography variant="subheading1"> &copy; {new Date().getFullYear()} Fetch. All rights reserved.</Typography>
    </div>
  );
};

export default Copyright;