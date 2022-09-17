import React from "react";

import { connect } from "react-redux";

class SongList extends React.Component {
    render() {
        return (
            <div className="">
                <p>TEST</p>
            </div>
        );
    }
}

// mapStateToProps is a convention

const mapStateToProps = (state) => {
    // console.log(state);
    return { songs: state.songs };
};

export default connect(mapStateToProps)(
    SongList
) /* Returning and running a function inside connect */;
