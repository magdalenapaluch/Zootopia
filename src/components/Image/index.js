import React from "react";
import StyledImage from "./styled";


const Image = (props) => {

	return (
		<>
		<StyledImage halfPage={props.halfPage} src={props.src} alt={props.alt} />
		</>
	);
}

export default Image;
