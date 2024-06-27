import {driverBanner, ArrowDown, Transparency, FullSupport, DiscountsCosts, LessBureaucracy, appScreenshot, GooglePlayButton, personHoldingPhone, olovolaDocs, mapAndCar, truckMoving, Schedule, liveTracking} from '../assets/assets';
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";

function Driver() {
  const { t, i18n } = useTranslation();
  const { DriverBannerHeading, FormLeftPara, FormRightPara, FullNamePlaceholder, PhoneNumberPlaceholder, EmailPlaceholder, CnicPlaceholder, DriverSubmitButton, DriverSubPara1, DriverSubPara2, StartedSimplePara, StartedHeadingStyled, WhyChooseUs, DriverStyledpara, DriverParaSimple, toGetStarted, DriverStartedPara1, DriverStartedPara2, HoldingPhonePara, NumberOne, SubmitDocsPara, NumberTwo, MapCarPara, NumberThree} = t("DriverPage");
  const { DloadMainheading, DloadSubPara } = t("DownloadSection");
  const {
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
  return (
    <div>
      {/* Banner Section */}
      <div className="max-w-[1280px] mx-auto">
        <div className="relative h-[341px] w-full z-[-1]">
          <div className="z-[-1]">
            <div
              className="absolute inset-0 bg-cover bg-center lg:rounded-[24px]"
              style={{ backgroundImage: `url(${driverBanner})` }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-60 lg:rounded-[24px]"></div>
          </div>
          <div className="flex flex-col justify-center items-center z-[1] w-full h-full absolute">
            <p className="uppercase text-[36px] font-ManropeEB sm:text-[80px] text-primary leading-[44px] sm:leading-[73px] pb-4 tracking-tight font-extrabold">
              {DriverBannerHeading}
            </p>
            <p>
              <img src={ArrowDown} className="w-[24px] h-[24px]" alt="" />
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative max-w-[1280px] mx-auto lg:h-[490px] lg:rounded-[24px] lg:border lg:border-primary mt-[8px] mb-[71px]">
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1] lg:rounded-[24px]"
          style={{ backgroundImage: `url(${truckMoving})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60 z-[-1] lg:rounded-[24px]"></div>
        <div className="flex flex-col lg:flex-row justify-center z-[999] h-full">
          {/* 60% Side */}
          <div className="w-full lg:w-3/5 flex items-end h-full">
            <p className="text-4xl text-white font-ManropeSB p-[40px]">
              {FormLeftPara}
            </p>
          </div>
          {/* 40% Side */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center gap-[18px] px-[40px] pt-0 pb-[40px] lg:py-0">
            {/* Form Side */}
            <p className="text-white first-line:flex flex-col text-3xl font-ManropeSB items-center">
              {FormRightPara}
            </p>
            <div className="group w-full md:w-80 lg:w-full">
              <div className="relative flex items-center">
                <input
                  id="4"
                  type="text"
                  placeholder={FullNamePlaceholder}
                  className="peer relative h-12 w-full rounded-md bg-gray-50 pl-10 pr-4 font-ManropeLight outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                ></input>
                <span className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="#080c09"
                    fill="none"
                  >
                    <path
                      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="group w-full md:w-80 lg:w-full">
              <div className="relative flex items-center">
                <input
                  id="4"
                  type="number"
                  placeholder={PhoneNumberPlaceholder}
                  className="peer relative h-12 w-full rounded-md font-ManropeLight bg-gray-50 pl-10 pr-4 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                ></input>
                <span className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="#080c09"
                    fill="none"
                  >
                    <path
                      d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 19H13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="group w-full md:w-80 lg:w-full">
              <div className="relative flex items-center">
                <input
                  id="4"
                  type="text"
                  placeholder={EmailPlaceholder}
                  className="peer relative h-12 w-full rounded-md bg-gray-50 pl-10 pr-4 font-ManropeLight outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                ></input>
                <span className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="#080c09"
                    fill="none"
                  >
                    <path
                      d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="group w-full md:w-80 lg:w-full">
              <div className="relative flex items-center">
                <input
                  id="4"
                  type="number"
                  placeholder={CnicPlaceholder}
                  className="peer relative h-12 w-full rounded-md bg-gray-50 pl-10 pr-4 font-ManropeLight outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                ></input>
                <span className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="#080c09"
                    fill="none"
                  >
                    <path
                      d="M14 3.5C17.7712 3.5 19.6569 3.5 20.8284 4.7448C22 5.98959 22 7.99306 22 12C22 16.0069 22 18.0104 20.8284 19.2552C19.6569 20.5 17.7712 20.5 14 20.5L10 20.5C6.22876 20.5 4.34315 20.5 3.17157 19.2552C2 18.0104 2 16.0069 2 12C2 7.99306 2 5.98959 3.17157 4.7448C4.34315 3.5 6.22876 3.5 10 3.5L14 3.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 15.4999C6.60865 13.3625 10.3539 13.2458 12 15.4999M10.249 10.25C10.249 11.2165 9.46552 12 8.49902 12C7.53253 12 6.74902 11.2165 6.74902 10.25C6.74902 9.2835 7.53253 8.5 8.49902 8.5C9.46552 8.5 10.249 9.2835 10.249 10.25Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15 9.5L19 9.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15 13.5H17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="group w-full md:w-80 lg:w-full">
              <button
                type="submit"
                className="w-full whitespace-nowrap text-[14px] bg-primary hover:bg-[#080C09] hover:text-[#FDD700] py-[15px] px-[20px] rounded-[8px] font-ManropeMedium transition-all duration-300 ease-in-out"
              >
                {DriverSubmitButton}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-[1280px] mx-auto py-[71px]">
        {/* Heading & Paragraph */}
        <div>
          {/* TEST */}
            {i18n.language === "en" ? (
            // div1: Displayed when the language is English
            <div className="flex flex-col text-3xl font-ManropeSB items-center text-center">
              <p>
                {StartedSimplePara}{" "}
                <span className="relative font-ClashDisplayMedium before:block before:absolute before:bg-primary before:h-[13px] before:w-full before:bottom-[4px] before:right-0 before:z-[-1]">
                  {StartedHeadingStyled}
                </span>
              </p>
            </div>
          ) : (
            // div2: Displayed when the language is not English (e.g., Urdu)
            <div>
              <p className="flex flex-col text-3xl font-ManropeSB items-center text-center">
                {WhyChooseUs}
                <div className="relative font-ClashDisplayMedium before:block before:absolute before:bg-primary before:h-[22px] before:w-[70px] before:bottom-[-4px] before:right-[-14px] before:z-[-1]"></div>
              </p>
            </div>
          )}
          <p className="pt-4 text-center px-[16px] flex flex-col font-ManropeRegular text-[16px]">
            <span>
              {DriverSubPara1}
            </span>
            <span>{DriverSubPara2}</span>
          </p>
        </div>
        {/* image & Right side icons */}
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

      {/* Download App Section */}
      <div className="max-w-[1280px] mx-auto bg-secondary sm:rounded-[12px] ">
        <div className="flex flex-col md:flex-row items-center gap-[20px] justify-center py-[60px] mx-[20px]">
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-left md:pl-20">
            <p className="text-4xl text-white font-ManropeSB">
              {DloadMainheading}
            </p>
            <p className="pt-3.5 font-ManropeRegular text-[16px] text-white">
              {DloadSubPara}
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

      {/* Get Started Section */}
      <div className="max-w-[1280px] mx-auto py-[71px]">
        {/* Heading & Paragraph */}
        <div>
          <div className="flex flex-col text-3xl font-ManropeSB items-center">
            {/* Test */}
            {i18n.language === "en" ? (
            // div1: Displayed when the language is English
            <div className="flex flex-col text-3xl font-ManropeSB items-center text-center">
              <p>
                
                <span className="relative font-ClashDisplayMedium before:block before:absolute before:bg-primary before:h-[13px] before:w-full before:bottom-[4px] before:right-0 before:z-[-1]">
                  {DriverStyledpara}  
                </span>
                {" "}{DriverParaSimple}
              </p>
            </div>
          ) : (
            // div2: Displayed when the language is not English (e.g., Urdu)
            <div>
              <p className="flex flex-col text-3xl font-ManropeSB items-center text-center">
                {toGetStarted}
                <div className="relative font-ClashDisplayMedium before:block before:absolute before:bg-primary before:h-[22px] before:w-[70px] before:bottom-[-4px] before:right-[43px] before:z-[-1]"></div>
              </p>
            </div>
          )}
          </div>
          <p className="pt-4 text-center px-[16px] flex flex-col font-ManropeRegular text-[16px]">
            <span>
              {DriverStartedPara1}
            </span>
            <span>{DriverStartedPara2}</span>
          </p>
        </div>

        <div className="flex items-center justify-center pt-[60px]">
          <div className="max-w-[1280px] flex flex-wrap justify-center gap-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-[60px]">
              <div className="flex flex-col-reverse sm:flex-row gap-4 items-center justify-center px-10">
                <div className="flex flex-col gap-[15px] items-start">
                  <img
                    src={personHoldingPhone}
                    className="w-[83px] h-[112px]"
                    alt="personHoldingPhone"
                  />
                  <p className="font-ManropeSB text-lg">
                    {HoldingPhonePara}
                  </p>
                </div>
                <p className="font-ManropeSB text-grayCloud text-[116px] leading-tight">
                  {NumberOne}
                </p>
              </div>
              <div className="flex flex-col-reverse sm:flex-row gap-4 items-center justify-center px-10">
                <div className="flex flex-col gap-[15px] items-start">
                  <img
                    src={olovolaDocs}
                    className="w-[153px] h-[112px]"
                    alt="personHoldingPhone"
                  />
                  <p className="font-ManropeSB text-lg">
                    {SubmitDocsPara}
                  </p>
                </div>
                <p className="font-ManropeSB text-grayCloud text-[116px] leading-tight">
                  {NumberTwo}
                </p>
              </div>
              <div className="flex gap-4 items-center justify-center px-10">
                <div className="flex flex-col gap-[15px] items-start">
                  <img
                    src={mapAndCar}
                    className="w-[176px] h-[112px]"
                    alt="personHoldingPhone"
                  />
                  <p className="font-ManropeSB text-lg">
                    {MapCarPara}
                  </p>
                </div>
                <p className="font-ManropeSB text-grayCloud text-[116px] leading-tight">
                  {NumberThree}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Driver;
