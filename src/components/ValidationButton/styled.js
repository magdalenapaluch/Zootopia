import { createGlobalStyle } from "styled-components";

const StyledHValidationButton = createGlobalStyle`
  /* Box sizing for all elements */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .ValidationButton {
	font-family: 'Sarabun', sans-serif;
	width: 100%;
	height: 42px;
	background-color: #46b181;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	color: #002928;
	border: 0;
	margin: auto;
	display: block;
	border-radius: 10px;
	cursor:pointer;
}

.ValidationButtonWrapper {
	position: relative;
	width: 200px;
	margin: 50px auto 0;
}

@media (min-width: 600px) {
	.ValidationButtonWrapper {
		width: 240px;
	}
}

.ValidationButton-arrow {

	content: "";
	display: inline-block;
	position: absolute;
	top: 6px;
	transform: rotate(135deg);
	right: -10px;
	width: 0;
	height: 0;
	border-bottom: 25px solid transparent;
	border-top: 3px solid transparent;
	border-left: 25px solid #46b181;
	border-radius: 7px 0 0 0;

}
`;

export default StyledHValidationButton;
