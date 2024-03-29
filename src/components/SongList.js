import React from "react";

import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            onClick={() => {
                                this.props.selectSong(song);
                            }}
                            className="ui button primary"
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// mapStateToProps is a convention

const mapStateToProps = (state) => {
    // This re-run whenever we run reducers or change states
    // console.log(state);
    return { songs: state.songs };
};

// connect(PROPS, ACTION CREATORS)
export default connect(mapStateToProps, { selectSong: selectSong })(
    SongList
) /* Returning and running a function inside connect */;
