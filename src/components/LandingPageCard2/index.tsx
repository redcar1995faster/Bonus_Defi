import React from "react";

import { Img, Text } from "components";

type LandingPageCard2Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "userdescription"
> &
  Partial<{ username: string; userdescription: string }>;

const LandingPageCard2: React.FC<LandingPageCard2Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[12.16px] items-start justify-start m-auto w-full">
          <Img
            className="h-9 rounded-[9px] w-9"
            src="images/img_cardicon03_36x36.svg"
            alt="cardiconThree"
          />
          <Text
            className="sm:text-[20.31px] md:text-[22.31px] text-[24.31px] text-white-A700 tracking-[-0.73px] w-full"
            size="txtMontserratBold2431"
          >
            {props?.username}
          </Text>
          <Text
            className="leading-[24.00px] max-w-[327px] md:max-w-full text-base text-white-A700"
            size="txtMontserratRomanMedium16WhiteA700"
          >
            {props?.userdescription}
          </Text>
        </div>
        <div className="absolute md:h-[149px] h-[150px] inset-y-[0] my-auto right-[15%] w-[39%]">
          <div className="md:h-[149px] h-[150px] m-auto w-full">
            <div className="absolute h-[149px] inset-[0] justify-center m-auto w-full">
              <Img
                className="absolute h-[149px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_base.png"
                alt="base"
              />
              <Img
                className="absolute h-[137px] inset-[0] justify-center m-auto object-cover w-[137px]"
                src="images/img_1.png"
                alt="One"
              />
            </div>
            <div className="absolute h-[149px] inset-[0] justify-center m-auto w-full">
              <Img
                className="absolute h-[149px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_2.png"
                alt="Two"
              />
              <Img
                className="absolute h-[111px] inset-[0] justify-center m-auto object-cover w-28"
                src="images/img_3.png"
                alt="Three"
              />
              <Img
                className="absolute h-[137px] inset-[0] justify-center m-auto object-cover w-[137px]"
                src="images/img_chrome.png"
                alt="chrome"
              />
            </div>
          </div>
          <Img
            className="absolute h-[149px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_glossy.png"
            alt="glossy"
          />
        </div>
      </div>
    </>
  );
};

LandingPageCard2.defaultProps = {
  username: "Project NO 03",
  userdescription:
    "Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
};

export default LandingPageCard2;
