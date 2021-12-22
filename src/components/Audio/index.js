import Sound from "react-sound";
import { useState } from "react";
import weWishYouMerryChristmas from "./weWishYouMerryChristmas.mp3";
import { AudioButton } from "./styled";

export const Audio = () => {
  const [play, setPlay] = useState(false);
  return (
    <>
      <AudioButton
        playing={play}
        onClick={() => setPlay((prevState) => !prevState)}
      >
        ⏯
      </AudioButton>
      <Sound
        url={weWishYouMerryChristmas}
        volume={50}
        playStatus={play ? Sound.status.PLAYING : Sound.status.PAUSED}
        loop={true}
      />
    </>
  );
};
