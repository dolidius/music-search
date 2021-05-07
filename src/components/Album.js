import "../styles/main.scss";

const Album = ({ album, getAlbumData, setDetailsOpen }) => {

    const albumClick = () => {
        getAlbumData(album.collectionId);
        setDetailsOpen(true);
    }

    return (
        <li title="album" onClick={albumClick} className="album">
            <div className="album__art">
                <img alt="album artwork" src={album.artworkUrl100} />
            </div>
            <h3 className="album__title">{album.artistName} - {album.collectionName}</h3>
        </li>
    );
};

export default Album;