import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStreams } from '../actions/streamActions';

class Games extends Component {
  componentWillMount() {
    this.props.fetchStreams();
  }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.newPost) {
//       this.props.posts.unshift(nextProps.newPost);
//     }
//   }

  render() {
    const postItems = this.props.games.map(game => (
      <div key={game.id}>
        <h3>{game.title}</h3>
        <p>{game.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Games.propTypes = {
  fetchStreams: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  games: state.games.items
});

export default connect(mapStateToProps, { fetchStreams })(Games);