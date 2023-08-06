import React from "react";

import { Img, List, Text } from "components";

type LandingPageColumntokerrProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "diamondclub"
  | "endingin"
  | "p5d52m20s"
  | "language"
  | "memenation"
  | "endingin1"
  | "p5d52m20s1"
  | "language1"
  | "tokerr"
  | "endingin2"
  | "p5d52m20s2"
  | "language2"
  | "apekindom"
  | "endingin3"
  | "p5d52m20s3"
  | "language3"
  | "tradewix"
  | "endingin4"
  | "p5d52m20s4"
  | "language4"
  | "goblininu"
  | "endingin5"
  | "p5d52m20s5"
  | "language5"
  | "collieinu"
  | "endingin6"
  | "p5d52m20s6"
  | "language6"
  | "gamepad"
  | "endingin7"
  | "p5d52m20s7"
  | "language7"
  | "diamondclub1"
  | "endingin8"
  | "p5d52m20s8"
  | "language8"
> &
  Partial<{
    diamondclub: string;
    endingin: string;
    p5d52m20s: string;
    language: string;
    memenation: string;
    endingin1: string;
    p5d52m20s1: string;
    language1: string;
    tokerr: string;
    endingin2: string;
    p5d52m20s2: string;
    language2: string;
    apekindom: string;
    endingin3: string;
    p5d52m20s3: string;
    language3: string;
    tradewix: string;
    endingin4: string;
    p5d52m20s4: string;
    language4: string;
    goblininu: string;
    endingin5: string;
    p5d52m20s5: string;
    language5: string;
    collieinu: string;
    endingin6: string;
    p5d52m20s6: string;
    language6: string;
    gamepad: string;
    endingin7: string;
    p5d52m20s7: string;
    language7: string;
    diamondclub1: string;
    endingin8: string;
    p5d52m20s8: string;
    language8: string;
  }>;

const LandingPageColumntokerr: React.FC<LandingPageColumntokerrProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="flex sm:flex-col flex-row gap-6 justify-start overflow-auto w-auto"
          orientation="horizontal"
        >
          <div className="bg-gray-900 flex flex-col h-[121px] md:h-auto items-start justify-start px-4 py-6 rounded-[12px] w-[282px]">
            <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
              <Img
                className="h-16 md:h-auto rounded-[50%] w-16"
                src="images/img_ellipse37.png"
                alt="ellipseThirtySeven"
              />
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratRomanSemiBold16"
                >
                  {props?.diamondclub}
                </Text>
                <div className="flex flex-row gap-8 items-center justify-start w-auto">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-[12.05px] text-blue_gray-300 text-right tracking-[-0.12px] w-auto"
                      size="txtMontserratRomanMedium1205"
                    >
                      {props?.endingin}
                    </Text>
                    <Text
                      className="text-[15px] text-right text-white-A700 w-auto"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.p5d52m20s}
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="text-[15px] text-right text-white-A700"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.language}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 flex flex-col h-[121px] md:h-auto items-start justify-start px-4 py-6 rounded-[12px] w-[282px]">
            <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
              <Img
                className="h-16 md:h-auto rounded-[50%] w-16"
                src="images/img_ellipse37_64x64.png"
                alt="ellipseThirtySeven"
              />
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratRomanSemiBold16"
                >
                  {props?.memenation}
                </Text>
                <div className="flex flex-row gap-8 items-center justify-start w-auto">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-[12.05px] text-blue_gray-300 text-right tracking-[-0.12px] w-auto"
                      size="txtMontserratRomanMedium1205"
                    >
                      {props?.endingin1}
                    </Text>
                    <Text
                      className="text-[15px] text-right text-white-A700 w-auto"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.p5d52m20s1}
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="text-[15px] text-right text-white-A700"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.language1}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 flex flex-col h-[121px] md:h-auto items-start justify-start px-4 py-6 rounded-[12px] w-[282px]">
            <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
              <Img
                className="h-16 md:h-auto rounded-[50%] w-16"
                src="images/img_ellipse37_1.png"
                alt="ellipseThirtySeven"
              />
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratRomanSemiBold16"
                >
                  {props?.tokerr}
                </Text>
                <div className="flex flex-row gap-8 items-center justify-start w-auto">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-[12.05px] text-blue_gray-300 text-right tracking-[-0.12px] w-auto"
                      size="txtMontserratRomanMedium1205"
                    >
                      {props?.endingin2}
                    </Text>
                    <Text
                      className="text-[15px] text-right text-white-A700 w-auto"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.p5d52m20s2}
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="text-[15px] text-right text-white-A700"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.language2}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 flex flex-col h-[121px] md:h-auto items-start justify-start px-4 py-6 rounded-[12px] w-[282px]">
            <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
              <Img
                className="h-16 md:h-auto rounded-[50%] w-16"
                src="images/img_ellipse37_2.png"
                alt="ellipseThirtySeven"
              />
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratRomanSemiBold16"
                >
                  {props?.apekindom}
                </Text>
                <div className="flex flex-row gap-8 items-center justify-start w-auto">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-[12.05px] text-blue_gray-300 text-right tracking-[-0.12px] w-auto"
                      size="txtMontserratRomanMedium1205"
                    >
                      {props?.endingin3}
                    </Text>
                    <Text
                      className="text-[15px] text-right text-white-A700 w-auto"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.p5d52m20s3}
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="text-[15px] text-right text-white-A700"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.language3}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 flex flex-col h-[121px] md:h-auto items-start justify-start px-4 py-6 rounded-[12px] w-[282px]">
            <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
              <Img
                className="h-16 md:h-auto rounded-[50%] w-16"
                src="images/img_ellipse37_3.png"
                alt="ellipseThirtySeven"
              />
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratRomanSemiBold16"
                >
                  {props?.tradewix}
                </Text>
                <div className="flex flex-row gap-8 items-center justify-start w-auto">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-[12.05px] text-blue_gray-300 text-right tracking-[-0.12px] w-auto"
                      size="txtMontserratRomanMedium1205"
                    >
                      {props?.endingin4}
                    </Text>
                    <Text
                      className="text-[15px] text-right text-white-A700 w-auto"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.p5d52m20s4}
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="text-[15px] text-right text-white-A700 w-auto"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.language4}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 flex flex-col h-[121px] md:h-auto items-start justify-start px-4 py-6 rounded-[12px] w-[282px]">
            <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
              <Img
                className="h-16 md:h-auto rounded-[50%] w-16"
                src="images/img_ellipse37_4.png"
                alt="ellipseThirtySeven"
              />
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratRomanSemiBold16"
                >
                  {props?.goblininu}
                </Text>
                <div className="flex flex-row gap-8 items-center justify-start w-auto">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-[12.05px] text-blue_gray-300 text-right tracking-[-0.12px] w-auto"
                      size="txtMontserratRomanMedium1205"
                    >
                      {props?.endingin5}
                    </Text>
                    <Text
                      className="text-[15px] text-right text-white-A700 w-auto"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.p5d52m20s5}
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="text-[15px] text-right text-white-A700 w-auto"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.language5}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 flex flex-col h-[121px] md:h-auto items-start justify-start px-4 py-6 rounded-[12px] w-[282px]">
            <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
              <Img
                className="h-16 md:h-auto rounded-[50%] w-16"
                src="images/img_ellipse37_5.png"
                alt="ellipseThirtySeven"
              />
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratRomanSemiBold16"
                >
                  {props?.collieinu}
                </Text>
                <div className="flex flex-row gap-8 items-center justify-start w-auto">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-[12.05px] text-blue_gray-300 text-right tracking-[-0.12px] w-auto"
                      size="txtMontserratRomanMedium1205"
                    >
                      {props?.endingin6}
                    </Text>
                    <Text
                      className="text-[15px] text-right text-white-A700 w-auto"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.p5d52m20s6}
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="text-[15px] text-right text-white-A700 w-auto"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.language6}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 flex flex-col h-[121px] md:h-auto items-start justify-start px-4 py-6 rounded-[12px] w-[282px]">
            <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
              <Img
                className="h-16 md:h-auto rounded-[50%] w-16"
                src="images/img_ellipse37_6.png"
                alt="ellipseThirtySeven"
              />
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratRomanSemiBold16"
                >
                  {props?.gamepad}
                </Text>
                <div className="flex flex-row gap-8 items-center justify-start w-auto">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-[12.05px] text-blue_gray-300 text-right tracking-[-0.12px] w-auto"
                      size="txtMontserratRomanMedium1205"
                    >
                      {props?.endingin7}
                    </Text>
                    <Text
                      className="text-[15px] text-right text-white-A700 w-auto"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.p5d52m20s7}
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="text-[15px] text-right text-white-A700 w-auto"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.language7}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 flex flex-col h-[121px] md:h-auto items-start justify-start px-4 py-6 rounded-[12px] w-[283px]">
            <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
              <Img
                className="h-16 md:h-auto rounded-[50%] w-16"
                src="images/img_ellipse37.png"
                alt="ellipseThirtySeven"
              />
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratRomanSemiBold16"
                >
                  {props?.diamondclub1}
                </Text>
                <div className="flex flex-row gap-8 items-center justify-start w-auto">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-[12.05px] text-blue_gray-300 text-right tracking-[-0.12px] w-auto"
                      size="txtMontserratRomanMedium1205"
                    >
                      {props?.endingin8}
                    </Text>
                    <Text
                      className="text-[15px] text-right text-white-A700 w-auto"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.p5d52m20s8}
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="text-[15px] text-right text-white-A700 w-auto"
                      size="txtMontserratRomanMedium15"
                    >
                      {props?.language8}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

LandingPageColumntokerr.defaultProps = {
  diamondclub: "Diamond Club",
  endingin: "Ending in",
  p5d52m20s: "5d-52m-20s",
  language: " 50",
  memenation: "Memenation",
  endingin1: "Ending in",
  p5d52m20s1: "5d-52m-20s",
  language1: " 50",
  tokerr: "Tokerr",
  endingin2: "Ending in",
  p5d52m20s2: "5d-52m-20s",
  language2: " 50",
  apekindom: "Ape Kindom",
  endingin3: "Ending in",
  p5d52m20s3: "5d-52m-20s",
  language3: " 50",
  tradewix: "TradeWix",
  endingin4: "Ending in",
  p5d52m20s4: "5d-52m-20s",
  language4: " 50",
  goblininu: "Goblin Inu",
  endingin5: "Ending in",
  p5d52m20s5: "5d-52m-20s",
  language5: " 50",
  collieinu: "Collie Inu",
  endingin6: "Ending in",
  p5d52m20s6: "5d-52m-20s",
  language6: " 50",
  gamepad: "Gamepad",
  endingin7: "Ending in",
  p5d52m20s7: "5d-52m-20s",
  language7: " 50",
  diamondclub1: "Diamond Club",
  endingin8: "Ending in",
  p5d52m20s8: "5d-52m-20s",
  language8: " 50",
};

export default LandingPageColumntokerr;
