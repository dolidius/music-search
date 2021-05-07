import "../styles/main.scss";

import DataSection from './DataSection';

import Artist from './Artist';

const Artists = ({ artists }) => {
    return (
        <DataSection title="artists">
            {artists.results.map((artist) => (
                <Artist key={artist.artistId} artist={artist} />
            ))}
        </DataSection>
    );
}

export default Artists;