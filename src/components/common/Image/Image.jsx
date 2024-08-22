import "../Image/Image.scss";

//Define Image Component 
function Image({ ...props }) {
  return (
    <>
    <img {...props} />
    </>
  );
}

export default Image;
