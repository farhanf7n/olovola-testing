import LanguageSelector from "../components/Language-selector";
import { Trans, useTranslation } from "react-i18next";

import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

import {
  heroTruck,
  pakIcons,
  b2bMain,
  liveTracking,
  SecureFast,
  OwnDashboard,
  BestRates,
  Schedule,
  Transparency,
  FullSupport,
  DiscountsCosts,
  LessBureaucracy,
  fmcgIcon,
  SteelIcon,
  AgricultureIcon,
  ConstructionIcon,
  CoalIcon,
  OilIcon,
  FurnitureIcon,
  PaperIcon,
  MediumLTV,
  trailerTruck,
  loaderRickshaw,
  appScreenshot,
  GooglePlayButton,
} from "../assets/assets";

function HomePage() {
  const { t, i18n } = useTranslation();
  const { span1, span2, subParagraph } = t("BannerHeadings");
  const {
    para1,
    para2,
    styledSpan,
    b2bMainHeading,
    subPara,
    lTracking,
    yourOwnDashboard,
    bestRates,
    secureFast,
  } = t("B2b");
  const {
    bPara,
    bStyledSpan,
    bSubParagraph,
    bMainHeading,
    bLTracking,
    bLSubPara,
    bFS,
    bFSsub,
    BFSupportHeading,
    bSupport,
    bDicountHeading,
    bDiscountPara,
    bLessBur,
    bLessBurPara,
    bFullPara,
    bFullTransHeading,
  } = t("Benefits");

  const { TWMPara, TWMStyledSpan, TWMMainHeading } = t("TWM");
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-secondary px-5">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col-reverse gap-4 lg:flex-row items-center justify-center py-20">
            <div className="w-full lg:w-1/2">
              <p className="flex flex-col text-[36px] font-ManropeEB sm:text-[80px] text-primary  leading-[44px] sm:leading-[73px] pb-4 tracking-tight">
                <span>{span1}</span>
                <span>{span2}</span>
              </p>
              <p className="text-lightGrey text-xl leading-[28px] font-ManropeRegular">
                <span>{subParagraph}</span>
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={heroTruck}
                className="w-max-[528px] h-max-[433px]"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative pb-8 flex overflow-x-hidden">
          <div className="pb-12 animate-marquee whitespace-nowrap">
            <img src={pakIcons} alt="" />
          </div>

          <div className="absolute top-0 pb-12 animate-marquee2 whitespace-nowrap">
            <img src={pakIcons} alt="" />
          </div>
        </div>
      </div>

      {/* B2B Section */}
      <div className="max-w-[1280px] mx-auto py-[71px]">
        {/* Heading & Paragraph */}
        <div>
          {i18n.language === "en" ? (
            // div1: Displayed when the language is English
            <div className="flex flex-col text-3xl font-ManropeSB items-center text-center">
              <p>
                {para1}{" "}
                <span className="relative font-ClashDisplayMedium before:block before:absolute before:bg-primary before:h-[13px] before:w-full before:bottom-[4px] before:right-0 before:z-[-1]">
                  {styledSpan}
                </span>
              </p>
              <p>{para2}</p>
            </div>
          ) : (
            // div2: Displayed when the language is not English (e.g., Urdu)
            <div>
              <p className="flex flex-col text-3xl font-ManropeSB items-center text-center">
                {b2bMainHeading}
                <div className="relative font-ClashDisplayMedium before:block before:absolute before:bg-primary before:h-[22px] before:w-[150px] before:bottom-[-4px] before:right-0 before:z-[-1]"></div>
              </p>
            </div>
          )}
          <p className="pt-4 text-center px-[16px] text-lg flex flex-col font-ManropeRegular">
            <span>{subPara}</span>
          </p>
        </div>
        {/* B2B image & Right side icons */}
        <div className="flex flex-col md:flex-row items-center justify-center pt-[60px]">
          <div className="w-full sm:w-1/2 flex justify-center">
            <img
              src={b2bMain}
              className="w-max-[524px] h-max-[370px] "
              alt=""
            />
          </div>
          <div className="w-full sm:w-1/2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[20px]">
            <div className="flex flex-col gap-[24px] p-[30px] items-center bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={liveTracking} className="w-[56px] h-[56px]" alt="" />
              <p className="font-ManropeSB text-sm text-center">{lTracking}</p>
            </div>
            <div className="flex flex-col gap-[24px] p-[30px] items-center bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={SecureFast} className="w-[56px] h-[56px]" alt="" />
              <p className="font-ManropeSB text-sm text-center">{secureFast}</p>
            </div>
            <div className="flex flex-col gap-[24px] p-[30px] items-center bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={OwnDashboard} className="w-[56px] h-[56px]" alt="" />
              <p className="font-ManropeSB text-sm text-center">
                {yourOwnDashboard}
              </p>
            </div>{" "}
            <div className="flex flex-col gap-[24px] p-[30px] items-center bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={BestRates} className="w-[56px] h-[56px]" alt="" />
              <p className="font-ManropeSB text-sm text-center">{bestRates}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-[1280px] mx-auto py-[71px]">
        {/* Heading & Paragraph */}
        <div>
          {i18n.language === "en" ? (
            // div1: Displayed when the language is English
            <div className="flex flex-col text-3xl font-ManropeSB items-center text-center">
              <p>
                {bPara}{" "}
                <span className="relative font-ClashDisplayMedium before:block before:absolute before:bg-primary before:h-[13px] before:w-full before:bottom-[4px] before:right-0 before:z-[-1]">
                  {bStyledSpan}
                </span>
              </p>
            </div>
          ) : (
            // div2: Displayed when the language is not English (e.g., Urdu)
            <div>
              <p className="flex flex-col text-3xl font-ManropeSB items-center text-center">
                {bMainHeading}
                <div className="relative font-ClashDisplayMedium before:block before:absolute before:bg-primary before:h-[22px] before:w-[50px] before:bottom-[-4px] before:right-[10px] before:z-[-1]"></div>
              </p>
            </div>
          )}
          <p className="pt-4 text-center px-[16px] text-lg flex flex-col font-ManropeRegular">
            <span>{bSubParagraph}</span>
          </p>
        </div>

        {/* B2B image & Right side icons */}
        <div className="flex items-center justify-center pt-[60px]">
          <div className="max-w-[1280px] flex flex-wrap justify-center gap-[20px]">
            <div className="w-[386px] h-[245px] flex flex-col gap-[24px] p-[30px] items-left bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={liveTracking} className="w-[56px] h-[56px]" alt="" />
              <div className="flex flex-col gap-[6px]">
                <p className="font-ManropeSB text-lg">{bLTracking}</p>
                <p className="font-ManropeRegular text-[16px]">{bLSubPara}</p>
              </div>
            </div>
            <div className="w-[386px] h-[245px] flex flex-col gap-[24px] p-[30px] items-left bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={Schedule} className="w-[56px] h-[56px]" alt="" />
              <div className="flex flex-col gap-[6px]">
                <p className="font-ManropeSB text-lg">{bFS}</p>
                <p className="font-ManropeRegular text-[16px]">{bFSsub}</p>
              </div>
            </div>
            <div className="w-[386px] h-[245px] flex flex-col gap-[24px] p-[30px] items-left bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={Transparency} className="w-[56px] h-[56px]" alt="" />
              <div className="flex flex-col gap-[6px]">
                <p className="font-ManropeSB text-lg">{bFullTransHeading}</p>
                <p className="font-ManropeRegular text-[16px]">{bFullPara}</p>
              </div>
            </div>
            <div className="w-[386px] h-[245px] flex flex-col gap-[24px] p-[30px] items-left bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={FullSupport} className="w-[56px] h-[56px]" alt="" />
              <div className="flex flex-col gap-[6px]">
                <p className="font-ManropeSB text-lg">{BFSupportHeading}</p>
                <p className="font-ManropeRegular text-[16px]">{bSupport}</p>
              </div>
            </div>
            <div className="w-[386px] h-[245px] flex flex-col gap-[24px] p-[30px] items-left bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={DiscountsCosts} className="w-[56px] h-[56px]" alt="" />
              <div className="flex flex-col gap-[6px]">
                <p className="font-ManropeSB text-lg">{bDicountHeading}</p>
                <p className="font-ManropeRegular text-[16px]">
                  {bDiscountPara}
                </p>
              </div>
            </div>
            <div className="w-[386px] h-[245px] flex flex-col gap-[24px] p-[30px] items-left bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={LessBureaucracy} className="w-[56px] h-[56px]" alt="" />
              <div className="flex flex-col gap-[6px]">
                <p className="font-ManropeSB text-lg">{bLessBur}</p>
                <p className="font-ManropeRegular text-[16px]">
                  {bLessBurPara}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Things We Move Section */}
      <div className="max-w-[1280px] mx-auto py-[71px]">
        {/* Heading & Paragraph */}
        <div>
          {/* TEST */}
          {i18n.language === "en" ? (
            // div1: Displayed when the language is English
            <div className="flex flex-col text-3xl font-ManropeSB items-center text-center">
              <p>
                {TWMPara}{" "}
                <span className="relative font-ClashDisplayMedium before:block before:absolute before:bg-primary before:h-[13px] before:w-full before:bottom-[4px] before:right-0 before:z-[-1]">
                  {TWMStyledSpan}
                </span>
              </p>
            </div>
          ) : (
            // div2: Displayed when the language is not English (e.g., Urdu)
            <div>
              <p className="flex flex-col text-3xl font-ManropeSB items-center text-center">
                {TWMMainHeading}
                <div className="relative font-ClashDisplayMedium before:block before:absolute before:bg-primary before:h-[22px] before:w-[54px] before:bottom-[-4px] before:right-[-4px] before:z-[-1]"></div>
              </p>
            </div>
          )}
          {/* TEST */}
          <p className="pt-4 px-[16px] text-center flex flex-col font-ManropeRegular text-[16px]">
            <span>
              We cover different industry sectors, from food and beverage,
              chemical, retail, durable goods and more.
            </span>
            <span>Check the full list.</span>
          </p>
        </div>
        <div className="flex items-center justify-center pt-[60px]">
          <div className="max-w-[1280px] flex flex-wrap gap-[20px]">
            <div className="flex flex-wrap justify-center gap-[6px]">
              <div className="w-[154px] h-[169px] flex flex-col gap-[8px] p-[30px] items-center bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
                <img src={fmcgIcon} className="w-[64px] h-[64px]" alt="" />
                <p className="font-ManropeSB text-sm text-center">FMCG</p>
              </div>

              <div className="w-[154px] h-[169px] flex flex-col gap-[8px] p-[30px] items-center bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
                <img
                  src={AgricultureIcon}
                  className="w-[64px] h-[64px]"
                  alt=""
                />
                <p className="font-ManropeSB text-sm text-center">
                  Agriculture
                </p>
              </div>

              <div className="w-[154px] h-[169px] flex flex-col gap-[8px] p-[30px] items-center bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
                <img src={SteelIcon} className="w-[64px] h-[64px]" alt="" />
                <p className="font-ManropeSB text-sm text-center">Steel</p>
              </div>

              <div className="w-[154px] h-[169px] flex flex-col gap-[8px] p-[30px] items-center bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
                <img
                  src={ConstructionIcon}
                  className="w-[64px] h-[64px]"
                  alt=""
                />
                <p className="font-ManropeSB text-sm text-center">
                  Construction
                </p>
              </div>

              <div className="w-[154px] h-[169px] flex flex-col gap-[8px] p-[30px] items-center bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
                <img src={CoalIcon} className="w-[64px] h-[64px]" alt="" />
                <p className="font-ManropeSB text-sm text-center">Coal</p>
              </div>
              <div className="w-[154px] h-[169px] flex flex-col gap-[8px] p-[30px] items-center bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
                <img src={OilIcon} className="w-[64px] h-[64px]" alt="" />
                <p className="font-ManropeSB text-sm text-center">Oil</p>
              </div>

              <div className="w-[154px] h-[169px] flex flex-col gap-[8px] p-[30px] items-center bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
                <img src={FurnitureIcon} className="w-[64px] h-[64px]" alt="" />
                <p className="font-ManropeSB text-sm text-center">Furniture</p>
              </div>

              <div className="w-[154px] h-[169px] flex flex-col gap-[8px] p-[30px] items-center bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
                <img src={PaperIcon} className="w-[64px] h-[64px]" alt="" />
                <p className="font-ManropeSB text-sm text-center">Paper</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Fleet Section */}
      <div className="max-w-[1280px] mx-auto py-[71px]">
        {/* Heading & Paragraph */}
        <div>
          <div className="flex flex-col px-[16px] text-3xl font-ManropeSB items-center">
            <p className="text-center ">
              Vehicle{" "}
              <span className="relative font-ClashDisplayMedium before:block before:absolute before:bg-primary before:h-[13px] before:w-full before:bottom-[4px] before:right-0 before:z-[-1]">
                Fleet
              </span>
            </p>
          </div>
          <p className="pt-4 px-[16px] text-center flex flex-col font-ManropeRegular text-[16px]">
            <span>
              Providing wide range of transport services and means of transport.
            </span>
          </p>
        </div>
        <div className="flex items-center pt-[60px]">
          <div className="max-w-[1280px] flex flex-wrap justify-center gap-[20px]">
            <div className="flex flex-wrap justify-center gap-[20px]">
              <div className="w-[386px] h-[408px] flex flex-col justify-center items-center gap-[24px] p-[30px] items-left bg-white border-solid border-1 border-forBorder rounded-[16px]">
                <img src={MediumLTV} className="w-[232px] h-[157px]" alt="" />
                <div className="flex flex-col gap-[6px]">
                  <p className="font-ManropeSB text-lg">Medium Range LTV</p>
                  <p className="flex gap-[8px]">
                    <span className="font-ManropeBold text-[16px]">
                      Weight Capacity:
                    </span>
                    <span className="font-ManropeRegular text-[16px] text-secondaryLight">
                      Up to 3 tonnes
                    </span>
                  </p>
                </div>
              </div>

              <div className="w-[386px] h-[408px] flex flex-col justify-center items-center gap-[24px] p-[30px] items-left bg-white border-solid border-1 border-forBorder rounded-[16px]">
                <div className="w-[232px] h-[157px] flex justify-center items-center">
                  <img src={trailerTruck} alt="" />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <p className="font-ManropeSB text-lg">Pickup</p>
                  <p className="flex gap-[8px]">
                    <span className="font-ManropeBold text-[16px]">
                      Weight Capacity:
                    </span>
                    <span className="font-ManropeRegular text-[16px] text-secondaryLight">
                      Up to 1 ton
                    </span>
                  </p>
                </div>
              </div>

              <div className="w-[386px] h-[408px] flex flex-col justify-center items-center gap-[24px] p-[30px] items-left bg-white border-solid border-1 border-forBorder rounded-[16px]">
                <img
                  src={loaderRickshaw}
                  className="w-[219px] h-[169px]"
                  alt=""
                />
                <div className="flex flex-col gap-[6px]">
                  <p className="font-ManropeSB text-lg">Loader Rickshaw</p>
                  <p className="flex gap-[8px]">
                    <span className="font-ManropeBold text-[16px]">
                      Weight Capacity:
                    </span>
                    <span className="font-ManropeRegular text-[16px] text-secondaryLight">
                      400 kgs
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-[1280px] mx-auto py-[71px]">
        <div>
          <div className="flex flex-col text-3xl font-ManropeSB items-center">
            <p className="text-center">
              <span className="relative font-ClashDisplayMedium before:block before:absolute before:bg-primary before:h-[13px] before:w-full before:bottom-[4px] before:right-0 before:z-[-1]">
                FAQ
              </span>
            </p>
          </div>
          <p className="pt-4 text-center px-[16px] flex flex-col font-ManropeRegular text-[16px]">
            <span>
              Get answers to common questions about Olovola, our benefits and
              our service etc.
            </span>
          </p>
        </div>

        {/* FAQ TEST */}
        <FAQ />
      </div>

      {/* Download App Section */}
      <div className="max-w-[1280px] mx-auto bg-secondary sm:rounded-[12px] ">
        <div className="flex flex-col md:flex-row items-center gap-[20px] justify-center py-[60px] mx-[20px]">
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-left md:pl-20">
            <p className="text-4xl text-white font-ManropeSB">
              Using multiplatform technology to digitize freight
            </p>
            <p className="pt-3.5 font-ManropeRegular text-[16px] text-white">
              The user has the best possible experience scheduling and tracking
              shipments with 360° insights thanks to Olovola Dashboard & Mobile
              Applications.
            </p>
            <a href="/" className="pt-6">
              <img
                src={GooglePlayButton}
                className="w-[122px] h-[36px]"
                alt=""
              />
            </a>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center">
            <img src={appScreenshot} alt="" />
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-[1280px] mx-auto">
        <div className="container flex flex-col xl:flex-row mx-auto px-5 py-8 xl:py-[71px] text-gray-500 bg-white rounded-2xl">
          <div className="w-full mb-6 xl:mb-0 sm:text-left">
            <div className="mb-4 text-secondary text-3xl font-ManropeSB">
              Join 2,000+ subscribers
            </div>

            <div className="font-ManropeRegular text-[16px]">
              Stay in the loop with everything you need to know.
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col justify-center sm:flex-row gap-3 w-full">
              <input
                type="text"
                placeholder="Enter your email"
                className="font-ManropeRegular text-[16px] sm:w-2/4 h-12 p-3 text-gray-900 border border-solid border-gray-300 rounded-lg shadow"
              ></input>

              <button
                type="submit"
                className="sm:w-1/4 h-12 shadow transition-all duration-300 ease-in-out whitespace-nowrap text-[14px] bg-primary hover:bg-[#080C09] hover:text-[#FDD700] py-[10px] px-[20px] rounded-[8px] font-ManropeMedium"
              >
                Subscribe
              </button>
            </div>

            <div className="mt-3 text-sm sm:text-center font-ManropeRegular">
              We care about your data in our{" "}
              <u className="cursor-pointer transition-all duration-300 ease-in-out hover:text-gray-700">
                privacy policy
              </u>
              .
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
