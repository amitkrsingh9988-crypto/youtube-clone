import {
  Home,
  PlaySquare,
  Plus,
  User,
  Library
} from "lucide-react";
function MobileNav() {
  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-item active">
        <Home size={22} />
        <span>Home</span>
      </div>
      <div className="mobile-nav-item">
        <PlaySquare size={22} />
        <span>Shorts</span>
      </div>
      <div className="mobile-create">
        <Plus size={28} />
      </div>
      <div className="mobile-nav-item">
        <User size={22} />
        <span>You</span>
      </div>
      <div className="mobile-nav-item">
        <Library size={22} />
        <span>Library</span>
      </div>
    </nav>
  );
}
export default MobileNav;