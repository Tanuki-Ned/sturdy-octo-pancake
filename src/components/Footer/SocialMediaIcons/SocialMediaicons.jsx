import Icon from "../../common/Icon/Icon";

//Define a SocialMediaIcons component that renders a list of social media icons.
const SocialMediaIcons = ({ platforms }) => (
  <div className="social-media-icons">
    {platforms.map((platform, index) => (
      <a key={index} href={platform.href}>
        <Icon name={platform.icon} />
      </a>
    ))}
  </div>
);

export default SocialMediaIcons;