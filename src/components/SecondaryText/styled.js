import styled, { css } from "styled-components";

const StyledSecondaryText = styled.p`

	max-width: 500px;
	width: 100%;
	margin: 0 auto;
	opacity: 0.5;
	font-family: 'Roboto', sans-serif;
	font-size: 1.4rem;
	text-align: center;
	color: #e8f8f5;

${props =>
		props.darker &&
		css`
			color: #46b181;
		`}
`;

export default StyledSecondaryText;
