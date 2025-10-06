const Sidebar = ({ onNavigate, currentPage }) => {
  const navItems = ['Dashboard', 'Profile', 'Settings'];

  return (
    <div
      className="bg-light border-end flex-shrink-0"
      style={{ width: '250px' }}
    >
      <ul className="nav flex-column p-3">
        {navItems.map((item) => (
          <li className="nav-item" key={item}>
            <a
              className={`nav-link ${currentPage === item ? 'active text-white bg-primary' : 'text-dark'}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item);
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
