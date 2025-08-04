import { useCallback, useState } from "react";
import { Song, Songs } from "../types";

const useSongList = () => {
    const [songList, setSongList] = useState<Songs>([]);

    // Initial fetch (memoized)
    const fetchSongs = useCallback(async () => {
        try {
            const response = await fetch("http://localhost:8080/songs");
            const result: Songs = await response.json();
            setSongList(result); // optional: cache it locally
            return result;
        } catch (error) {
            console.error("Error fetching songs:", error);
            return [];
        }
    }, []);

    // Post new song and return updated list
    const postNewSong = useCallback(async (song: Song) => {
        try {
            const response = await fetch("http://localhost:8080/song", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(song),
            });

            const updatedSongs: Songs = await response.json();
            setSongList(updatedSongs); // Update local state
            return updatedSongs;
        } catch (error) {
            console.error("Error posting song:", error);
            return songList; // fallback to current local state
        }
    }, [songList]);

    return { songList, fetchSongs, postNewSong };
};

export default useSongList;
