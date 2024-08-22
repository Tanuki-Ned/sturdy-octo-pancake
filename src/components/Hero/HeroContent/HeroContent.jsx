import Typography from "../../common/Typography/Typography";
import Logo from "../Logo/Logo";
import LogoText from "../LogoText/LogoText";
import Button from "../../common/Button/Button";
import { motion } from "framer-motion"; 

// Define a functional component named HeroContent
const HeroContent = () => {
  return (
    <motion.div className="hero-content">
      <motion.div
        className="hero-left"
        initial={{ x: "-100vw" }}
        animate={{ x: 0}}
        transition={{ duration: 2, ease: "circInOut" }}
      >
        <Logo />
      </motion.div>
      <motion.div
        className="hero-right"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 2, ease: "circInOut" }}
      >
        <LogoText />
        <Typography variant="h3">Unleashing Innovation</Typography>
        <Button>Go Fetch</Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
