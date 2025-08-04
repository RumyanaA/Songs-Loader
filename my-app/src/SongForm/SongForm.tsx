import { useState } from "react";
import { Song, Songs } from "../types";
import { Input, Label, StyledForm, SubmitButton } from "./SongForm.styles";

const defaultSongFields: Song = {
    name: '',
    artist: '',
    genre: ''
}
const SongForm = ({ postNewSong }: { postNewSong: (song: Song) => Promise<Songs> }) => {

    const [song, setSongFields] = useState(defaultSongFields)

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { id: name, value } = event.currentTarget;
        setSongFields({
            ...song,
            [name]: value,
        });
    }


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await postNewSong(song);
        setSongFields({ ...defaultSongFields })
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Label>
                Name
                <Input id="name" type="text" onChange={handleChange} value={song.name} />
            </Label>
            <Label>
                Artist
                <Input id="artist" type="text" onChange={handleChange} value={song.artist} />
            </Label>
            <Label>
                Genre
                <Input id="genre" type="text" onChange={handleChange} value={song.genre} />
            </Label>
            <SubmitButton type="submit" />
        </StyledForm>
    );
};
export default SongForm;
