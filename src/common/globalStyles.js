import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* Box sizing for all elements */
html{box-sizing:border-box;}
*,
*::before,
*::after {
	box-sizing: inherit;
	margin: 0;
	padding: 0;
}

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
@import url('https://fonts.googleapis.com/css?family=Sarabun:400,700');

html {
	min-height: 100vh;
	/* height: 100%; */

	/* set 1rem to 10px on default browser scale */
	font-size: 62.5%;
}

body {
	min-height: 100vh;
	margin: 0;

	/* set content size back to 16px (on default scale) while preserving 1rem = 10px */
	font-size: 1.6rem;
	font-family: 'Roboto', sans-serif;
}

.iti-flag {background-image: url("path/to/flags.png");}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .iti-flag {background-image: url("path/to/flags@2x.png");}
}

#root {
	min-height: 100vh;
}

.App {
	min-height: 100vh;
}

input,
select,
textarea,
button {
	font-family: inherit;
	letter-spacing: inherit;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
	appearance: none;
	margin: 0;
}

.PageWrapper {
	display: flex;
	min-height: 100vh;
	}

.VerticalHalf {
	padding: 10px;
	width: 100%;
	min-height: 100vh;
}

@media (min-width: 900px) {
	.VerticalHalf {
		width: 50%;
	}
}
.paddingTop{
	padding-top: 40%;
}
.FlexContainer {
	background-color: #004b4a;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 40px 30px;
	position: relative;
}
.FlexContainer--lightGreen{
	background-color: #004b4a;
}

@media(min-width: 900px) {

	.FlexContainer--lightGreen {
		background-color: #e3edeb;
	}
}

.FlexContainer--spaceAround{
	justify-content:space-around;
}

.LogoAndHeadline {
	max-width: 500px;
	margin: 0 auto;
	flex-basis: 40%;
}

.LogoAndHeadline-logo {
	height: 50px;
}

@media (min-width: 600px) {
	.LogoAndHeadline {
		margin: 0 auto;
	}
}

.DesktopContainer {

display: none;
}



@media (min-width: 900px){
  .DesktopContainer{
	  display:flex;
  }
}

`;

export default GlobalStyle;
