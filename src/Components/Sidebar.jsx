import "./Sidebar.css";
import { NavLink } from "react-router";
import {
  MdDashboard,
  MdArticle,
  MdAddCircle,
  MdPeople,
  MdAnalytics,
  MdSettings,
  MdLogout,
  MdMenu
} from "react-icons/md";
import { SlPeople } from "react-icons/sl";


export const Sidebar = () => {

  return (
    <aside className="sidebar">

      <div className="sidebar-user">
          <div className="user-avatar">W</div>
          <div>
            <h4>Admin User</h4>
            <p>Administrator</p>
          </div>
        </div>

      {/* Navigation */}
      <nav className="sidebar-nav">

        <p className="menu-title">MAIN MENU</p>

        <NavLink to="/" className="sidebar-link">
          <MdDashboard />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/posts" className="sidebar-link">
          <MdArticle />
          <span>Articles</span>
        </NavLink>

        <NavLink to="/add-post" className="sidebar-link">
          <SlPeople />
          <span>Authors</span>
        </NavLink>

        <NavLink to="/users" className="sidebar-link">
          <MdPeople />
          <span>Tags</span>
        </NavLink>

        <NavLink to="/analytics" className="sidebar-link">
          <MdAnalytics />
          <span>Analytics</span>
        </NavLink>

        <NavLink to="/settings" className="sidebar-link">
          <MdSettings />
          <span>Settings</span>
        </NavLink>

      </nav>

    
      <div className="sidebar-bottom">
        
        <button className="logout-btn">
          <MdLogout />
          <span>Logout</span>
        </button>

        
      </div>

    </aside>
  );
};
