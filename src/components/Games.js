import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStreams } from '../actions/streamActions';

class Games extends Component {


  componentDidMount() {
    this.props.fetchStreams();
  }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.newPost) {
//       this.props.posts.unshift(nextProps.newPost);
//     }
//   }

  render() {
    const streamItems = this.props.streams.map(stream => (
      <div key={stream.id}>
        <h3>{stream.game}</h3>
        <p>{stream.viewers}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {streamItems}
      </div>
    );
  }
}

Games.propTypes = {
  fetchStreams: PropTypes.func.isRequired,
  streams: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  streams: state.streams
});

export default connect(mapStateToProps, { fetchStreams })(Games);