import classnames from "classnames";
import "./Typography.scss";

// 1.Degin the HTML tag that the component supports

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
}

// 2.  Create a functional component

const Typography = ({ variant, children }) => {
  //If the variant exits in variantMapping, then use it, otherwise, use a paragraph
  const Component = variant ? variantsMapping[variant] : "p";

  return (
    <Component
      className={classnames({
        [`variant-${variant}`]: variant,
      })}
    >
      {children}
    </Component>
  );
};

export default Typography;
