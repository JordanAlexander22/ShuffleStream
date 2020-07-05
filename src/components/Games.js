import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { getState } from "redux";
import FetchRequest from "../actions/FetchRequest";
import FetchSuccess from "../actions/FetchSuccess";
import FetchFailure from "../actions/FetchFailure";
import test from "./test";
import GameCard from "./GameCard";
import "../styles/main.css";

class Games extends Component {
  componentDidMount() {
    test
      .get()
      .then((response) => {
        const streams = response.data.streams.map((stream) => {
          return stream;
        });
        this.dispatchFetchSuccess(streams);
        //console.log(response.data.streams);
        console.log(streams);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  dispatchFetchSuccess(streams) {
    this.props.store.dispatch(FetchSuccess(streams));
  }

  render() {
    const { classes } = this.props;
    const stateProps = this.props.store.getState();
    const gameCardItems = stateProps.streams.map((stream) => (
      <GameCard
        key={stream._id}
        streamCover={stream.preview.medium}
        streamLink={stream.channel.url}
        streamBork={stream.channel.game}
        // streamDes={stream.channel.description}
      />
    ));
    return (
      <div>
        <h1 className="title">Welcome! Find your favorite here!</h1>
        <div className="cards">{gameCardItems}</div>
      </div>
    );
  }
}

export default Games;
