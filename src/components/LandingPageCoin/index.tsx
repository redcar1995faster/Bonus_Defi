import React from "react";

import { Img, List, Text } from "components";

type LandingPageCoinProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "price1"
  | "price2"
  | "price3"
  | "price4"
  | "price5"
  | "price6"
  | "price7"
  | "price8"
  | "price9"
  | "price10"
  | "price11"
  | "price12"
  | "price13"
  | "price14"
  | "price15"
> &
  Partial<{
    price1: string;
    price2: string;
    price3: string;
    price4: string;
    price5: string;
    price6: string;
    price7: string;
    price8: string;
    price9: string;
    price10: string;
    price11: string;
    price12: string;
    price13: string;
    price14: string;
    price15: string;
  }>;

const LandingPageCoin: React.FC<LandingPageCoinProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start overflow-auto w-auto md:w-full">
          <div className="bg-light_green-A200 flex flex-col items-center justify-end p-5 w-full">
            <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-auto md:w-full">
              <List
                className="sm:flex-col flex-row gap-[31px] grid grid-cols-2 w-[35%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-[7.1px] items-end justify-start w-auto">
                  <Img
                    className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                    src="images/img_ellipse38.png"
                    alt="ellipseThirtyEight"
                  />
                  <Text
                    className="sm:text-[18.6px] md:text-[20.6px] text-[22.6px] text-black-900_02 w-auto"
                    size="txtInterRegular226"
                  >
                    {props?.price1}
                  </Text>
                </div>
                <div className="flex flex-row gap-[7.1px] items-end justify-start w-auto">
                  <Img
                    className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                    src="images/img_ellipse39.png"
                    alt="ellipseThirtyNine"
                  />
                  <Text
                    className="sm:text-[18.6px] md:text-[20.6px] text-[22.6px] text-black-900_02 w-auto"
                    size="txtInterRegular226"
                  >
                    {props?.price2}
                  </Text>
                </div>
              </List>
              <div className="flex flex-row gap-[7.1px] items-end justify-start w-auto">
                <Img
                  className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                  src="images/img_ellipse40.png"
                  alt="ellipseForty"
                />
                <Text
                  className="sm:text-[18.6px] md:text-[20.6px] text-[22.6px] text-black-900_02 w-auto"
                  size="txtInterRegular226"
                >
                  {props?.price3}
                </Text>
              </div>
              <div className="flex flex-row gap-[7.1px] items-end justify-start w-auto">
                <Img
                  className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                  src="images/img_ellipse41.png"
                  alt="ellipseFortyOne"
                />
                <Text
                  className="sm:text-[18.6px] md:text-[20.6px] text-[22.6px] text-black-900_02 w-auto"
                  size="txtInterRegular226"
                >
                  {props?.price4}
                </Text>
              </div>
              <div className="flex flex-row gap-[7.1px] items-end justify-start w-auto">
                <Img
                  className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                  src="images/img_ellipse42.png"
                  alt="ellipseFortyTwo"
                />
                <Text
                  className="sm:text-[18.6px] md:text-[20.6px] text-[22.6px] text-black-900_02 w-auto"
                  size="txtInterRegular226"
                >
                  {props?.price5}
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-light_green-A200 h-[71px] w-full"></div>
          <List
            className="bg-light_green-A200 sm:flex-col flex-row md:gap-10 gap-[494px] grid md:grid-cols-1 grid-cols-2 sm:pr-5 pr-[21px] py-[21px] w-full"
            orientation="horizontal"
          >
            <div className="flex md:flex-1 md:flex-col flex-row gap-8 items-start justify-start w-auto md:w-full">
              <div className="flex flex-row gap-[7.1px] items-end justify-start w-auto">
                <Img
                  className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                  src="images/img_ellipse38.png"
                  alt="ellipseThirtyEight"
                />
                <Text
                  className="sm:text-[18.6px] md:text-[20.6px] text-[22.6px] text-black-900_02 w-auto"
                  size="txtInterRegular226"
                >
                  {props?.price6}
                </Text>
              </div>
              <div className="flex flex-row gap-[7.1px] items-end justify-start w-auto">
                <Img
                  className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                  src="images/img_ellipse39.png"
                  alt="ellipseThirtyNine"
                />
                <Text
                  className="sm:text-[18.6px] md:text-[20.6px] text-[22.6px] text-black-900_02 w-auto"
                  size="txtInterRegular226"
                >
                  {props?.price7}
                </Text>
              </div>
              <div className="flex flex-row gap-[7.1px] items-end justify-start w-auto">
                <Img
                  className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                  src="images/img_ellipse40.png"
                  alt="ellipseForty"
                />
                <Text
                  className="sm:text-[18.6px] md:text-[20.6px] text-[22.6px] text-black-900_02 w-auto"
                  size="txtInterRegular226"
                >
                  {props?.price8}
                </Text>
              </div>
              <div className="flex flex-row gap-[7.1px] items-end justify-start w-auto">
                <Img
                  className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                  src="images/img_ellipse41.png"
                  alt="ellipseFortyOne"
                />
                <Text
                  className="sm:text-[18.6px] md:text-[20.6px] text-[22.6px] text-black-900_02 w-auto"
                  size="txtInterRegular226"
                >
                  {props?.price9}
                </Text>
              </div>
              <div className="flex flex-row gap-[7.1px] items-end justify-start w-auto">
                <Img
                  className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                  src="images/img_ellipse42.png"
                  alt="ellipseFortyTwo"
                />
                <Text
                  className="sm:text-[18.6px] md:text-[20.6px] text-[22.6px] text-black-900_02 w-auto"
                  size="txtInterRegular226"
                >
                  {props?.price10}
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row gap-8 items-start justify-start w-auto md:w-full">
              <div className="flex flex-row gap-[7.1px] items-end justify-start w-auto">
                <Img
                  className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                  src="images/img_ellipse38.png"
                  alt="ellipseThirtyEight"
                />
                <Text
                  className="sm:text-[18.6px] md:text-[20.6px] text-[22.6px] text-black-900_02 w-auto"
                  size="txtInterRegular226"
                >
                  {props?.price11}
                </Text>
              </div>
              <div className="flex flex-row gap-[7.1px] items-end justify-start w-auto">
                <Img
                  className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                  src="images/img_ellipse39.png"
                  alt="ellipseThirtyNine"
                />
                <Text
                  className="sm:text-[18.6px] md:text-[20.6px] text-[22.6px] text-black-900_02 w-auto"
                  size="txtInterRegular226"
                >
                  {props?.price12}
                </Text>
              </div>
              <div className="flex flex-row gap-[7.1px] items-end justify-start w-auto">
                <Img
                  className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                  src="images/img_ellipse40.png"
                  alt="ellipseForty"
                />
                <Text
                  className="sm:text-[18.6px] md:text-[20.6px] text-[22.6px] text-black-900_02 w-auto"
                  size="txtInterRegular226"
                >
                  {props?.price13}
                </Text>
              </div>
              <div className="flex flex-row gap-[7.1px] items-end justify-start w-auto">
                <Img
                  className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                  src="images/img_ellipse41.png"
                  alt="ellipseFortyOne"
                />
                <Text
                  className="sm:text-[18.6px] md:text-[20.6px] text-[22.6px] text-black-900_02 w-auto"
                  size="txtInterRegular226"
                >
                  {props?.price14}
                </Text>
              </div>
              <div className="flex flex-row gap-[7.1px] items-end justify-start w-auto">
                <Img
                  className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                  src="images/img_ellipse42.png"
                  alt="ellipseFortyTwo"
                />
                <Text
                  className="sm:text-[18.6px] md:text-[20.6px] text-[22.6px] text-black-900_02 w-auto"
                  size="txtInterRegular226"
                >
                  {props?.price15}
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

LandingPageCoin.defaultProps = {
  price1: "RBT $2.38",
  price2: "RBS $0.03",
  price3: "BNB $241.73",
  price4: "BTC $26416",
  price5: "ETH $1719.27",
  price6: "RBT $2.38",
  price7: "RBS $0.03",
  price8: "BNB $241.73",
  price9: "BTC $26416",
  price10: "ETH $1719.27",
  price11: "RBT $2.38",
  price12: "RBS $0.03",
  price13: "BNB $241.73",
  price14: "BTC $26416",
  price15: "ETH $1719.27",
};

export default LandingPageCoin;
