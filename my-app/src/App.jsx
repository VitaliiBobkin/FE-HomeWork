import { useState } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Content.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  return (
    <div className="d-flex flex-column vh-100">
      <Header />

      <div className="d-flex flex-grow-1" style={{ minHeight: 0 }}>
        <Sidebar
          currentPage={currentPage}
          onNavigate={(page) => setCurrentPage(page)}
        />

        <div className="flex-grow-1 p-4 overflow-auto">
          <Content currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
}

export default App;
