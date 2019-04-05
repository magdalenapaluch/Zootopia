import { createGlobalStyle } from "styled-components";

const StyledTitle = createGlobalStyle`
  /* Box sizing for all elements */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .title {
  font-size: 34px;
  color: #e8f8f5;
  font-weight: lighter;
  margin: 10px auto;
  max-width:500px;
  width: 100%;
  text-align: left;
  display: block;

}
`;

export default StyledTitle;
