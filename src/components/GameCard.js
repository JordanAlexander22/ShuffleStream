import React from 'react';

export default class GameCard extends React.Component {
  render() {
    return (
      <div className="stream-cards">
        <a href={this.props.streamLink}>
          <img 
            className="stream-cover"
            src={this.props.streamCover}
            alt="/"
          />
        </a>
      </div>
    )
  }
}
