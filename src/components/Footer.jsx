import { Link } from "react-router-dom";

import LanguageSelector from "../components/Language-selector";
import { Trans, useTranslation } from "react-i18next";

import FooterLogo from "../assets/images/FooterLogo.png";
import olovolaRoundedLogo from "../assets/images/olovolaRoundedLogo.png";

function Footer() {
  const { t, i18n } = useTranslation();
  const { FooterSpan1, FooterSpan2, FooterSpan3, PageHeading, B2bHeading, BenefitsHeading, TWMHeading, VFHeading, FAQHeading, BlogsHeading, AllBHeading, TechHeading, ContactHeading, CopyrightFooterText, TOSFooter, FooterPP, FooterCP, FooterContactNumber} = t("Footer");
  return (
    <div className="relative bg-secondary py-[71px] z-[1] overflow-hidden">
      <img
        src={olovolaRoundedLogo}
        className=" absolute top-[-80px] right-[-70px] z-[-1]"
        alt=""
      />
      <div className="mx-[20px] z-[2]">
        <div className="max-w-[1280px] mx-auto flex flex-col h-full justify-center items-center">
          <div className="mb-3 flex flex-wrap justify-between gap-6 w-full mx-[20px]">
            <div>
              <a
                href="#_"
                className="text-xl font-black leading-none text-gray-900 select-none logo"
              >
                <img src={FooterLogo} className="w-[240px] h-[46px]" alt="" />
              </a>
              <p className="my-4 font-ManropeRegular text-white text-[16px] flex flex-col">
                <span>{FooterSpan1}</span>
                <span>{FooterSpan2}</span>
                <span>{FooterSpan3}</span>
                chance.
              </p>
            </div>
            <nav>
              <p className="mb-3 font-manropeBold text-[26px] text-lightGrey uppercase">
                {PageHeading}
              </p>
              <Link
                to="/"
                className="flex mb-3 text-[16px] font-medium text-white transition  md:mb-2 hover:text-primary"
              >
                {B2bHeading}
              </Link>
              <Link
                to="/"
                className="flex mb-3 text-[16px] font-medium text-white transition  md:mb-2 hover:text-primary"
              >
                {BenefitsHeading}
              </Link>
              <Link
                to="/"
                className="flex mb-3 text-[16px] font-medium text-white transition  md:mb-2 hover:text-primary"
              >
                {TWMHeading}
              </Link>
              <Link
                to="/"
                className="flex mb-3 text-[16px] font-medium text-white transition  md:mb-2 hover:text-primary"
              >
                {VFHeading}
              </Link>
              <Link
                to="#"
                className="flex mb-3 text-[16px] font-medium text-white transition  md:mb-2 hover:text-primary"
              >
                {FAQHeading}
              </Link>
            </nav>
            <nav>
              <p className="mb-3 font-manropeBold text-[26px] text-lightGrey uppercase">
                {BlogsHeading}
              </p>
              <Link
                to="/blog"
                className="flex mb-3 text-[16px] font-medium text-white transition  md:mb-2 hover:text-primary"
              >
                {AllBHeading}
              </Link>
              <Link
                to="/blog"
                className="flex mb-3 text-[16px] font-medium text-white transition  md:mb-2 hover:text-primary"
              >
                {TechHeading}
              </Link>
            </nav>
            <nav>
              <p className="mb-3 font-manropeBold text-[26px] text-lightGrey uppercase">
                {ContactHeading}
              </p>

              <p className="flex mb-3 text-[16px] font-medium text-white transition  md:mb-2 hover:text-primary">
                Info@olovola.com
              </p>
              <p className="flex mb-3 text-[16px] font-medium text-white transition  md:mb-2 hover:text-primary">
                {FooterContactNumber}
              </p>
            </nav>
          </div>
          <div className="flex flex-col items-center gap-[20px] justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center w-full">
            <p className="text-left font-ManropeRegular text-white text-[16px] md:mb-0">
              {CopyrightFooterText}
            </p>
            <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
              <Link
                to="/Nopagefound"
                className="font-ManropeRegular text-white text-[16px] transition hover:text-primary"
              >
                {TOSFooter}
              </Link>
              <Link
                to="/Nopagefound"
                className="font-ManropeRegular text-white text-[16px] transition hover:text-primary"
              >
                {FooterPP}
              </Link>
              <Link
                to="/Nopagefound"
                className="font-ManropeRegular text-white text-[16px] transition hover:text-primary"
              >
                {FooterCP}
              </Link>
            </div>
            <div className="flex gap-[8px]">
              <div className="flex justify-center gap-[12px]">
                <a href="#" className="text-white hover:text-primary">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-primary">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-primary">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>

                <a href="#" className="text-white hover:text-primary">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5359 11.0075C9.71585 10.8916 7.84666 11.0834 6.93011 12.7782C6.01355 14.4729 6.9373 16.2368 7.51374 16.9069C8.08298 17.5338 9.89226 18.721 11.8114 17.5619C12.2871 17.2746 12.8797 17.0603 13.552 14.8153L13.4738 5.98145C13.3441 6.95419 14.4186 9.23575 17.478 9.5057"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default Footer;