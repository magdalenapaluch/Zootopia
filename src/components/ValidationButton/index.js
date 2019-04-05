import React from "react";
import StyledHValidationButton from "./styled";

const ValidationButton = (props) => {

	return (
		<div className="ValidationButtonWrapper" onClick={props.click}>
		<StyledHValidationButton/>
		<input className="ValidationButton" type="submit" value={props.text}></input>

		{/* An element, just for the styles, makes the pointy tringle of the ValidationButton */}
		<div className="ValidationButton-arrow"></div>
		</div>
	);
}

export default ValidationButton;
