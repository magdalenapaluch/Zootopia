import styled, { css } from "styled-components";

const StyledForm = styled.form`
  margin: 15px auto;
  max-width: 500px;
  width: 100%;
  display: block;
  ${props =>
    props.displayOnDesktopOnly &&
    css`
      display: none;
    `}
  @media only screen and (min-width:900px) {
    ${props =>
      props.displayOnDesktopOnly &&
      css`
        display: block;
      `}
    ${props =>
      props.displayOnMobileOnly &&
      css`
        display: none;
      `}
  }
`;

export default StyledForm;
