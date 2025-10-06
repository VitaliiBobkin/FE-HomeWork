const Header = () => {
  return (
    <header
      className="bg-dark text-white shadow-sm d-flex align-items-center"
      style={{ height: "60px", width: "100vw" }}
    >
      <div className="px-3">
        <i className="bi bi-rocket-takeoff-fill me-2"></i>
        <span>My React App</span>
      </div>
    </header>
  );
};

export default Header;
