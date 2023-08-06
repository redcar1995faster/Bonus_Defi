import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import LandingPageCard from "components/LandingPageCard";
import LandingPageCard1 from "components/LandingPageCard1";
import LandingPageCard2 from "components/LandingPageCard2";
import LandingPageCard3 from "components/LandingPageCard3";
import LandingPageCard4 from "components/LandingPageCard4";
import LandingPageCard5 from "components/LandingPageCard5";
import LandingPageCoin from "components/LandingPageCoin";
import LandingPageColumn from "components/LandingPageColumn";
import LandingPageColumnEight from "components/LandingPageColumnEight";
import LandingPageColumntokerr from "components/LandingPageColumntokerr";

const LandingPageAfterconnectedPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 h-[6688px] mx-auto relative w-full">
        <div className="absolute font-montserrat md:h-[5758px] h-[6688px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="md:h-[5758px] h-[6688px] m-auto w-full">
            <div className="absolute md:h-[5758px] h-[6688px] inset-[0] justify-center m-auto w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[2852px] items-center justify-start w-full">
                  <div className="h-[762px] relative w-full">
                    <Img
                      className="h-[762px] m-auto object-cover w-full"
                      src="images/img_blockchaintech.png"
                      alt="blockchaintech"
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[101px] inset-x-[0] items-center justify-start mx-auto top-[2%] w-[87%]">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[41px] items-center justify-between w-[45%] md:w-full">
                          <Img
                            className="h-[62px] md:h-auto object-cover"
                            src="images/img_image1356.png"
                            alt="image1356"
                          />
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly">
                            <div className="flex flex-col h-11 md:h-auto items-start justify-start w-[95px]">
                              <Button className="bg-transparent cursor-pointer font-semibold min-w-[95px] py-[13px] text-blue_gray-300 text-center text-sm">
                                Prediction
                              </Button>
                            </div>
                            <div className="flex flex-col h-11 md:h-auto items-start justify-start w-[141px]">
                              <Button className="bg-transparent cursor-pointer font-semibold min-w-[141px] py-[13px] text-blue_gray-300 text-center text-sm">
                                Trending Project
                              </Button>
                            </div>
                            <div className="flex flex-col h-11 md:h-auto items-start justify-start w-[83px]">
                              <Button className="bg-transparent cursor-pointer font-semibold min-w-[83px] py-[13px] text-blue_gray-300 text-center text-sm">
                                Features
                              </Button>
                            </div>
                            <div className="flex flex-col h-11 md:h-auto items-start justify-start w-[118px]">
                              <Button className="bg-transparent cursor-pointer font-semibold min-w-[118px] py-[13px] text-blue_gray-300 text-center text-sm">
                                How It Works
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-1 sm:flex-col flex-row font-syne gap-4 items-center justify-between w-[43%] md:w-full">
                          <Img
                            className="h-6 w-16"
                            src="images/img_frame67863.svg"
                            alt="frame67863"
                          />
                          <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full">
                            <LandingPageColumn className="flex flex-col items-center justify-start w-[56%] sm:w-full" />
                            <Button className="bg-green-A400 cursor-pointer font-bold min-w-[191px] py-3 rounded-[20px] text-black-900 text-center text-sm tracking-[0.49px]">
                              Connect Waller
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient2  flex md:flex-col flex-row md:gap-14 items-center justify-between p-10 sm:px-5 rounded-[12px] w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-center justify-start md:mt-0 my-[9px] w-auto sm:w-full">
                          <Img
                            className="h-[105px] md:h-auto rounded-[50%] w-[105px]"
                            src="images/img_ellipse43.png"
                            alt="ellipseFortyThree"
                          />
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-black-900_02 w-auto"
                            size="txtMontserratRomanSemiBold28"
                          >
                            Connected with 05sfdsf_fgfs
                          </Text>
                        </div>
                        <div className="bg-black-900_03 flex md:flex-1 flex-row sm:gap-10 items-center justify-between md:mt-0 my-[17px] p-[23px] sm:px-5 rounded-[12px] w-[49%] md:w-full">
                          <div className="flex flex-col font-montserrat gap-1 items-start justify-start ml-[13px] w-auto">
                            <Text
                              className="text-[15px] text-right text-white-A700"
                              size="txtMontserratRomanMedium15"
                            >
                              $0
                            </Text>
                            <Text
                              className="text-[12.05px] text-blue_gray-300 text-right tracking-[-0.12px] w-auto"
                              size="txtMontserratRomanMedium1205"
                            >
                              to collect
                            </Text>
                          </div>
                          <Button className="cursor-pointer font-bold font-syne min-w-[147px] mr-[21px] outline outline-[0.5px] outline-green-A400 py-3 rounded-[20px] text-center text-green-A400 text-sm tracking-[0.49px]">
                            Buy Token
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-[291px] items-start justify-start mb-[179px] w-1/4 md:w-full">
                      <Img
                        className="h-[1283px] md:h-auto object-cover"
                        src="images/img_vector55.png"
                        alt="vectorFiftySix"
                      />
                      <Img
                        className="h-[1320px] md:h-auto object-cover"
                        src="images/img_vector57.png"
                        alt="vectorFiftyEight"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-[322px] items-end justify-start md:mt-0 mt-[697px] w-[32%] md:w-full">
                      <Img
                        className="h-[1369px] md:h-auto object-cover"
                        src="images/img_vector57.png"
                        alt="vectorFiftySeven"
                      />
                      <Img
                        className="h-[685px] md:h-auto object-cover"
                        src="images/img_vector59.png"
                        alt="vectorFiftyNine"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[1386px] inset-y-[0] my-auto object-cover right-[0]"
                src="images/img_vector55.png"
                alt="vectorFiftyFive"
              />
            </div>
            <Img
              className="absolute h-[1164px] object-cover right-[0] top-[22%]"
              src="images/img_vector6.png"
              alt="vectorSix"
            />
            <Img
              className="absolute h-[1386px] left-[0] object-cover top-[10%]"
              src="images/img_vector54.png"
              alt="vectorTwo"
            />
            <Img
              className="absolute h-[1386px] left-[0] object-cover top-[33%]"
              src="images/img_vector54.png"
              alt="vectorFiftyFour"
            />
            <Img
              className="absolute h-[1386px] object-cover right-[0] top-[21%]"
              src="images/img_vector55.png"
              alt="vectorSeven"
            />
          </div>
          <Img
            className="absolute h-[597px] object-cover right-[0] top-[9%]"
            src="images/img_vector5.png"
            alt="vectorFive"
          />
        </div>
        <Text
          className="absolute bg-clip-text bg-gradient  inset-x-[0] mx-auto text-5xl sm:text-[38px] md:text-[44px] text-center text-transparent top-[23%] w-max"
          size="txtSyneBold48"
        >
          Trending Projects
        </Text>
        <div className="absolute flex flex-col font-syne gap-[30px] inset-x-[0] items-center justify-start mx-auto top-[12%] w-full">
          <Text
            className="bg-clip-text bg-gradient  text-5xl sm:text-[38px] md:text-[44px] text-center text-transparent"
            size="txtSyneBold48"
          >
            Upcoming Predictions
          </Text>
          <LandingPageColumnEight className="flex flex-col font-montserrat items-center justify-start w-full" />
        </div>
        <div className="absolute flex flex-col font-montserrat inset-x-[0] items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[97px] top-1/4 w-full">
          <List
            className="flex sm:flex-col flex-row gap-6 justify-start overflow-auto w-auto"
            orientation="horizontal"
          >
            <LandingPageCard className="bg-light_blue-A700 pl-[30.39px] md:pr-10 pr-[40.52px] sm:px-5 py-[40.52px] relative rounded w-[398px] sm:w-full" />
            <LandingPageCard1 className="bg-indigo-A200_01 pl-[30.39px] md:pr-10 pr-[40.52px] sm:px-5 py-[40.52px] relative rounded w-[398px] sm:w-full" />
            <LandingPageCard2 className="bg-deep_purple-A200 pl-[30.39px] md:pr-10 pr-[40.52px] sm:px-5 py-[40.52px] relative rounded w-[398px] sm:w-full" />
            <LandingPageCard3 className="bg-light_green-A700 pl-[30.39px] md:pr-10 pr-[40.52px] sm:px-5 py-[40.52px] relative rounded w-[398px] sm:w-full" />
            <LandingPageCard4 className="bg-amber-600 pl-[30.39px] md:pr-10 pr-[40.52px] sm:px-5 py-[40.52px] relative rounded w-[398px] sm:w-full" />
            <LandingPageCard5 className="bg-red-500 pl-[30.39px] md:pr-10 pr-[40.52px] sm:px-5 py-[40.52px] relative rounded w-[398px] sm:w-full" />
          </List>
        </div>
        <div className="absolute flex flex-col font-syne h-max inset-[0] items-center justify-center m-auto max-w-[1164px] md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-auto md:w-full">
            <div className="flex flex-col gap-2 items-center justify-start w-auto sm:w-full">
              <Text
                className="bg-clip-text bg-gradient  capitalize text-5xl sm:text-[38px] md:text-[44px] text-transparent tracking-[-1.44px] w-auto"
                size="txtSyneBold48"
              >
                Our Key Features
              </Text>
              <Text
                className="text-base text-blue_gray-200_01 text-center w-auto"
                size="txtMontserratRomanRegular16Bluegray20001"
              >
                Unleashing Limitless Potential in the Dynamic DeFi Universe
              </Text>
            </div>
            <div className="flex flex-col md:gap-10 gap-24 items-start justify-start w-auto md:w-full">
              <div className="h-[460px] md:h-[943px] relative w-full">
                <Img
                  className="h-[419px] ml-auto mr-0.5 my-auto object-cover w-2/5"
                  src="images/img_01tradenft2.png"
                  alt="01tradenftTwo"
                />
                <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[222px] h-full inset-[0] items-center justify-between m-auto w-auto">
                  <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col font-syne items-start justify-start w-auto sm:w-full">
                        <Text
                          className="capitalize leading-[44.00px] max-w-[480px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                          size="txtSyneSemiBold36"
                        >
                          Stay Ahead of the Curve with Unparalleled Prediction
                          Accuracy
                        </Text>
                      </div>
                      <Text
                        className="leading-[25.00px] text-base text-blue_gray-200_01"
                        size="txtInterRegular16"
                      >
                        <>
                          At Bonus DeFi, we pride ourselves on delivering
                          accurate predictions that give you a competitive edge.
                          Our cutting-edge algorithms and data-driven insights
                          enable you to make informed decisions and maximize
                          your returns.
                          <br />
                          <br />
                          Trust in our robust prediction engine to guide you
                          towards profitable opportunities in the dynamic world
                          of decentralized finance.
                        </>
                      </Text>
                    </div>
                    <Button
                      className="bg-green-A400 cursor-pointer flex items-center justify-center min-w-[178px] px-8 py-4 rounded-[24px]"
                      rightIcon={
                        <Img
                          className="ml-[9px] my-px"
                          src="images/img_frame_3.svg"
                          alt="Frame 3"
                        />
                      }
                    >
                      <div className="font-bold leading-[normal] sm:px-5 text-black-900 text-left text-sm">
                        Get started{" "}
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col h-[460px] sm:h-auto items-center justify-start p-5 w-[460px] sm:w-full">
                    <Img
                      className="h-[386px] md:h-auto my-4 object-cover w-full"
                      src="images/img_01tradenft2_386x420.png"
                      alt="01tradenftTwo_One"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 gap-[222px] items-center justify-between w-auto md:w-full">
                <div className="h-[460px] relative w-[460px] sm:w-full">
                  <Img
                    className="h-[313px] m-auto object-cover w-[77%]"
                    src="images/img_01tradenft1.png"
                    alt="01tradenftOne"
                  />
                  <div className="absolute flex flex-col sm:h-auto h-full inset-[0] items-center justify-center m-auto p-5 w-[460px]">
                    <Img
                      className="h-[374px] md:h-auto my-[23px] object-cover w-full"
                      src="images/img_01tradenft1_374x420.png"
                      alt="01tradenftOne_One"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col font-syne items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize leading-[44.00px] max-w-[480px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                        size="txtSyneSemiBold36"
                      >
                        Explore Limitless Possibilities with a Diverse Range of
                        Projects
                      </Text>
                    </div>
                    <Text
                      className="leading-[25.00px] text-base text-blue_gray-200_01"
                      size="txtInterRegular16"
                    >
                      <>
                        Bonus DeFi embraces project diversity like no other
                        platform. From memes to unique ventures and everything
                        in between, we support projects of all types.
                        <br />
                        <br />
                        Discover a vibrant ecosystem where innovation thrives,
                        and be part of a community that celebrates creativity
                        and uniqueness. With Bonus DeFi, your project can find
                        its perfect niche and unleash its full potential.
                      </>
                    </Text>
                  </div>
                  <Button
                    className="bg-green-A400 cursor-pointer flex items-center justify-center min-w-[178px] px-8 py-4 rounded-[24px]"
                    rightIcon={
                      <Img
                        className="ml-[9px] my-px"
                        src="images/img_frame_3.svg"
                        alt="Frame 3"
                      />
                    }
                  >
                    <div className="font-bold leading-[normal] sm:px-5 text-black-900 text-left text-sm">
                      Get started{" "}
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 gap-[222px] items-center justify-between w-auto md:w-full">
                <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col font-syne items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize leading-[44.00px] max-w-[480px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                        size="txtSyneSemiBold36"
                      >
                        Ignite Organic Growth with Authentic Community
                        Engagement
                      </Text>
                    </div>
                    <Text
                      className="leading-[25.00px] text-base text-blue_gray-200_01"
                      size="txtInterRegular16"
                    >
                      <>
                        Say goodbye to forced and ineffective marketing
                        campaigns. Bonus DeFi fosters organic marketing
                        strategies that allow your project to shine
                        authentically. Our platform encourages genuine community
                        engagement, attracting passionate supporters who will
                        organically spread the word about your project.
                        <br />
                        <br />
                        Join us in cultivating an ecosystem where projects
                        flourish through genuine connections and word-of-mouth
                        promotion.
                      </>
                    </Text>
                  </div>
                  <Button
                    className="bg-green-A400 cursor-pointer flex items-center justify-center min-w-[178px] px-8 py-4 rounded-[24px]"
                    rightIcon={
                      <Img
                        className="ml-[9px] my-px"
                        src="images/img_frame_3.svg"
                        alt="Frame 3"
                      />
                    }
                  >
                    <div className="font-bold leading-[normal] sm:px-5 text-black-900 text-left text-sm">
                      Get started{" "}
                    </div>
                  </Button>
                </div>
                <div className="h-[460px] relative w-[460px] sm:w-full">
                  <Img
                    className="h-[336px] m-auto object-cover w-[81%]"
                    src="images/img_01tradenft2_336x370.png"
                    alt="01tradenftTwo_Two"
                  />
                  <div className="absolute flex flex-col sm:h-auto h-full inset-[0] items-center justify-center m-auto p-5 w-[460px]">
                    <Img
                      className="h-[382px] md:h-auto my-[19px] object-cover w-full"
                      src="images/img_01tradenft1_382x420.png"
                      alt="01tradenftOne_Two"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-start mt-[175px] w-auto sm:w-full">
            <Text
              className="bg-clip-text bg-gradient  capitalize text-5xl sm:text-[38px] md:text-[44px] text-transparent tracking-[-1.44px] w-auto"
              size="txtSyneBold48"
            >
              How It Works
            </Text>
            <Text
              className="text-base text-blue_gray-200_01 text-center w-auto"
              size="txtMontserratRomanRegular16Bluegray20001"
            >
              Empowering Users to Predict, Engage, and Earn in a Few Simple
              Steps
            </Text>
          </div>
          <Img
            className="h-[664px] sm:h-auto mt-16 object-cover rounded-[15px] w-[90%] md:w-full"
            src="images/img_frame43.png"
            alt="frameFortyThree"
          />
        </div>
        <div className="absolute bg-gradient1  bottom-[8%] flex flex-col inset-x-[0] items-center justify-center max-w-[1287px] mx-auto md:px-5 px-[287px] py-16 rounded-[24px] w-full">
          <div className="flex flex-col items-center justify-center w-auto md:w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Text
                className="leading-[52.00px] max-w-[1001px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center tracking-[-0.40px]"
                size="txtSyneBold48Black900"
              >
                Stay Updated, Engage, and Get Support in our Official Telegram
                Group
              </Text>
              <Text
                className="leading-[32.00px] max-w-[579px] md:max-w-full text-black-900 text-center text-xl"
                size="txtInterMedium20"
              >
                Join the Bonus DeFi Telegram Community and Connect with Fellow
                Enthusiasts
              </Text>
              <Button className="bg-white-A700 cursor-pointer font-bold font-syne leading-[normal] min-w-[173px] py-4 rounded-[24px] text-black-900 text-center text-sm">
                Join Telegram
              </Button>
            </div>
          </div>
        </div>
        <Footer className="absolute bg-gray-900_03 bottom-[0] flex font-montserrat inset-x-[0] items-center justify-center mx-auto md:px-5 px-[108px] py-8 w-full" />
        <div className="absolute flex flex-col font-syne gap-8 items-start justify-start md:px-5 right-[0] top-[7%] w-auto">
          <Text
            className="bg-clip-text bg-gradient  text-2xl md:text-[22px] text-center text-transparent sm:text-xl w-auto"
            size="txtSyneBold24"
          >
            Live Predictions
          </Text>
          <LandingPageColumntokerr className="flex flex-col font-montserrat items-center justify-start w-full" />
        </div>
        <LandingPageCoin className="absolute flex flex-col font-inter inset-x-[0] items-center justify-start mx-auto top-[21%] w-full" />
        <Img
          className="absolute bottom-[19%] h-[448px] object-cover right-[5%] w-[41%]"
          src="images/img_lovepikcom402.png"
          alt="lovepikcom402"
        />
        <div className="absolute bottom-[16%] flex flex-col font-syne gap-[38px] items-start justify-start md:px-5 right-[5%] w-auto">
          <div className="flex md:flex-col flex-row gap-[27px] items-start justify-between w-full">
            <div className="flex sm:flex-1 flex-col md:gap-10 gap-16 items-start justify-start md:mt-0 mt-[66px] w-auto sm:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <Text
                  className="capitalize max-w-[556px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.26px]"
                  size="txtSyneBold36"
                >
                  <span className="text-white-A700 font-syne text-left font-semibold">
                    The Ultimate Decentralized{" "}
                  </span>
                  <span className="text-green-A400 font-syne text-left font-semibold">
                    Finance
                  </span>
                  <span className="text-white-A700 font-syne text-left font-semibold">
                    {" "}
                    Platform
                  </span>
                </Text>
                <Text
                  className="capitalize leading-[25.00px] max-w-[556px] md:max-w-full text-base text-blue_gray-200_01"
                  size="txtMontserratRomanRegular16Bluegray20001"
                >
                  <>
                    Revolutionize your project&#39;s success in the DeFi
                    ecosystem and captivate your community with Bonus DeFi&#39;s
                    groundbreaking features and organic marketing strategies.
                  </>
                </Text>
              </div>
              <div className="flex flex-row gap-8 items-center justify-center w-auto">
                <Button
                  className="bg-green-A400 cursor-pointer flex items-center justify-center min-w-[169px] px-8 py-4 rounded-[24px]"
                  rightIcon={
                    <Img
                      className="mt-px mb-0.5 ml-2"
                      src="images/img_frame_3.svg"
                      alt="Frame 3"
                    />
                  }
                >
                  <div className="font-bold leading-[normal] sm:px-5 text-black-900 text-left text-sm">
                    Buy Token
                  </div>
                </Button>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-green-A400 text-sm w-auto"
                    size="txtSyneBold14"
                  >
                    Learn
                  </Text>
                  <Img
                    className="h-3.5 w-[18px]"
                    src="images/img_frame3_green_a400.svg"
                    alt="frameThree"
                  />
                </div>
              </div>
            </div>
            <Img
              className="h-[448px] md:h-auto object-cover"
              src="images/img_lovepikcom402_448x583.png"
              alt="lovepikcom402_One"
            />
          </div>
          <List
            className="flex flex-col gap-14 items-start w-auto"
            orientation="vertical"
          >
            <div className="flex sm:flex-col flex-row md:gap-10 gap-[127px] items-center justify-between my-0 w-auto md:w-full">
              <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                <Text
                  className="capitalize text-base text-blue_gray-200_01 w-auto"
                  size="txtMontserratRomanMedium16"
                >
                  Circulating Supply
                </Text>
                <Text
                  className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.98px] w-auto"
                  size="txtSyneSemiBold28"
                >
                  205,682,922
                </Text>
              </div>
              <Line className="bg-blue_gray-800 h-[53px] sm:h-px sm:w-full w-px" />
              <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                <Text
                  className="capitalize text-base text-blue_gray-200_01 w-auto"
                  size="txtMontserratRomanMedium16"
                >
                  Total supply
                </Text>
                <Text
                  className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.98px] w-auto"
                  size="txtSyneSemiBold28"
                >
                  387,756,414
                </Text>
              </div>
              <Line className="bg-blue_gray-800 h-[53px] sm:h-px sm:w-full w-px" />
              <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                <Text
                  className="capitalize text-base text-blue_gray-200_01 w-auto"
                  size="txtMontserratRomanMedium16"
                >
                  Max Supply
                </Text>
                <Text
                  className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.98px] w-auto"
                  size="txtSyneSemiBold28"
                >
                  750,000,000
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[127px] items-center justify-between my-0 w-auto md:w-full">
              <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                <Text
                  className="capitalize text-base text-blue_gray-200_01 w-auto"
                  size="txtMontserratRomanMedium16"
                >
                  Market cap
                </Text>
                <Text
                  className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.98px] w-auto"
                  size="txtSyneSemiBold28"
                >
                  $290 million
                </Text>
              </div>
              <Line className="bg-blue_gray-800 h-[53px] sm:h-px sm:w-full w-px" />
              <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                <Text
                  className="capitalize text-base text-blue_gray-200_01 w-auto"
                  size="txtMontserratRomanMedium16"
                >
                  Burned to date
                </Text>
                <Text
                  className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.98px] w-auto"
                  size="txtSyneSemiBold28"
                >
                  868,132,226
                </Text>
              </div>
              <Line className="bg-blue_gray-800 h-[53px] sm:h-px sm:w-full w-px" />
              <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                <Text
                  className="capitalize text-base text-blue_gray-200_01 w-auto"
                  size="txtMontserratRomanMedium16"
                >
                  Current emissions
                </Text>
                <Text
                  className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.98px] w-auto"
                  size="txtSyneSemiBold28"
                >
                  4.55/block
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default LandingPageAfterconnectedPage;
