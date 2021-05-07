const SongList = ({ songList }) => {
    return (
        <ul className="detailsModal__songList">
            {songList.map((song, index) => (
                <li key={song.trackId} className="detailsModal__song">
                    {index + 1}. {song.trackName}
                </li>
            ))}
        </ul>
    );
};

export default SongList;
