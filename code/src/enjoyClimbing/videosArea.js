import React, { useState } from 'react';
import './enjoyClimbing.css';
const VideosArea = () => {
  const videos = [
    {
      title: "video",
      cover: "/images/cover1.jpg",
      username: "climber",
      videoUrl: "/videos/video1.mp4",
    },
    {
      title: "video",
      cover: "/images/cover2.jpg",
      username: "climber",
      videoUrl: "/videos/video2.mp4",
    },
    {
      title: "video",
      cover: "/images/cover3.jpg",
      username: "climber",
      videoUrl: "/videos/video3.mp4",
    },
    {
      title: "video",
      cover: "/images/cover4.jpg",
      username: "climber",
      videoUrl: "/videos/video4.mp4",
    },
    {
      title: "video",
      cover: "/images/cover5.jpg",
      username: "climber",
      videoUrl: "/videos/video5.mp4",
    },
    {
      title: "video",
      cover: "/images/cover6.jpg",
      username: "climber",
      videoUrl: "/videos/video6.mp4",
    },
    {
      title: "video",
      cover: "/images/cover7.jpg",
      username: "climber",
      videoUrl: "/videos/video7.mp4",
    },
    
    // ... 更多视频
  ];

  const [activeVideo, setActiveVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [likedVideos, setLikedVideos] = useState(new Set());
  const [comments, setComments] = useState({}); // added
  const [showComments, setShowComments] = useState(null);

  const toggleLike = (index) => {
    const newLikedVideos = new Set(likedVideos);
    if (newLikedVideos.has(index)) {
      newLikedVideos.delete(index);
    } else {
      newLikedVideos.add(index);
    }
    setLikedVideos(newLikedVideos);
  };

  const toggleComments = (index) => {
    setShowComments(prev => prev === index ? null : index);
    console.log("Toggle comments for video index: ", index, "Current state after update: ", showComments);
  };

  
  const addComment = (index, comment) => {
    if (!comment.trim()) {
      alert("Comment cannot be empty.");
      return;
    }
    const newComments = { ...comments };
    newComments[index] = newComments[index] || [];
    newComments[index].push(comment);
    setComments(newComments);
  };
  
  return (
    <div className="content-grid">
      {videos.map((video, index) => (
        <div key={index} className="video-item">
          <img src={video.cover} alt={video.title} style={{ width: '100%', height: 'auto' }}  onClick={() => {setActiveVideo(index); setShowModal(true);}}/>
          <div className="video-info-container">
            <div className="video-text-info">
              <div className="video-title">{video.title}</div>
              <div className="user-info">{video.username}</div>
            </div>
            <div className="video-actions">
            <button className="like-button" 
                      style={{ color: likedVideos.has(index) ? 'red' : 'white' }}
                      onClick={() => toggleLike(index)}>
                ❤ like
              </button>
              <button className="comment-button" onClick={() => toggleComments(index)}>
                💬 comment
              </button>


            </div>
          </div>
          {showComments === index && (
            <div className="comments-modal">
              <div className="comments-content">
                <input type="text" placeholder="Enter your comment" 
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          addComment(index, e.target.value);
                          e.target.value = '';
                        }
                      }} />
                <button onClick={() => setShowComments(null)}>Close</button>
                {comments[index] && comments[index].map((comment, idx) => (
                  <p key={idx}>{comment}</p>
                ))}
              </div>
            </div>
          )}

        </div>
      ))}

      {/* 模态窗口 */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }} onClick={() => setShowModal(false)}>
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', textAlign:"center" }}>
          <video width="100%" height="100%" controls autoPlay style={{ objectFit: 'contain', backgroundColor: 'black' }}>
            <source src={videos[activeVideo].videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

            <button style={{
              position: 'absolute',
              top: '1px',
              right: '15em',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '50%',
              width: '25px',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }} onClick={() => setShowModal(false)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideosArea;