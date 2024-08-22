import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Icon.scss';

//Define Icon Component-displays a social media icon based on the passed name prop. Imported from FontAwesome.
const Icon = ({ name }) => {
  const iconMap = {
    twitter: faXTwitter,
    facebook: faFacebook,
    instagram: faInstagram,
    youtube: faYoutube,
  
  };

  return <FontAwesomeIcon icon={iconMap[name]} className='icon'/>;
};

export default Icon;