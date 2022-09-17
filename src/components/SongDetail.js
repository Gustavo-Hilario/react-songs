import React from "react";

// IMPORTANT

import { connect } from "react-redux";

const SongDetailsComponent = (props) => {
    console.log(props.song);
    return (
        <div>
            <p>{props.song ? props.song.title : "Select to see your song"}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetailsComponent);
