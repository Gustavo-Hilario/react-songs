import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "No Scrubs", duration: "4:05" },
        { title: "Macaren", duration: "2:44" },
        { title: "All Start", duration: "3:35" },
        { title: "I want it that way", duration: "4:55" },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});
