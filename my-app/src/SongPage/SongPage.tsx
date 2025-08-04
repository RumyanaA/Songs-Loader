import useSongList from "../hooks/useSongList";
import SongForm from "../SongForm/SongForm";
import SongList from "../SongList/SongList";
import { BackgroundWrapper, Page } from "./SongPage.styles";


const SongPage = () => {
    const { songList, fetchSongs, postNewSong } = useSongList();

    return (
        <BackgroundWrapper>
            <Page>
                <SongList songList={songList} fetchSongs={fetchSongs} />
                <SongForm postNewSong={postNewSong} />
            </Page>
        </BackgroundWrapper>
    );
};

export default SongPage;
