import React from 'react'
import Index from './Index'
import { useNavigate } from 'react-router-dom'
import './Details.css'

const Details = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate('/');
    }

  return (
    <div className="Details-page">
      <Index />
      <main>
        <header>
          <h2>Upload your Climbing</h2>
        </header>
        <form onSubmit={handleSubmit}>
          <label htmlFor="climbing-route">Climbing Route:</label>
          <input id="climbing-route" type="text"/>

          <label htmlFor="climbing-type">Climbing Type:</label>
          <select id="climbing-type">
            <option>Bouldering</option>
            <option>Top Rope</option>
          </select>

          <label htmlFor="difficulty-level">Difficulty Levels:</label>
          <select id="difficulty-level">
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>

          <label htmlFor="attempt-number">Attempt Number:</label>
          <input id = "attempt-number" type = "text" />

          <label htmlFor="quality">Quality:</label>
          <select id = "quality">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          <label htmlFor="date">Date:</label>
          <input id="date" type="date" />

          <label htmlFor="upload-video">Upload Video:</label>
          <input id="upload-video" type="file" />

          <label htmlFor="video-title">Video Title:</label>
          <input id="video-title" type="text" />

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  )
}

export default Details
