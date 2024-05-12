import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

import heroTruck from "../assets/images/heroTruck.png";
import pakIcons from "../assets/images/pakIcons.png";
import b2bMain from "../assets/images/b2bMain.png";
import liveTracking from "../assets/images/liveTracking.png";
import SecureFast from "../assets/images/Securefast.png";
import OwnDashboard from "../assets/images/OwnDashboard.png";
import BestRates from "../assets/images/BestRates.png";
import Schedule from "../assets/images/Schedule.png";
import Transparency from "../assets/images/Transparency.png";
import FullSupport from "../assets/images/FullSupport.png";
import DiscountsCosts from "../assets/images/DiscountsCosts.png";
import LessBureaucracy from "../assets/images/LessBureaucracy.png";
import fmcgIcon from "../assets/images/fmcgIcon.png";
import SteelIcon from "../assets/images/SteelIcon.png";
import AgricultureIcon from "../assets/images/AgricultureIcon.png";
import ConstructionIcon from "../assets/images/ConstructionIcon.png";
import CoalIcon from "../assets/images/CoalIcon.png";
import OilIcon from "../assets/images/OilIcon.png";
import FurnitureIcon from "../assets/images/FurnitureIcon.png";
import PaperIcon from "../assets/images/PaperIcon.png";
import MediumLTV from "../assets/images/MediumLTV.png";
import trailerTruck from "../assets/images/trailer-truck.png";
import loaderRickshaw from "../assets/images/loader-rickshaw.png";
import appScreenshot from "../assets/images/appScreenshot.png";
import GooglePlayButton from "../assets/images/GooglePlayButton.png";

function HomePage() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-secondary px-5">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col-reverse gap-4 lg:flex-row items-center justify-center py-20">
            <div className="w-full lg:w-1/2">
              <p className="flex flex-col text-[36px] font-ManropeEB sm:text-[80px] text-primary  leading-[44px] sm:leading-[73px] pb-4 tracking-tight">
                <span>Moving Forward</span>
                <span>Moving Better</span>
              </p>
              <p className="text-lightGrey text-xl leading-[28px] font-ManropeRegular">
                <span>
                  Starting from loading to unloading and maintaining the highest
                  standards in terms of safety while in transit, we take nothing
                  to chance.
                </span>
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
          <div className="flex flex-col text-3xl font-ManropeSB items-center">
            <p>
              Work between{" "}
              <span className="relative font-ClashDisplayMedium before:block before:absolute before:bg-primary before:h-[13px] before:w-full before:bottom-[4px] before:right-0 before:z-[-1]">
                business
              </span>
            </p>
            <p>becomes simple</p>
          </div>
          <p className="pt-4 text-center px-[16px] text-lg flex flex-col font-ManropeRegular">
            <span>
              Sending anything has never been easier; with our mobile app, you
              can track the live location of your shipment, rely on
            </span>
            <span>
              an accurate fleet, and access insights and analytics at the best
              rates available.
            </span>
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
          <div className="w-full sm:w-1/2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            <div className="flex flex-col gap-[24px] p-[30px] items-center bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={liveTracking} className="w-[56px] h-[56px]" alt="" />
              <p className="font-ManropeSB text-sm text-center">
                Live Tracking
              </p>
            </div>{" "}
            <div className="flex flex-col gap-[24px] p-[30px] items-center bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={SecureFast} className="w-[56px] h-[56px]" alt="" />
              <p className="font-ManropeSB text-sm text-center">
                Secure and Fast
              </p>
            </div>
            <div className="flex flex-col gap-[24px] p-[30px] items-center bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={OwnDashboard} className="w-[56px] h-[56px]" alt="" />
              <p className="font-ManropeSB text-sm text-center">
                Your Own Dashboard
              </p>
            </div>{" "}
            <div className="flex flex-col gap-[24px] p-[30px] items-center bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={BestRates} className="w-[56px] h-[56px]" alt="" />
              <p className="font-ManropeSB text-sm text-center">Best Rates</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-[1280px] mx-auto py-[71px]">
        {/* Heading & Paragraph */}
        <div>
          <div className="flex flex-col text-3xl font-ManropeSB items-center">
            <p className="text-center">
              Our{" "}
              <span className="relative font-ClashDisplayMedium before:block before:absolute before:bg-primary before:h-[13px] before:w-full before:bottom-[4px] before:right-0 before:z-[-1]">
                Benefits
              </span>
            </p>
          </div>
          <p className="pt-4 text-center px-[16px] flex flex-col font-ManropeRegular text-[16px]">
            <span>
              Join the Olovola team to take advantage of additional benefits
              including flexible earnings
            </span>
            <span>and no surprise fees.</span>
          </p>
        </div>
        {/* B2B image & Right side icons */}
        <div className="flex items-center justify-center pt-[60px]">
          <div className="max-w-[1280px] flex flex-wrap justify-center gap-[20px]">
            <div className="w-[386px] h-[245px] flex flex-col gap-[24px] p-[30px] items-left bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={liveTracking} className="w-[56px] h-[56px]" alt="" />
              <div className="flex flex-col gap-[6px]">
                <p className="font-ManropeSB text-lg">Live Tracking</p>
                <p className="font-ManropeRegular text-[16px]">
                  The more you drive, the more income you will earn - It's as
                  simple as that.
                </p>
              </div>
            </div>
            <div className="w-[386px] h-[245px] flex flex-col gap-[24px] p-[30px] items-left bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={Schedule} className="w-[56px] h-[56px]" alt="" />
              <div className="flex flex-col gap-[6px]">
                <p className="font-ManropeSB text-lg">Flexible schedule</p>
                <p className="font-ManropeRegular text-[16px]">
                  Find a job where you have the flexibility to decide what
                  days/times you want to work.
                </p>
              </div>
            </div>
            <div className="w-[386px] h-[245px] flex flex-col gap-[24px] p-[30px] items-left bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={Transparency} className="w-[56px] h-[56px]" alt="" />
              <div className="flex flex-col gap-[6px]">
                <p className="font-ManropeSB text-lg">Full Transparency</p>
                <p className="font-ManropeRegular text-[16px]">
                  You will receive a weekly report on your earnings and
                  discounts.
                </p>
              </div>
            </div>
            <div className="w-[386px] h-[245px] flex flex-col gap-[24px] p-[30px] items-left bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={FullSupport} className="w-[56px] h-[56px]" alt="" />
              <div className="flex flex-col gap-[6px]">
                <p className="font-ManropeSB text-lg">Full Support</p>
                <p className="font-ManropeRegular text-[16px]">
                  You will receive support from the Olovola team, supporting you
                  with Trip issues etc.
                </p>
              </div>
            </div>
            <div className="w-[386px] h-[245px] flex flex-col gap-[24px] p-[30px] items-left bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={DiscountsCosts} className="w-[56px] h-[56px]" alt="" />
              <div className="flex flex-col gap-[6px]">
                <p className="font-ManropeSB text-lg">Discounts for costs</p>
                <p className="font-ManropeRegular text-[16px]">
                  Receive discounts at reaching milestones.
                </p>
              </div>
            </div>
            <div className="w-[386px] h-[245px] flex flex-col gap-[24px] p-[30px] items-left bg-lightBlue border-solid border-1 border-forBorder rounded-[16px]">
              <img src={LessBureaucracy} className="w-[56px] h-[56px]" alt="" />
              <div className="flex flex-col gap-[6px]">
                <p className="font-ManropeSB text-lg">Less Bureaucracy</p>
                <p className="font-ManropeRegular text-[16px]">
                  We handle all documentation relating to the vehicle and
                  routes, so you can drive with peace of mind.
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
          <div className="flex flex-col text-3xl font-ManropeSB items-center">
            <p className="text-center">
              Things{" "}
              <span className="relative font-ClashDisplayMedium before:block before:absolute before:bg-primary before:h-[13px] before:w-full before:bottom-[4px] before:right-0 before:z-[-1]">
                We Move
              </span>
            </p>
          </div>
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
          <div className="w-full mb-6 xl:mb-0 sm:text-center">
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
