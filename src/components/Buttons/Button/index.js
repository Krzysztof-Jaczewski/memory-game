import { ButtonLabel, Image, StyledButton } from "./styled";
import FirstsnowCap from "./images/snowCap.svg";
import SecondSnowCap from "./images/snowCap-2.svg";
import Icecle from "./images/icicle.svg";
import SideSnow from "./images/sideSnow.svg";
import { hard, medium, start } from "../../../parameters";

export const Button = ({ type, task, children }) => {
  return (
    <ButtonLabel>
      <Image src={FirstsnowCap} alt="Snow" />
      {(type === start || type === medium || type === hard) && (
        <Image src={SecondSnowCap} alt="Snow" />
      )}
      {(type === medium || type === hard) && (
        <>
          <Image src={Icecle} alt="Icicle" />
          <Image src={Icecle} alt="Icicle" />
        </>
      )}
      {type === hard && (
        <>
          <Image src={Icecle} alt="Icicle" />
          <Image src={SideSnow} alt="SideSnow" />
        </>
      )}
      <StyledButton onClick={task}>{children}</StyledButton>
    </ButtonLabel>
  );
};
