import React, { useState } from 'react'
import Index from '../document/Index'
//import { useNavigate } from 'react-router-dom'
import './achievements.css'
import avatar from './resource/avatar.png'; 
import video1 from './resource/video1.mp4'; 
import video2 from './resource/video2.mp4'; 

const Achievements = () => {
	const [showVideo, setShowVideo] = useState(false);
	const [videoUrl, setVideoUrl] = useState('');

  return (
    <div className="achievements-page">
      <Index />
      <main>
				<header>
					<img src={avatar} title="" />
				  <h2>Shuhan Ji</h2>
				</header>
				<div class="area video-area">
					<div class="area-title">
						<span>My Video</span>
					</div>
					<div class="video-list">
						<div class="video-item">
							<video class="full-screen-video" 
								onClick={(params) => {
									setShowVideo(true)
									setVideoUrl(video1)
									console.log(showVideo, videoUrl)
								}}
							>
								<source src={video1} type="video/mp4" width="100%" height="100%" />
								Your browser does not support the video tag.
							</video>
							<h2>Video name</h2>
							<p>Upload time</p>
							<p>100❤️ </p>
						</div>
						<div class="video-item">
							<video class="full-screen-video"
								onClick={(params) => {
									setShowVideo(true)
									setVideoUrl(video2)
									console.log(showVideo, videoUrl)
								}}
							>
								<source src={video2} type="video/mp4" width="100%" height="100%" />
								Your browser does not support the video tag.
							</video>
							<h2>Video name</h2>
							<p>Upload time</p>
							<p>100❤️ </p>
						</div>
					</div>
				</div>
				<div class="area data-area">
					<div class="area-title">
						<span>My Data</span>
					</div>
					<div class="data-one">
						<h3>Cumulative Data:</h3>
						<div class="data-one-list">
							<div class="data-one-item">Highest difficulty in bouldering : V13</div>
							<div class="data-one-item">Highest difficulty in top roping : 1</div>
							<div class="data-one-item">Number of bouldering and top roping routes completed : 20</div>
						</div>
					</div>
					<div class="data-two">
						<h3>Recent Climbing:</h3>
						<div class="data-two-list">
							<div class="data-two-item">
								<h4>Bouldering</h4>
								<p>Difficulty:</p>
								<p>Attempt number:</p>
								<p>Quality:</p>
								<p>Date:</p>
							</div>
							<div class="data-two-item">
								<h4>Top Rope</h4>
								<p>Difficulty:</p>
								<p>Attempt number:</p>
								<p>Quality:</p>
								<p>Date:</p>
							</div>
							<div class="data-two-item">
								<h4>Bouldering</h4>
								<p>Difficulty:</p>
								<p>Attempt number:</p>
								<p>Quality:</p>
								<p>Date:</p>
							</div>
						</div>
					</div>
				</div>
      </main>
			{
				showVideo && 
				<div class="pop">
					<div class="close"
						onClick={(params) => {
							setShowVideo(false)
							setVideoUrl('')
						}}>
						×
					</div>
					<video class="full-screen-video pop-video" controls>
						<source src={video2} type="video/mp4" width="100%" height="100%" />
						Your browser does not support the video tag.
					</video>
				</div>
			}
    </div>
  )
}

export default Achievements
