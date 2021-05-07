import "../styles/main.scss";

const Artist = ({ artist }) => {
    return (
        <li title="artist" className="artist">
            <h3 className="artist__name">
                <span className="artist__name--main">{artist.artistName}</span>
                <span className="artist__name--secondary">
                    {artist.primaryGenreName}
                </span>
            </h3>
        </li>
    );
};

export default Artist;
