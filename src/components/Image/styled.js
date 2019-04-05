import styled, { css } from "styled-components";

const StyledImage = styled.img`
  /* Box sizing for all elements */

  display: none;
  @media (min-width: 900px) {
    box-sizing: border-box;
    padding: 0;
    margin: auto;
    height: 95%;
    max-height: 95vh;
    display: block;
  }

  ${props =>
    props.halfPage &&
    css`
      @media {
        height: auto;
        max-width: 600px;
        width: 100%;
        bottom: 60px;
      }
    `}
`;

export default StyledImage;
