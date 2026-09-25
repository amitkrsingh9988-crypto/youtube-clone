import { MoreVertical } from "lucide-react";
function VideoCard({ video }) {
  return (
    <div className="video-card">
      <div className="thumbnail">
        <img
          src={video.thumbnail}
          alt={video.title}
        />
        <span className="duration">
          {video.duration}
        </span>
      </div>
      <div className="video-info">
        <img
          className="channel-avatar"
          src={video.avatar}
          alt={video.channel}
        />
        <div className="video-details">
          <h3>{video.title}</h3>
          <p className="channel-name">
            {video.channel}
          </p>
          <p className="video-stats">
            {video.views} • {video.time}
          </p>
        </div>
        <button className="more-button">
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
}

export default VideoCard;