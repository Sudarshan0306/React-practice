const Size = {
  Small: "small",
  Medium: "medium",
  Large: "large",
};
import "./loader.scss";
const Loader = ({ size = Size.Medium }) => {
  let className = "my-loader";
  className += ` my-loader-${size}`;

  return (
    <>
      <div className={className} />
      
    </>
  );
};

export default Loader;
