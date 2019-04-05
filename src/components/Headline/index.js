import React from "react";
import StyledHeadline from "./styled";

const Headline = (props) => {

	return (

		<StyledHeadline lassName="mainHeadline" green={props.green}>{props.text}</StyledHeadline>


	);
}

export default Headline;
