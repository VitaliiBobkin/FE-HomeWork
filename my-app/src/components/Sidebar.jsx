const Sidebar = () => {
  return (
    <div className="bg-light border-end vh-100 p-3" style={{ width: "200px" }}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
