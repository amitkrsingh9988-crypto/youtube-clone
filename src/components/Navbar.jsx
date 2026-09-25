import {
  Menu,
  Search,
  Mic,
  Video,
  Bell,
  User
} from "lucide-react";
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="icon-button">
          <Menu size={24} />
        </button>
        <div className="youtube-logo">
          <span className="youtube-icon">▶</span>
          <span>YouTube</span>
        </div>
      </div>
      <div className="navbar-center">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
          />
          <button className="search-button">
            <Search size={22} />
          </button>
        </div>
        <button className="mic-button">
          <Mic size={21} />
        </button>
      </div>
      <div className="navbar-right">
        <button className="create-button">
          <Video size={22} />
          <span>Create</span>
        </button>
        <button className="icon-button">
          <Bell size={23} />
        </button>
        <button className="profile-button">
          <User size={21} />
        </button>
      </div>
    </header>
  );
}
export default Navbar;