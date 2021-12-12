import { ButtonLabel, Image, StyledButton } from "./styled";
import FirstsnowCap from "./images/snowCap.svg";
import SecondSnowCap from "./images/snowCap-2.svg";
import Icecle from "./images/icicle.svg";
import SideSnow from "./images/sideSnow.svg";

export const Button = ({ type, role, children }) => {
  return (
    <ButtonLabel>
      <Image src={FirstsnowCap} alt="Snow" />
      {(type === "newGame" ||
        type === "advanced" ||
        type === "expert") && (
        <Image src={SecondSnowCap} alt="Snow" />
      )}
      {(type === "advanced" || type === "expert") && (
        <>
          <Image src={Icecle} alt="Icicle" />
          <Image src={Icecle} alt="Icicle" />
        </>
      )}
      {type === "expert" && (
        <>
          <Image src={Icecle} alt="Icicle" />
          <Image src={SideSnow} alt="SideSnow" />
        </>
      )}
      <StyledButton onClick={role}>{children}</StyledButton>
    </ButtonLabel>
  );
};
