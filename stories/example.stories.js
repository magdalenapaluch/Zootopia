import React from "react";
import { storiesOf } from "@storybook/react";
import ValidationButton from '../src/components/ValidationButton';

storiesOf("Example", module).add("example story", () => <p>Hello Button</p>);
storiesOf("ValidationButton", module).add("ValidationButton story", () => <ValidationButton/>);
