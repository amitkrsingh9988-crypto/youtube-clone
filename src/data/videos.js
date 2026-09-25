
const videos = [
  {
    id: 1,
    title: "Fastest Way to Learn DSA in 2026 (Without Wasting Time)",
    channel: "Anjali Viramgama",
    views: "288K views",
    time: "13 days ago",
    duration: "8:13",
    thumbnail: "https://i.ytimg.com/vi/2oDa-Q8Eqtk/hqdefault.jpg",
    avatar: "https://yt3.googleusercontent.com/D9fzF38JIPZSK4ZVlklMf0McVRZUDJi4qang0js8H0VzlG_mlw2UwNsNSX9xSG2hFmp8y2GaA0I=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 2,
    title: "Array Data Structure-Part1 | DSA Series by Shradha Khapra Ma'am",
    channel: "Apna College",
    views: "850K views",
    time: "2y ago",
    duration: "54:05",
    thumbnail: "https://i.ytimg.com/vi/8wmn7k1TTcI/maxresdefault.jpg",
    avatar: "https://yt3.googleusercontent.com/FEcjRtez5od8UowDo6tTt9WlE-MrIFEmcwPMTORmK9Swk6KCklOmA3xfIG9WuLWfNYfNThQE=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 3,
    title: "C++ DSA Full Course | Data Structure & Algorithms",
    channel: "Apna College",
    views: "540K views",
    time: "2y ago",
    duration: "Playlist",
    thumbnail: "https://i.ytimg.com/vi/VTLCoHnyACE/maxresdefault.jpg",
    avatar: "https://yt3.googleusercontent.com/FEcjRtez5od8UowDo6tTt9WlE-MrIFEmcwPMTORmK9Swk6KCklOmA3xfIG9WuLWfNYfNThQE=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 4,
    title: "Best of Arijit SIngh 2024 | Arijit Singh Hits Songs",
    channel: "ABT Lofi Music",
    views: "2.4M views",
    time: "5 days ago",
    duration: "15:48",
    thumbnail: "https://i.ytimg.com/vi/lLQ27HKL5ws/maxresdefault.jpg",
    avatar: "https://yt3.googleusercontent.com/HyT9iuM844Gs5XEXeXiwgT0GdPa2-I2m7TRbR56baSz-D8VS3rZog-wmScfC9Vx8421a76SYtg=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 5,
    title: "Your Complete Placement Prep Platform is Finally here!",
    channel: "take U forward",
    views: "209K views",
    time: "4d ago",
    duration: "2:55",
    thumbnail: "https://i.ytimg.com/vi/33s2ZPOwIVE/maxresdefault.jpg",
    avatar: "https://yt3.googleusercontent.com/zWP22vW7H0jp_T8DsXPgFtFs7ThqSPKBYUOWuPTPdxchmvX-Gr2WyB5AXhBHvQIcWvoDBK2Qgw=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 6,
    title: "Sigma Web Development Course - Web Development Tutorials in Hindi",
    channel: "CodeWithHarry",
    views: "8.2M views",
    time: "2y ago",
    duration: "139 lessons",
    thumbnail: "https://i.ytimg.com/vi/tVzUXW6siu0/maxresdefault.jpg",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_kX3sdbuu3KFmRPsmlu0R5Rx_BhpxwupjtvJmkEdNfla7w=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 7,
    title: "Pehli Pehli Baar X Dhadkan X Aja We Mahiya - Mashup | Imran Khan | Mani Chopra | Hit Beats",
    channel: "Hit Beats",
    views: "1.2M views",
    time: "1y ago",
    duration: "Hit Beats",
    thumbnail: "https://i.ytimg.com/vi/uA7s4auBIXk/maxresdefault.jpg",
    avatar: "https://yt3.googleusercontent.com/a201RlyRTi8bZFYsE5_IEofTbd9jOaJaVEDR_aZ7uJncouE-P-mI2U7cIAXYV3pULK7yoJwP=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 8,
    title: "Shark Tank India S3 | Pitcher Chooses Aman Without Listening to Other Offers | Full Episode",
    channel: "Shark Tank India",
    views: "1.2M views",
    time: "2 years ago",
    duration: "49:52",
    thumbnail: "https://i.ytimg.com/vi/V9-Kw8MlZSo/maxresdefault.jpg",
    avatar: "https://yt3.googleusercontent.com/uG_upoy1qe6Tde-1LbFo-AVnkuKkXjZOtXsdqLsfeyUKq8r2HOh8HvBc6v4uCaOl88a1WQ5nDw=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 9,
    title: "Fell For You X Nain Tere | Harshal Music | Shubh X Sonam Bajwa | Shubh Mashup Jukebox 2025",
    channel: "Harshal Music",
    views: "2.6M views",
    time: "1 years ago",
    duration: "16:38",
    thumbnail: "https://i.ytimg.com/vi/NY0u1DEKrug/maxresdefault.jpg",
    avatar: "https://yt3.googleusercontent.com/CrpEJcgUO9VMntxv0ri0c9yC5TbcB6tupfVUHuw9BKHDDm4ltiUM0-MgAvnUn8PFijUP5XTxtQ=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 10,
    title: "Heartless - Badshah ft. Aastha Gill | Gurickk G Maan | O.N.E. ALBUM",
    channel: "Sony Music India",
    views: "358M views",
    time: "8y ago",
    duration: "7:23",
    thumbnail: "https://i.ytimg.com/vi/Gv_XBMrPvRw/maxresdefault.jpg",
    avatar: "https://yt3.googleusercontent.com/42o3XIW1j5zmzsFeZs3ND4QwaXXrnpK9vqftcEuEdbgNhPbltXRktcSmyJ12-gSRqKch93Ir=s160-c-k-c0x00ffffff-no-rj"
  },
  {
  id: 11,
  title: "GURU RANDHAWA - “DOPAMINE“ MV",
  channel: "Guru Randhawa",
  views: "88M views",
  time: "7 months ago",
  duration: "2:38",
thumbnail: "https://i.ytimg.com/vi/iOgR7hi90Ac/maxresdefault.jpg",
  avatar: "https://yt3.googleusercontent.com/djplSJ25P6NAn2Tzvbi-nnUwJdnLtwqReZK5I0Vk3q72oM9nGnkWzTB9TLVfVRa7W1_iju0YQ0E=s160-c-k-c0x00ffffff-no-rj"
},
  {
    id: 12,
    title: "JOSH BRAR : Tere Bina Na Guzara E | Feat. Kinza Hashmi | Bunty Bains | Latest Punjabi Song 2024",
    channel: "Speed Records",
    views: "125M views",
    time: "1 year ago",
    duration: "3:36",
    thumbnail: "https://i.ytimg.com/vi/aYG6oEUXyuQ/maxresdefault.jpg",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_lTIClTxbIfXAJHtzwqInxzY5h7PnvI9thZffyXeoa6xsA=s160-c-k-c0x00ffffff-no-rj"
  }
];
export default videos;

