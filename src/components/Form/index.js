import React from "react";
import StyledForm from "./styled";
import SecondaryText from "../SecondaryText/index";
import PhoneInput from "../PhoneInput/index";
import ValidationButton from "../ValidationButton/index";
import Title from "../Title/index";

const Form = props => {
  return (
    <StyledForm
      displayOnDesktopOnly={props.displayOnDesktopOnly}
      displayOnMobileOnly={props.displayOnMobileOnly}
      className="Form"
    >
      <Title text={props.textTitle} />
      <PhoneInput page={props.page} />
      <SecondaryText text={props.textSecondary} />
      <ValidationButton text={props.textButton} click={props.click} />
    </StyledForm>
  );
};

export default Form;
