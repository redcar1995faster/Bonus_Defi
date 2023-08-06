import React from "react";

import { Button, Img, Line, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1173px] w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Img
                  className="h-[61px] md:h-auto object-cover w-[111px] sm:w-full"
                  src="images/img_bonus1.png"
                  alt="bonusOne"
                />
                <Text
                  className="capitalize leading-[21.00px] max-w-[356px] md:max-w-full text-blue_gray-200_01 text-sm"
                  size="txtMontserratRomanRegular14Bluegray20001"
                >
                  <>
                    Revolutionize your project&#39;s success in the DeFi
                    ecosystem and captivate your community with Bonus DeFi&#39;s
                    groundbreaking features and organic marketing strategies.
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-6 h-[287px] md:h-auto items-start justify-start">
              <Text
                className="text-white-A700 text-xl tracking-[-0.60px] w-auto"
                size="txtSyneBold20"
              >
                Pages
              </Text>
              <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                <li>
                  <Text
                    className="text-base text-blue_gray-200_01"
                    size="txtMontserratRomanRegular16Bluegray20001"
                  >
                    Home
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-blue_gray-200_01"
                    size="txtMontserratRomanRegular16Bluegray20001"
                  >
                    Prediction
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-blue_gray-200_01"
                    size="txtMontserratRomanRegular16Bluegray20001"
                  >
                     Contact Information
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-blue_gray-200_01"
                    size="txtMontserratRomanRegular16Bluegray20001"
                  >
                    Features
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-blue_gray-200_01"
                    size="txtMontserratRomanRegular16Bluegray20001"
                  >
                    How It Works
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-blue_gray-200_01"
                    size="txtMontserratRomanRegular16Bluegray20001"
                  >
                    FAQs
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 h-[287px] md:h-auto items-start justify-start w-auto">
              <Text
                className="text-white-A700 text-xl tracking-[-0.60px] w-auto"
                size="txtSyneBold20"
              >
                Legal
              </Text>
              <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                <li>
                  <Text
                    className="text-base text-blue_gray-200_01"
                    size="txtMontserratRomanRegular16Bluegray20001"
                  >
                    Privacy Policy
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-blue_gray-200_01"
                    size="txtMontserratRomanRegular16Bluegray20001"
                  >
                    Terms of Services
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-blue_gray-200_01"
                    size="txtMontserratRomanRegular16Bluegray20001"
                  >
                    About Us
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-blue_gray-200_01"
                    size="txtMontserratRomanRegular16Bluegray20001"
                  >
                     Contact Information
                  </Text>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] items-start justify-start w-auto md:w-full">
            <Line className="bg-blue_gray-900_01 h-px w-full" />
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1224px] w-full">
              <Text
                className="text-base text-blue_gray-300_03 w-auto"
                size="txtInterRegular16Bluegray30003"
              >
                <span className="text-blue_gray-300_03 font-montserrat text-left font-normal">
                  Copyright ©{" "}
                </span>
                <span className="text-blue_gray-300_03 font-montserrat text-left font-normal">
                  Bonus Defi 2023
                </span>
              </Text>
              <div className="flex flex-row gap-[15px] items-start justify-start w-auto">
                <Button className="bg-gray-900_03 border border-blue_gray-900_01 border-solid flex h-[34px] items-center justify-center p-[5px] rounded-lg w-[34px]">
                  <Img
                    className="h-6"
                    src="images/img_rifacebookfill.svg"
                    alt="rifacebookfill"
                  />
                </Button>
                <Button className="bg-gray-900_03 border border-blue_gray-900_01 border-solid flex h-[34px] items-center justify-center p-[5px] rounded-lg w-[34px]">
                  <Img
                    className="h-6"
                    src="images/img_mditwitter.svg"
                    alt="mditwitter"
                  />
                </Button>
                <Button className="bg-gray-900_03 border border-blue_gray-900_01 border-solid flex h-[34px] items-center justify-center p-[5px] rounded-lg w-[34px]">
                  <Img
                    className="h-6"
                    src="images/img_rilinkedinfill.svg"
                    alt="rilinkedinfill"
                  />
                </Button>
                <Button className="bg-gray-900_03 border border-blue_gray-900_01 border-solid flex h-[34px] items-center justify-center p-[9px] rounded-lg w-[34px]">
                  <Img
                    className="h-4"
                    src="images/img_camera.svg"
                    alt="camera"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
