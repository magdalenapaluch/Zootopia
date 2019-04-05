import React from "react";
import StyledInput from "./styled";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

const PhoneInput = props => {
  if (props.page === "Homepage") {
    return (
      <>
        <StyledInput />
        <IntlTelInput
          containerClassName="intl-tel-input"
          inputClassName="phoneInput form-control"
          placeholder=""
        />
      </>
    );
  } else {
    return (
      <>
        <StyledInput />
        <div className="SMSContainer">
          <input
            maxlength="1"
            min="0"
            max="9"
            className="SMSInput"
            type="number"
          />
          <input
            maxlength="1"
            min="0"
            max="9"
            className="SMSInput"
            type="number"
          />
          <input
            maxlength="1"
            min="0"
            max="9"
            className="SMSInput"
            type="number"
          />
          <input
            maxlength="1"
            min="0"
            max="9"
            className="SMSInput"
            type="number"
          />
          <input
            maxlength="1"
            min="0"
            max="9"
            className="SMSInput"
            type="number"
          />
        </div>
      </>
    );
  }
};

export default PhoneInput;
