import React from "react";

import { Img, Text } from "components";

type LandingPageColumnProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "bnbsmartchain"
> &
  Partial<{ bnbsmartchain: string }>;

const LandingPageColumn: React.FC<LandingPageColumnProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-900_01 flex flex-col h-[41px] md:h-auto items-center justify-start sm:px-5 px-6 py-4 rounded-[20px] w-auto md:w-full">
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
              <Img
                className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                src="images/img_ellipse36.png"
                alt="ellipseThirtySix"
              />
              <Text
                className="text-center text-green-A400 text-sm tracking-[0.49px] w-auto"
                size="txtSyneBold14"
              >
                {props?.bnbsmartchain}
              </Text>
            </div>
            <Img
              className="h-[7px] w-[15px]"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
            />
          </div>
        </div>
      </div>
    </>
  );
};

LandingPageColumn.defaultProps = { bnbsmartchain: "BNB Smart Chain" };

export default LandingPageColumn;
