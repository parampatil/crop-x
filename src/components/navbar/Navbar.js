import "./Navbar.css";
import logo from "./transparent cropx logo.png";

const Navbar = (props) => {
  const activeInterfacehandler = (Interface) => {
    props.activeInterface(Interface);
  };

  return (
    <nav className="flex justify-between nav-bar">
      <div className="flex left-side-items">
        <li
          style={{ fontSize: "30px", fontWeight: "bold", color: "white" }}
          className="bg-white pa2 flex items-center ma2 br3 grow"
          onClick={() => activeInterfacehandler("landing")}
        >
          <a href="#">
            <img src={logo}></img>
          </a>
        </li>
      </div>
      <div className="flex right-side-items">
        <li
          className="flex items-center ma3 br2 pa2 pointer grow"
          onClick={() => activeInterfacehandler("dashboard")}
        >
          <a>Dashboard</a>
        </li>
        <li
          className="flex items-center ma3 br2 pa2 pointer grow"
          onClick={() => activeInterfacehandler("userinput")}
        >
          <a>Test Results</a>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
