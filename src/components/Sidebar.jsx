import {
  Home,
  PlaySquare,
  Bell,
  User,
  History,
  ListVideo,
  Video,
  Clock,
  ThumbsUp,
  Flame,
  Music,
  Film,
  Radio,
  Gamepad2,
  Trophy
} from "lucide-react";
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-item active">
          <Home size={22} />
          <span>Home</span>
        </div>
        <div className="sidebar-item">
          <PlaySquare size={22} />
          <span>Shorts</span>
        </div>
        <div className="sidebar-item">
          <Bell size={22} />
          <span>Subscriptions</span>
        </div>
      </div>

      <div className="sidebar-divider"></div>
      <div className="sidebar-section">
        <h3 className="sidebar-heading">
          You
        </h3>
        <div className="sidebar-item">
          <User size={22} />
          <span>Your channel</span>
        </div>
        <div className="sidebar-item">
          <History size={22} />
          <span>History</span>
        </div>
        <div className="sidebar-item">
          <ListVideo size={22} />
          <span>Playlists</span>
        </div>
        <div className="sidebar-item">
          <Video size={22} />
          <span>Your videos</span>
        </div>
        <div className="sidebar-item">
          <Clock size={22} />
          <span>Watch later</span>
        </div>
        <div className="sidebar-item">
          <ThumbsUp size={22} />
          <span>Liked videos</span>
        </div>
      </div>

      <div className="sidebar-divider"></div>


      {/* EXPLORE SECTION */}

      <div className="sidebar-section">

        <h3 className="sidebar-heading">
          Explore
        </h3>
        <div className="sidebar-item">
          <Flame size={22} />
          <span>Trending</span>
        </div>
        <div className="sidebar-item">
          <Music size={22} />
          <span>Music</span>
        </div>

        <div className="sidebar-item">
          <Film size={22} />
          <span>Movies & TV</span>
        </div>

        <div className="sidebar-item">
          <Radio size={22} />
          <span>Live</span>
        </div>

        <div className="sidebar-item">
          <Gamepad2 size={22} />
          <span>Gaming</span>
        </div>

        <div className="sidebar-item">
          <Trophy size={22} />
          <span>Sports</span>
        </div>

      </div>

    </aside>
  );
}
export default Sidebar;