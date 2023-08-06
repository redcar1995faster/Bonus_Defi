import React from "react";

import { Img, Input, Text } from "components";

type LandingPageColumnEightProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "bonusdefipredicOne"
  | "description"
  | "ethbtc"
  | "p002180700"
  | "endingin"
  | "p5d52m20s"
  | "amount"
  | "predictionnow"
  | "bonusdefipredicThree"
  | "descriptionOne"
  | "ethbtcOne"
  | "p002180700one"
  | "endinginOne"
  | "p5d52m20sone"
  | "amountOne"
  | "predictionnowOne"
  | "bonusdefipredicFive"
  | "descriptionTwo"
  | "ethbtcTwo"
  | "p002180700two"
  | "endinginTwo"
  | "distance"
  | "amountTwo"
  | "predictionnowTwo"
  | "bonusdefipredicSeven"
  | "descriptionThree"
  | "ethbtcThree"
  | "p002180700three"
  | "endinginThree"
  | "p5d52m20stwo"
  | "amountThree"
  | "predictionnowThree"
  | "bonusdefipredicNine"
  | "descriptionFour"
  | "ethbtcFour"
  | "p002180700four"
  | "endinginFour"
  | "distanceOne"
  | "amountFour"
  | "predictionnowFour"
  | "bonusdefipredicEleven"
  | "descriptionFive"
  | "ethbtcFive"
  | "p002180700five"
  | "endinginFive"
  | "distanceTwo"
  | "amountFive"
  | "frame171five"
  | "predictionnowFive"
  | "bonusdefipredicThirteen"
  | "descriptionSix"
  | "ethbtcSix"
  | "p002180700six"
  | "endinginSix"
  | "p5d52m20sthree"
  | "amountSix"
  | "frame171six"
  | "predictionnowSix"
> &
  Partial<{
    bonusdefipredicOne: string;
    description: string;
    ethbtc: string;
    p002180700: string;
    endingin: string;
    p5d52m20s: string;
    amount: string;
    predictionnow: string;
    bonusdefipredicThree: string;
    descriptionOne: string;
    ethbtcOne: string;
    p002180700one: string;
    endinginOne: string;
    p5d52m20sone: string;
    amountOne: string;
    predictionnowOne: string;
    bonusdefipredicFive: string;
    descriptionTwo: string;
    ethbtcTwo: string;
    p002180700two: string;
    endinginTwo: string;
    distance: string;
    amountTwo: string;
    predictionnowTwo: string;
    bonusdefipredicSeven: string;
    descriptionThree: string;
    ethbtcThree: string;
    p002180700three: string;
    endinginThree: string;
    p5d52m20stwo: string;
    amountThree: string;
    predictionnowThree: string;
    bonusdefipredicNine: string;
    descriptionFour: string;
    ethbtcFour: string;
    p002180700four: string;
    endinginFour: string;
    distanceOne: string;
    amountFour: string;
    predictionnowFour: string;
    bonusdefipredicEleven: string;
    descriptionFive: string;
    ethbtcFive: string;
    p002180700five: string;
    endinginFive: string;
    distanceTwo: string;
    amountFive: string;
    frame171five: string;
    predictionnowFive: string;
    bonusdefipredicThirteen: string;
    descriptionSix: string;
    ethbtcSix: string;
    p002180700six: string;
    endinginSix: string;
    p5d52m20sthree: string;
    amountSix: string;
    frame171six: string;
    predictionnowSix: string;
  }>;

const LandingPageColumnEight: React.FC<LandingPageColumnEightProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="overflow-auto overflow-x-auto w-full">
            <div className="sm:h-[2662px] h-[351px] md:h-[732px] md:pl-10 pl-20 sm:pl-5 relative w-full">
              <div className="absolute gap-10 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 h-full inset-y-[0] items-center justify-between my-auto right-[0] w-auto">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[351px] items-center justify-start p-6 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group3.png')" }}
                >
                  <div className="flex flex-col gap-6 items-start justify-start my-[9px] w-auto">
                    <div className="flex flex-col gap-6 items-start justify-start w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <div className="flex flex-col gap-6 items-start justify-start w-auto">
                          <Img
                            className="h-9 rounded-[9px] w-9"
                            src="images/img_cardicon03.svg"
                            alt="cardiconThree"
                          />
                          <Text
                            className="text-lg text-white-A700 w-auto"
                            size="txtMontserratRomanSemiBold18"
                          >
                            {props?.bonusdefipredicOne}
                          </Text>
                        </div>
                        <Text
                          className="leading-[18.00px] max-w-[239px] md:max-w-full text-blue_gray-200 text-sm"
                          size="txtMontserratRomanRegular14"
                        >
                          {props?.description}
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between w-[232px]">
                        <div className="flex flex-col gap-1 items-start justify-center w-auto">
                          <Text
                            className="text-[12.05px] text-gray-500 text-right tracking-[-0.12px] w-auto"
                            size="txtMontserratRomanRegular1205"
                          >
                            {props?.ethbtc}
                          </Text>
                          <Text
                            className="text-[13.56px] text-right text-white-A700 w-auto"
                            size="txtMontserratRomanMedium1356"
                          >
                            {props?.p002180700}
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1 items-end justify-center w-auto">
                          <Text
                            className="text-[12.05px] text-gray-500 text-right tracking-[-0.12px] w-auto"
                            size="txtMontserratRomanRegular1205"
                          >
                            {props?.endingin}
                          </Text>
                          <Text
                            className="text-[13.56px] text-right text-white-A700 w-auto"
                            size="txtMontserratRomanMedium1356"
                          >
                            {props?.p5d52m20s}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-end justify-between w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-gray-500 text-xs w-auto"
                          size="txtMontserratRomanRegular12"
                        >
                          {props?.amount}
                        </Text>
                        <Input
                          name="frame171"
                          placeholder="Put amount"
                          className="font-montserrat leading-[normal] p-0 placeholder:text-blue_gray-300_01 sm:pr-5 text-[9px] text-blue_gray-300_01 text-left w-full"
                          wrapClassName="bg-gray-900_02 outline outline-[0.5px] outline-blue_gray-300_02 pl-2.5 pr-[31px] py-2 rounded-[14px] w-full"
                        ></Input>
                      </div>
                      <div className="flex flex-row gap-0.5 items-center justify-start mb-1 mt-[29px] w-auto">
                        <Text
                          className="text-green-A400 text-xs tracking-[0.42px] w-auto"
                          size="txtSyneBold12"
                        >
                          {props?.predictionnow}
                        </Text>
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[351px] items-center justify-start p-6 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group3.png')" }}
                >
                  <div className="flex flex-col gap-6 items-start justify-start my-[9px] w-auto">
                    <div className="flex flex-col gap-6 items-start justify-start w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <div className="flex flex-col gap-6 items-start justify-start w-auto">
                          <Img
                            className="h-9 rounded-[9px] w-9"
                            src="images/img_cardicon03_green_300.svg"
                            alt="cardiconThree_One"
                          />
                          <Text
                            className="text-lg text-white-A700 w-auto"
                            size="txtMontserratRomanSemiBold18"
                          >
                            {props?.bonusdefipredicThree}
                          </Text>
                        </div>
                        <Text
                          className="leading-[18.00px] max-w-[239px] md:max-w-full text-blue_gray-200 text-sm"
                          size="txtMontserratRomanRegular14"
                        >
                          {props?.descriptionOne}
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between w-[237px]">
                        <div className="flex flex-col gap-1 items-start justify-center w-auto">
                          <Text
                            className="text-[12.05px] text-gray-500 text-right tracking-[-0.12px] w-auto"
                            size="txtMontserratRomanRegular1205"
                          >
                            {props?.ethbtcOne}
                          </Text>
                          <Text
                            className="text-[13.56px] text-right text-white-A700 w-auto"
                            size="txtMontserratRomanMedium1356"
                          >
                            {props?.p002180700one}
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1 items-end justify-center w-auto">
                          <Text
                            className="text-[12.05px] text-gray-500 text-right tracking-[-0.12px] w-auto"
                            size="txtMontserratRomanRegular1205"
                          >
                            {props?.endinginOne}
                          </Text>
                          <Text
                            className="text-[13.56px] text-right text-white-A700 w-auto"
                            size="txtMontserratRomanMedium1356"
                          >
                            {props?.p5d52m20sone}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-end justify-between w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-gray-500 text-xs w-auto"
                          size="txtMontserratRomanRegular12"
                        >
                          {props?.amountOne}
                        </Text>
                        <Input
                          name="frame171_One"
                          placeholder="Put amount"
                          className="font-montserrat leading-[normal] p-0 placeholder:text-blue_gray-300_01 sm:pr-5 text-[9px] text-blue_gray-300_01 text-left w-full"
                          wrapClassName="bg-gray-900_02 outline outline-[0.5px] outline-blue_gray-300_02 pl-2.5 pr-[31px] py-2 rounded-[14px] w-full"
                        ></Input>
                      </div>
                      <div className="flex flex-row gap-0.5 items-center justify-start mb-1 mt-[29px] w-auto">
                        <Text
                          className="text-green-A400 text-xs tracking-[0.42px] w-auto"
                          size="txtSyneBold12"
                        >
                          {props?.predictionnowOne}
                        </Text>
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_arrowright.svg"
                          alt="arrowright_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[351px] items-center justify-start p-6 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group3.png')" }}
                >
                  <div className="flex flex-col gap-6 items-start justify-start my-[9px] w-auto">
                    <div className="flex flex-col gap-6 items-start justify-start w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <div className="flex flex-col gap-6 items-start justify-start w-auto">
                          <Img
                            className="h-9 rounded-[9px] w-9"
                            src="images/img_cardicon03_cyan_200.svg"
                            alt="cardiconThree_Two"
                          />
                          <Text
                            className="text-lg text-white-A700 w-auto"
                            size="txtMontserratRomanSemiBold18"
                          >
                            {props?.bonusdefipredicFive}
                          </Text>
                        </div>
                        <Text
                          className="leading-[18.00px] max-w-[239px] md:max-w-full text-blue_gray-200 text-sm"
                          size="txtMontserratRomanRegular14"
                        >
                          {props?.descriptionTwo}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-24 items-start justify-start w-auto">
                        <div className="flex flex-col gap-1 items-start justify-center w-auto">
                          <Text
                            className="text-[12.05px] text-gray-500 text-right tracking-[-0.12px] w-auto"
                            size="txtMontserratRomanRegular1205"
                          >
                            {props?.ethbtcTwo}
                          </Text>
                          <Text
                            className="text-[13.56px] text-right text-white-A700 w-auto"
                            size="txtMontserratRomanMedium1356"
                          >
                            {props?.p002180700two}
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center w-auto">
                          <Text
                            className="text-[12.05px] text-gray-500 text-right tracking-[-0.12px] w-auto"
                            size="txtMontserratRomanRegular1205"
                          >
                            {props?.endinginTwo}
                          </Text>
                          <Text
                            className="text-[13.56px] text-right text-white-A700 w-auto"
                            size="txtMontserratRomanMedium1356"
                          >
                            {props?.distance}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-end justify-between w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-gray-500 text-xs w-auto"
                          size="txtMontserratRomanRegular12"
                        >
                          {props?.amountTwo}
                        </Text>
                        <Input
                          name="frame171_Two"
                          placeholder="Put amount"
                          className="font-montserrat leading-[normal] p-0 placeholder:text-blue_gray-300_01 sm:pr-5 text-[9px] text-blue_gray-300_01 text-left w-full"
                          wrapClassName="bg-gray-900_02 outline outline-[0.5px] outline-blue_gray-300_02 pl-2.5 pr-[31px] py-2 rounded-[14px] w-full"
                        ></Input>
                      </div>
                      <div className="flex flex-row gap-0.5 items-center justify-start mb-1 mt-[29px] w-auto">
                        <Text
                          className="text-green-A400 text-xs tracking-[0.42px] w-auto"
                          size="txtSyneBold12"
                        >
                          {props?.predictionnowTwo}
                        </Text>
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_arrowright.svg"
                          alt="arrowright_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[351px] items-center justify-start p-6 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group3.png')" }}
                >
                  <div className="flex flex-col gap-6 items-start justify-start my-[9px] w-auto">
                    <div className="flex flex-col gap-6 items-start justify-start w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <div className="flex flex-col gap-6 items-start justify-start w-auto">
                          <Img
                            className="h-9 rounded-[9px] w-9"
                            src="images/img_cardicon03_orange_200.svg"
                            alt="cardiconThree_Three"
                          />
                          <Text
                            className="text-lg text-white-A700 w-auto"
                            size="txtMontserratRomanSemiBold18"
                          >
                            {props?.bonusdefipredicSeven}
                          </Text>
                        </div>
                        <Text
                          className="leading-[18.00px] max-w-[239px] md:max-w-full text-blue_gray-200 text-sm"
                          size="txtMontserratRomanRegular14"
                        >
                          {props?.descriptionThree}
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between w-[236px]">
                        <div className="flex flex-col gap-1 items-start justify-center w-auto">
                          <Text
                            className="text-[12.05px] text-gray-500 text-right tracking-[-0.12px] w-auto"
                            size="txtMontserratRomanRegular1205"
                          >
                            {props?.ethbtcThree}
                          </Text>
                          <Text
                            className="text-[13.56px] text-right text-white-A700 w-auto"
                            size="txtMontserratRomanMedium1356"
                          >
                            {props?.p002180700three}
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1 items-end justify-center w-auto">
                          <Text
                            className="text-[12.05px] text-gray-500 text-right tracking-[-0.12px] w-auto"
                            size="txtMontserratRomanRegular1205"
                          >
                            {props?.endinginThree}
                          </Text>
                          <Text
                            className="text-[13.56px] text-right text-white-A700 w-auto"
                            size="txtMontserratRomanMedium1356"
                          >
                            {props?.p5d52m20stwo}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-end justify-between w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-gray-500 text-xs w-auto"
                          size="txtMontserratRomanRegular12"
                        >
                          {props?.amountThree}
                        </Text>
                        <Input
                          name="frame171_Three"
                          placeholder="Put amount"
                          className="font-montserrat leading-[normal] p-0 placeholder:text-blue_gray-300_01 sm:pr-5 text-[9px] text-blue_gray-300_01 text-left w-full"
                          wrapClassName="bg-gray-900_02 outline outline-[0.5px] outline-blue_gray-300_02 pl-2.5 pr-[31px] py-2 rounded-[14px] w-full"
                        ></Input>
                      </div>
                      <div className="flex flex-row gap-0.5 items-center justify-start mb-1 mt-[29px] w-auto">
                        <Text
                          className="text-green-A400 text-xs tracking-[0.42px] w-auto"
                          size="txtSyneBold12"
                        >
                          {props?.predictionnowThree}
                        </Text>
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_arrowright.svg"
                          alt="arrowright_Three"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[351px] items-center justify-start p-6 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group3.png')" }}
                >
                  <div className="flex flex-col gap-6 items-start justify-start my-[9px] w-auto">
                    <div className="flex flex-col gap-6 items-start justify-start w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <div className="flex flex-col gap-6 items-start justify-start w-auto">
                          <Img
                            className="h-9 rounded-[9px] w-9"
                            src="images/img_cardicon03_deep_orange_a100.svg"
                            alt="cardiconThree_Four"
                          />
                          <Text
                            className="text-lg text-white-A700 w-auto"
                            size="txtMontserratRomanSemiBold18"
                          >
                            {props?.bonusdefipredicNine}
                          </Text>
                        </div>
                        <Text
                          className="leading-[18.00px] max-w-[239px] md:max-w-full text-blue_gray-200 text-sm"
                          size="txtMontserratRomanRegular14"
                        >
                          {props?.descriptionFour}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-24 items-start justify-start w-auto">
                        <div className="flex flex-col gap-1 items-start justify-center w-auto">
                          <Text
                            className="text-[12.05px] text-gray-500 text-right tracking-[-0.12px] w-auto"
                            size="txtMontserratRomanRegular1205"
                          >
                            {props?.ethbtcFour}
                          </Text>
                          <Text
                            className="text-[13.56px] text-right text-white-A700 w-auto"
                            size="txtMontserratRomanMedium1356"
                          >
                            {props?.p002180700four}
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center w-auto">
                          <Text
                            className="text-[12.05px] text-gray-500 text-right tracking-[-0.12px] w-auto"
                            size="txtMontserratRomanRegular1205"
                          >
                            {props?.endinginFour}
                          </Text>
                          <Text
                            className="text-[13.56px] text-right text-white-A700 w-auto"
                            size="txtMontserratRomanMedium1356"
                          >
                            {props?.distanceOne}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-end justify-between w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-gray-500 text-xs w-auto"
                          size="txtMontserratRomanRegular12"
                        >
                          {props?.amountFour}
                        </Text>
                        <Input
                          name="frame171_Four"
                          placeholder="Put amount"
                          className="font-montserrat leading-[normal] p-0 placeholder:text-blue_gray-300_01 sm:pr-5 text-[9px] text-blue_gray-300_01 text-left w-full"
                          wrapClassName="bg-gray-900_02 outline outline-[0.5px] outline-blue_gray-300_02 pl-2.5 pr-[31px] py-[11px] rounded-[14px] w-full"
                        ></Input>
                      </div>
                      <div className="flex flex-row gap-0.5 items-center justify-start mb-1 mt-[29px] w-auto">
                        <Text
                          className="text-green-A400 text-xs tracking-[0.42px] w-auto"
                          size="txtSyneBold12"
                        >
                          {props?.predictionnowFour}
                        </Text>
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_arrowright.svg"
                          alt="arrowright_Four"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[351px] items-center justify-start p-6 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group3.png')" }}
                >
                  <div className="flex flex-col gap-6 items-start justify-start my-[9px] w-auto">
                    <div className="flex flex-col gap-6 items-start justify-start w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <div className="flex flex-col gap-6 items-start justify-start w-auto">
                          <Img
                            className="h-9 rounded-[9px] w-9"
                            src="images/img_cardicon03_deep_purple_a100.svg"
                            alt="cardiconThree_Five"
                          />
                          <Text
                            className="text-lg text-white-A700 w-auto"
                            size="txtMontserratRomanSemiBold18"
                          >
                            {props?.bonusdefipredicEleven}
                          </Text>
                        </div>
                        <Text
                          className="leading-[18.00px] max-w-[239px] md:max-w-full text-blue_gray-200 text-sm"
                          size="txtMontserratRomanRegular14"
                        >
                          {props?.descriptionFive}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-24 items-start justify-start w-auto">
                        <div className="flex flex-col gap-1 items-start justify-center w-auto">
                          <Text
                            className="text-[12.05px] text-gray-500 text-right tracking-[-0.12px] w-auto"
                            size="txtMontserratRomanRegular1205"
                          >
                            {props?.ethbtcFive}
                          </Text>
                          <Text
                            className="text-[13.56px] text-right text-white-A700 w-auto"
                            size="txtMontserratRomanMedium1356"
                          >
                            {props?.p002180700five}
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center w-auto">
                          <Text
                            className="text-[12.05px] text-gray-500 text-right tracking-[-0.12px] w-auto"
                            size="txtMontserratRomanRegular1205"
                          >
                            {props?.endinginFive}
                          </Text>
                          <Text
                            className="text-[13.56px] text-right text-white-A700 w-auto"
                            size="txtMontserratRomanMedium1356"
                          >
                            {props?.distanceTwo}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-end justify-between w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-gray-500 text-xs w-auto"
                          size="txtMontserratRomanRegular12"
                        >
                          {props?.amountFive}
                        </Text>
                        <Text
                          className="bg-gray-900_02 justify-center outline outline-[0.5px] outline-blue_gray-300_02 pl-2.5 sm:pr-5 pr-[31px] py-[11px] rounded-[14px] text-[9px] text-blue_gray-300_01 w-auto"
                          size="txtMontserratRomanRegular9"
                        >
                          {props?.frame171five}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-0.5 items-center justify-start mb-1 mt-[29px] w-auto">
                        <Text
                          className="text-green-A400 text-xs tracking-[0.42px] w-auto"
                          size="txtSyneBold12"
                        >
                          {props?.predictionnowFive}
                        </Text>
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_arrowright.svg"
                          alt="arrowright_Five"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[351px] items-center justify-start p-6 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group3.png')" }}
                >
                  <div className="flex flex-col gap-6 items-start justify-start my-[9px] w-auto">
                    <div className="flex flex-col gap-6 items-start justify-start w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <div className="flex flex-col gap-6 items-start justify-start w-auto">
                          <Img
                            className="h-9 rounded-[9px] w-9"
                            src="images/img_cardicon03_indigo_a100.svg"
                            alt="cardiconThree_Six"
                          />
                          <Text
                            className="text-lg text-white-A700 w-auto"
                            size="txtMontserratRomanSemiBold18"
                          >
                            {props?.bonusdefipredicThirteen}
                          </Text>
                        </div>
                        <Text
                          className="leading-[18.00px] max-w-[239px] md:max-w-full text-blue_gray-200 text-sm"
                          size="txtMontserratRomanRegular14"
                        >
                          {props?.descriptionSix}
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between w-[236px]">
                        <div className="flex flex-col gap-1 items-start justify-center w-auto">
                          <Text
                            className="text-[12.05px] text-gray-500 text-right tracking-[-0.12px] w-auto"
                            size="txtMontserratRomanRegular1205"
                          >
                            {props?.ethbtcSix}
                          </Text>
                          <Text
                            className="text-[13.56px] text-right text-white-A700 w-auto"
                            size="txtMontserratRomanMedium1356"
                          >
                            {props?.p002180700six}
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1 items-end justify-center w-auto">
                          <Text
                            className="text-[12.05px] text-gray-500 text-right tracking-[-0.12px] w-auto"
                            size="txtMontserratRomanRegular1205"
                          >
                            {props?.endinginSix}
                          </Text>
                          <Text
                            className="text-[13.56px] text-right text-white-A700 w-auto"
                            size="txtMontserratRomanMedium1356"
                          >
                            {props?.p5d52m20sthree}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-end justify-between w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-gray-500 text-xs w-auto"
                          size="txtMontserratRomanRegular12"
                        >
                          {props?.amountSix}
                        </Text>
                        <Text
                          className="bg-gray-900_02 justify-center outline outline-[0.5px] outline-blue_gray-300_02 pl-2.5 sm:pr-5 pr-[31px] py-[11px] rounded-[14px] text-[9px] text-blue_gray-300_01 w-auto"
                          size="txtMontserratRomanRegular9"
                        >
                          {props?.frame171six}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-0.5 items-center justify-start mb-1 mt-[29px] w-auto">
                        <Text
                          className="text-green-A400 text-xs tracking-[0.42px] w-auto"
                          size="txtSyneBold12"
                        >
                          {props?.predictionnowSix}
                        </Text>
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_arrowright.svg"
                          alt="arrowright_Six"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-10 inset-y-[0] left-[23%] my-auto w-[1279px]"
                src="images/img_frame719.svg"
                alt="frame719"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LandingPageColumnEight.defaultProps = {
  bonusdefipredicOne: "Bonus DeFi Prediction 01",
  description:
    "Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
  ethbtc: "ETH/BTC",
  p002180700: "0.02180700",
  endingin: "Ending in",
  p5d52m20s: "5d-52m-20s",
  amount: "Amount",
  predictionnow: "Prediction Now",
  bonusdefipredicThree: "Bonus DeFi Prediction 02",
  descriptionOne:
    "Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
  ethbtcOne: "ETH/BTC",
  p002180700one: "0.02180700",
  endinginOne: "Ending in",
  p5d52m20sone: "5d-52m-20s",
  amountOne: "Amount",
  predictionnowOne: "Prediction Now",
  bonusdefipredicFive: "Bonus DeFi Prediction 03",
  descriptionTwo:
    "Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
  ethbtcTwo: "ETH/BTC",
  p002180700two: "0.02180700",
  endinginTwo: "Ending in",
  distance: "52m 20s",
  amountTwo: "Amount",
  predictionnowTwo: "Prediction Now",
  bonusdefipredicSeven: "Bonus DeFi Prediction 04",
  descriptionThree:
    "Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
  ethbtcThree: "ETH/BTC",
  p002180700three: "0.02180700",
  endinginThree: "Ending in",
  p5d52m20stwo: "5d-52m-20s",
  amountThree: "Amount",
  predictionnowThree: "Prediction Now",
  bonusdefipredicNine: "Bonus DeFi Prediction 05",
  descriptionFour:
    "Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
  ethbtcFour: "ETH/BTC",
  p002180700four: "0.02180700",
  endinginFour: "Ending in",
  distanceOne: "52m 20s",
  amountFour: "Amount",
  predictionnowFour: "Prediction Now",
  bonusdefipredicEleven: "Bonus DeFi Prediction 06",
  descriptionFive:
    "Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
  ethbtcFive: "ETH/BTC",
  p002180700five: "0.02180700",
  endinginFive: "Ending in",
  distanceTwo: "52m 20s",
  amountFive: "Amount",
  frame171five: "Put amount",
  predictionnowFive: "Prediction Now",
  bonusdefipredicThirteen: "Bonus DeFi Prediction 07",
  descriptionSix:
    "Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
  ethbtcSix: "ETH/BTC",
  p002180700six: "0.02180700",
  endinginSix: "Ending in",
  p5d52m20sthree: "5d-52m-20s",
  amountSix: "Amount",
  frame171six: "Put amount",
  predictionnowSix: "Prediction Now",
};

export default LandingPageColumnEight;
