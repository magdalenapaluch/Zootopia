import styled, { css } from "styled-components";

const StyledHeadline = styled.h1`
  /* Box sizing for all elements */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }


  max-width: 488px;
  width: 70%;
  font-family: 'Sarabun', sans-serif;
  font-size: 6rem;
  font-weight: bold;
  line-height: 1.05;
  color: #e8f8f5;
  margin-top: 50px;
  z-index:4;


@media (min-width: 600px){

		font-size: 9.5rem;
		width: 100%;

}

@media (min-width: 900px){

		font-size: 7.5rem;

	${props =>
		props.green &&
		css`
				color: #004b4a;
				`}
}
@media (min-width: 1200px){

		font-size: 9.5rem;

}


`;

export default StyledHeadline;
