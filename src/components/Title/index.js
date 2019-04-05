import React from "react";
import StyledTitle from "./styled";

const Title = (props) => {

	return (
		<>
		<StyledTitle/>
		<h2 className="title" >{props.text}</h2>
		</>
	);
}

export default Title;
