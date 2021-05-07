const AlbumHeader = ({ artwork, albumName, artistName, country, releaseDate }) => {
    return(
        <header className="detailsModal__header">
            <div className="detailsModal__art">
                <img
                    src={artwork}
                    alt="album artwork"
                />
            </div>
            <h2 className="detailsModal__title">
                <span className="detailsModal__title--main">
                    {albumName}
                </span>
                <span className="detailsModal__title--secondary">
                    {artistName}
                </span>
                <span className="detailsModal__title--th">
                    {country}
                </span>
                <span className="detailsModal__title--frth">
                    {releaseDate}
                </span>
            </h2>
        </header>
    );
};

export default AlbumHeader;