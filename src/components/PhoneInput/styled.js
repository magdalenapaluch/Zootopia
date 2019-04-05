import { createGlobalStyle } from "styled-components";

const StyledInput = createGlobalStyle`
  /* Box sizing for all elements */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

.iti-arrow{

border-top-color: white !important;
}

.up{

border-bottom-color: white !important;
}

.intl-tel-input  , .phoneInput, .SMSInput  {
	color: white;
	max-width: 500px;
	height: 52px;
	border-radius: 8px;
	background-color: #004b4a;
	margin:  10px auto !important;
	width: 100%;
	display: block;
	font-size: 1.5rem;
}
.phoneInput, .SMSInput{
	border: solid 2px #46b181;
}

.SMSInput{
	width: 10%;
	font-size:2rem;
	text-align:center;
}

.SMSContainer{
	display: flex;
	justify-content:space-between;
}

.country-list, .country{
	color: white;
	background-color: #004b4a;
}

.intl-tel-input .country-list {
	border: solid 2px #46b181 !important;
	width: 100%;
	background-color:   #004b4a !important;
	}

.highlight{
	background-color:  #46b181 !important;
}

.divider {
	background-color:   #004b4a;
	margin-bottom: none !important;

}
`;

export default StyledInput;
