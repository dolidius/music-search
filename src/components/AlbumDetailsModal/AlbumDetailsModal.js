import Spinner from "../Helper/Spinner";

import ModalHelper from "../Helper/ModalHelper";
import AlbumHeader from "./AlbumHeader";
import AlbumLoadError from "./AlbumLoadError";
import SongList from "./SongList";

const AlbumDetailsModal = ({ detailsOpen, setDetailsOpen, albumDetails }) => {
    const closeModal = () => {
        setDetailsOpen(false);
    };

    if (albumDetails.loading && detailsOpen) {
        return (
            <ModalHelper
                closeModal={closeModal}
                styles={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Spinner size={20} />
            </ModalHelper>
        );
    } else if (!albumDetails.loading && detailsOpen && albumDetails.error) {
        return (
            <ModalHelper
                closeModal={closeModal}
                styles={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <AlbumLoadError />
            </ModalHelper>
        );
    } else if (!albumDetails.loading && detailsOpen) {
        return (
            <ModalHelper closeModal={closeModal}>
                <AlbumHeader
                    artwork={albumDetails.albumDetails.artworkUrl100}
                    albumName={albumDetails.albumDetails.collectionName}
                    artistName={albumDetails.albumDetails.artistName}
                    country={albumDetails.albumDetails.country}
                    releaseDate={albumDetails.albumDetails.releaseDate}
                />
                <SongList songList={albumDetails.songs} />
            </ModalHelper>
        );
    } else {
        return null;
    }
};

export default AlbumDetailsModal;
