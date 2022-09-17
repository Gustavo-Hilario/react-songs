import React from "react";

// IMPORTANT

import { connect } from "react-redux";

const SongDetailsComponent = ({ song }) => {
    if (!song) {
        return (
            <div>
                <h2>Select a Song!</h2>
            </div>
        );
    }
    return (
        <div>
            <h3>Details for:</h3>
            <h4>Title: {song.title}</h4>
            <p>Duration: {song.duration}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetailsComponent);
