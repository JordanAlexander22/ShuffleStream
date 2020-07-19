import React from "react";
import "../styles/main.css";
import "../styles/heart.scss";
// import { Link } from "react-router-dom";

export default class GameCard extends React.Component {
  
  render() {
    return (
      <div className="full-card">
        <div className="stream-cards">
          <a href={this.props.streamLink}>
            <img
              className="stream-cover"
              src={this.props.streamCover}
              alt="/"
            />
          </a>
          <h2>{this.props.streamTitle}</h2>
          <input id="toggle-heart" type="checkbox" />
          <label for="toggle-heart">❤</label>
        </div>
      </div>
    );
  }
}
