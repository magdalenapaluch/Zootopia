import React from "react";
import StyledSecondaryText  from "./styled";

const SecondaryText = (props) => {

	return (
		<>
		<StyledSecondaryText darker={props.darker}>{props.text}</StyledSecondaryText>
		</>
	);
}

export default SecondaryText;
