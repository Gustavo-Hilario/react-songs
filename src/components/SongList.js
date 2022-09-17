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

export default connect()(
    SongList
) /* Returning and running a function inside connect */;
