import DataSection from "./DataSection";
import Album from "./Album";

import { useState } from "react";
import { connect } from "react-redux";

import { getAlbumData } from "../redux/actions/album";

import AlbumDetailsModal from './AlbumDetailsModal/AlbumDetailsModal';

const Albums = ({ albums, albumDetails, getAlbumData }) => {
    const [detailsOpen, setDetailsOpen] = useState(false);
    return (
        <DataSection>

            <AlbumDetailsModal
                detailsOpen={detailsOpen}
                setDetailsOpen={setDetailsOpen}
                albumDetails={albumDetails}
            />

            {albums.results.map((album) => (
                <Album
                    key={album.collectionID}
                    album={album}
                    getAlbumData={getAlbumData}
                    setDetailsOpen={setDetailsOpen}
                />
            ))}
        </DataSection>
    );
};

const mapStateToProps = (state) => ({
    albumDetails: state.album,
});

export default connect(mapStateToProps, { getAlbumData })(Albums);
