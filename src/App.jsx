import "./App.css";

import CategoryBar from "./components/CategoryBar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VideoCard from "./components/VideoCard";
import MobileNav from "./components/MobileNav";

import "./styling/Responsive.css";
import "./styling/VideoCard.css";
import "./styling/Sidebar.css";
import "./styling/Navbar.css";
import "./styling/CategoryBar.css";

import videos from "./data/videos";

function App() {
  return (
    <>
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="content">
          <CategoryBar />

          <div className="video-grid">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
              />
            ))}
          </div>
        </main>
      </div>

      <MobileNav />
    </>
  );
}

export default App;