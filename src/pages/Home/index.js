import React, { useState } from "react";
import bgcImageHomepage from './login-1.png';
import bgcImageSMSCodePage from './login-2.png';
import logo2 from './trisbee-logo.png';
import Headline from '../../components/Headline/index';
// import VerticalHalf from '../../components/VerticalHalf/index';
import SecondaryText from '../../components/SecondaryText/index';
import Image from '../../components/Image/index';
import Form from "../../components/Form";




const HomePage = () => {

	const handleValidationButton = () => {
		setPage("SMSCodePage");
	}

	const [page, setPage] = useState("Homepage");
	if (page === "Homepage") {

		return (
			<div className="PageWrapper">

				<div className="VerticalHalf FlexContainer">
					<div className="LogoAndHeadline">
						<img className="LogoAndHeadline-logo" src={logo2} alt="Logo" />
						<Headline className="mainHeadline" text="Play zootopia anywhere" />
					</div>
					<Form page={page} state={page} click={handleValidationButton.bind(this)} setPage={setPage} textTitle="Sign in" textSecondary="You will receive a message with a 5-digit verification code" textButton="next" textLanguage="Change language" />
					<SecondaryText text="Change language" darker={true} />
				</div>
				<div className="VerticalHalf FlexContainer--lightGreen DesktopContainer">
					<Image src={bgcImageHomepage} />
				</div>
			</div>
		);
	} else {
		return (
			<div className="PageWrapper">

				<div className="VerticalHalf FlexContainer FlexContainer--lightGreen">
					<div className="LogoAndHeadline">
						<img className="LogoAndHeadline-logo" src={logo2} alt="Logo" />
						<Headline green={true} className="mainHeadline" text="Play zootopia anywhere" />
					</div>
					<Image src={bgcImageSMSCodePage} halfPage={true}/>
					<Form page={page} displayOnMobileOnly={true}state={page} click={handleValidationButton.bind(this)} setPage={setPage} textTitle="SMS code" textSecondary="Didn’t receive the code? Request again." textButton="next" textLanguage="Change language" />
					<SecondaryText text="Change language" darker={true} />
				</div>
				<div className="VerticalHalf FlexContainer DesktopContainer FlexContainer--spaceAround">

					<Form page={page} displayOnDesktopOnly={true} state={page} click={handleValidationButton.bind(this)} setPage={setPage} textTitle="SMS code" textSecondary="Didn’t receive the code? Request again." textButton="next" textLanguage="Change language" />

				</div>

			</div>
		);

	}
};

export default HomePage;
