import Sound from "react-sound";
import { useState } from "react";
import weWishYouMerryChristmas from "./weWishYouMerryChristmas.mp3";
import { AudioButton } from "./styled";

export const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <AudioButton
        playing={isPlaying}
        onClick={() => setIsPlaying((prevState) => !prevState)}
      >
        ⏯
      </AudioButton>
      <Sound
        loop
        url={weWishYouMerryChristmas}
        volume={50}
        playStatus={
          isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED
        }
      />
    </>
  );
};
