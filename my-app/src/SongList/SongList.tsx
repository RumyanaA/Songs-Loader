import { useEffect } from "react";
import { Songs } from "../types";
import { IconImg, ListContainer, SongItem, SongLine, SongList as StyledSongList, Title } from "./SongList.styles";
import MicrophoneIcon from '../assets/microphone.png';
import GenreIcon from '../assets/vinyl.png'
import MusicIcon from '../assets/music.png'

const SongList = ({ songList, fetchSongs }: { songList: Songs, fetchSongs: () => Promise<Songs> }) => {
  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);

  return (
    <ListContainer>
      <Title>Songs</Title>
      <StyledSongList>
        {songList.map((song, idx) => (
          <SongItem key={idx}>
            <SongLine>
              <IconImg src={MusicIcon} alt="music icon" /><strong>{song.name}</strong>
            </SongLine>
            <SongLine>
              <IconImg src={MicrophoneIcon} alt="microphone icon" />{song.artist}
            </SongLine>
            <SongLine>
              <IconImg src={GenreIcon} alt="genre icon" />{song.genre}
            </SongLine>
          </SongItem>
        ))}
      </StyledSongList>
    </ListContainer>
  )
}
export default SongList

