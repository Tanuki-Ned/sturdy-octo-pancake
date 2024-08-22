import FooterSection from "./FooterSection/FooterSection";
import "./Footer.scss";
import SocialMediaIcons from "./SocialMediaIcons/SocialMediaicons";
import Image from "../common/Image/Image";
import Logo from "../../img/logo.png";

//Define a Footer component that renders the footer section, Social Medial Icons and Logo components
const Footer = () => {
  const navLinksAbout = [
    { href: "/news", text: "News" },
    { href: "/values", text: "Our Values" },
    { href: "/security", text: "Security" },
    { href: "/careers", text: "Careers" },
    { href: "/residency", text: "Residency" },
  ];

  const navLinksResearch = [
    { href: "/overview", text: "Overview" },
    { href: "/index", text: "Index" },
    { href: "/uxdesign", text: "UX Design" },
    { href: "/articles", text: "Articles" },
  ];

  const navLinksResources = [
    { href: "/apioverview", text: "API Overview" },
    { href: "/pricing", text: "Pricing" },
    { href: "/documentation", text: "Documentation" },
    { href: "/apilogin", text: "API Login" },
  ];

  const navLinksTerms = [
    { href: "/terms-of-use", text: "Terms of Use" },
    { href: "/privacy-policy", text: "Privacy Policy" },
    { href: "/brand-guidelines", text: "Brand Guidelines" },
    { href: "/other-policies", text: "Other Policies" },
  ];

  const socialPlatforms = [
    { href: "https://twitter.com", icon: "twitter" },
    { href: "https://facebook.com", icon: "facebook" },
    { href: "https://instagram.com", icon: "instagram" },
    { href: "https://youtube.com", icon: "youtube" },
  ];

  return (
    <footer className="footer">
      <div className="logo-and-social">
        <a href="/" className="footer-logo">
          <Image src={Logo} alt="Logo" />
        </a>
        <SocialMediaIcons platforms={socialPlatforms} />
      </div>
      <div className="footer-sections">
        <FooterSection title="About Us" links={navLinksAbout} />
        <FooterSection title="Research" links={navLinksResearch} />
        <FooterSection title="Resources" links={navLinksResources} />
        <FooterSection title="Terms & Policies" links={navLinksTerms} />
      </div>
    </footer>
  );
};

export default Footer;

