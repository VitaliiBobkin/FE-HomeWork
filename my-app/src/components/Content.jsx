import img from "../assets/images.jpeg";


const Content = () => {
  return (
    <div className="p-4">
      <h2>Welcome</h2>
      <p>
        <img src={img} alt="Placeholder" />
      </p>
    </div>
  );
};

export default Content;
