import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import LanguageSelector from "./Language-selector";
import { Trans, useTranslation } from "react-i18next";

import olovolaLogo from "../assets/images/olovola-logo.svg";
import OlovolaBox from "../assets/images/Olovola-box.svg";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  const { t } = useTranslation();
  const {
    home,
    aboutUs,
    driver,
    services,
    businessToBusiness,
    blog,
    suggestion,
  } = t("NavLinks");

  return (
    <>
      <div className="relative bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between px items-center py-6 md:justify-start px-5 lg:px-0">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <img className="h-[27px] w-[147px]" src={olovolaLogo} alt="" />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex gap-[6px]">
              {/* <Link
                to="/"
                className="text-[14px] hover:bg-[#080C09] hover:text-[#FDD700] py-[10px] px-[20px] rounded-[8px] font-ManropeMedium"
              >
                Home
              </Link> */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-[#080C09] text-[#FDD700]" : ""
                  } transition-all duration-300 ease-in-out text-[14px] hover:bg-[#080C09] hover:text-[#FDD700] py-[10px] px-[20px] rounded-[8px] font-ManropeMedium`
                }
              >
                {home}
              </NavLink>
              <NavLink
                to="aboutus"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-[#080C09] text-[#FDD700]" : ""
                  } transition-all duration-300 ease-in-out text-[14px] hover:bg-[#080C09] hover:text-[#FDD700] py-[10px] px-[20px] rounded-[8px] font-ManropeMedium`
                }
              >
                {aboutUs}
              </NavLink>

              <NavLink
                to="driver"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-[#080C09] text-[#FDD700]" : ""
                  } transition-all duration-300 ease-in-out text-[14px] hover:bg-[#080C09] hover:text-[#FDD700] py-[10px] px-[20px] rounded-[8px] font-ManropeMedium`
                }
              >
                {driver}
              </NavLink>
              <NavLink
                to="services"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-[#080C09] text-[#FDD700]" : ""
                  } transition-all duration-300 ease-in-out text-[14px] hover:bg-[#080C09] hover:text-[#FDD700] py-[10px] px-[20px] rounded-[8px] font-ManropeMedium`
                }
              >
                {services}
              </NavLink>
              <NavLink
                to="b2b"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-[#080C09] text-[#FDD700]" : ""
                  } transition-all duration-300 ease-in-out text-[14px] hover:bg-[#080C09] hover:text-[#FDD700] py-[10px] px-[20px] rounded-[8px] font-ManropeMedium`
                }
              >
                {businessToBusiness}
              </NavLink>
              <NavLink
                to="blog"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-[#080C09] text-[#FDD700]" : ""
                  } transition-all duration-300 ease-in-out text-[14px] hover:bg-[#080C09] hover:text-[#FDD700] py-[10px] px-[20px] rounded-[8px] font-ManropeMedium`
                }
              >
                {blog}
              </NavLink>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-[8px]">
              <LanguageSelector />
              <Link
                to="suggestion"
                className="whitespace-nowrap text-[14px] bg-primary hover:bg-[#080C09] hover:text-[#FDD700] py-[10px] px-[20px] rounded-[8px] font-ManropeMedium transition-all duration-300 ease-in-out"
              >
                {suggestion}
              </Link>
            </div>
          </div>
        </div>
        {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}

        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 z-[999]">
            <div className="pt-5 pb-6 px-5 z-[999]">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={OlovolaBox} alt="Workflow" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <NavLink
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#080c09"
                      fill="none"
                    >
                      <path
                        d="M15.0001 17C14.2006 17.6224 13.1504 18 12.0001 18C10.8499 18 9.79965 17.6224 9.00012 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {home}
                    </span>
                  </NavLink>
                  <NavLink
                    to="aboutus"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
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
                        d="M11 7L17 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 7L8 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 12L8 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 17L8 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M11 12L17 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M11 17L17 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {aboutUs}
                    </span>
                  </NavLink>
                  <NavLink
                    to="driver"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#080c09"
                      fill="none"
                    >
                      <path
                        d="M7.78256 17.1112C6.68218 17.743 3.79706 19.0331 5.55429 20.6474C6.41269 21.436 7.36872 22 8.57068 22H15.4293C16.6313 22 17.5873 21.436 18.4457 20.6474C20.2029 19.0331 17.3178 17.743 16.2174 17.1112C13.6371 15.6296 10.3629 15.6296 7.78256 17.1112Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.5 10C15.5 11.933 13.933 13.5 12 13.5C10.067 13.5 8.5 11.933 8.5 10C8.5 8.067 10.067 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M2.854 16C2.30501 14.7664 2 13.401 2 11.9646C2 6.46129 6.47715 2 12 2C17.5228 2 22 6.46129 22 11.9646C22 13.401 21.695 14.7664 21.146 16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {driver}
                    </span>
                  </NavLink>
                  <NavLink
                    to="services"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#080c09"
                      fill="none"
                    >
                      <path
                        d="M19.4173 15.7133C23.368 10.7038 22.3007 5.73508 19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801L11.9998 4.84158M19.4173 15.7133C18.469 16.9156 17.2317 18.1204 15.6605 19.2834C14.1143 20.4278 13.3412 21 12 21C10.6588 21 9.88572 20.4278 8.33953 19.2834C0.22172 13.2749 1.01807 6.15293 4.53744 3.99415C7.21909 2.34923 9.55962 3.01211 10.9656 4.06801L11.9998 4.84158M19.4173 15.7133L13.8921 9.44479C13.6659 9.1882 13.2873 9.13296 12.9972 9.31424L10.8111 10.6806C10.0418 11.1614 9.04334 11.0532 8.3949 10.4187C7.53837 9.58062 7.62479 8.17769 8.5777 7.45106L11.9998 4.84158"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {services}
                    </span>
                  </NavLink>
                  <NavLink
                    to="b2b"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#080c09"
                      fill="none"
                    >
                      <path
                        d="M2 11C4.3317 8.55783 7.64323 8.44283 10 11M8.49509 4.5C8.49509 5.88071 7.37421 7 5.99153 7C4.60885 7 3.48797 5.88071 3.48797 4.5C3.48797 3.11929 4.60885 2 5.99153 2C7.37421 2 8.49509 3.11929 8.49509 4.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M14 22C16.3317 19.5578 19.6432 19.4428 22 22M20.4951 15.5C20.4951 16.8807 19.3742 18 17.9915 18C16.6089 18 15.488 16.8807 15.488 15.5C15.488 14.1193 16.6089 13 17.9915 13C19.3742 13 20.4951 14.1193 20.4951 15.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M3 14C3 17.87 6.13 21 10 21L9 19"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 3H21M15 6H21M15 9H18.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {businessToBusiness}
                    </span>
                  </NavLink>
                  <NavLink
                    to="blog"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#080c09"
                      fill="none"
                    >
                      <path
                        d="M12.5294 2C16.5225 2 18.519 2 19.7595 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.7595 20.8284C18.519 22 16.5225 22 12.5294 22H11.4706C7.47751 22 5.48098 22 4.24049 20.8284C3 19.6569 3 17.7712 3 14L3 10C3 6.22876 3 4.34315 4.24049 3.17157C5.48098 2 7.47752 2 11.4706 2L12.5294 2Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 7H16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 12H16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 17H12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Blog
                    </span>
                  </NavLink>
                  <NavLink
                    to="blog"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#080c09"
                      fill="none"
                    >
                      <path
                        d="M2 12C2 13.0519 2.18046 14.0617 2.51212 15M13.0137 9H21.5015M11 15H2.51212M21.5015 9C20.266 5.50442 16.9323 3 13.0137 3C14.6146 3 15.9226 6.76201 16.0091 11.5M21.5015 9C21.7803 9.78867 21.9522 10.6278 22 11.5M2.51212 15C3.74763 18.4956 7.08134 21 11 21C9.45582 21 8.18412 17.5 8.01831 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 5.29734C2 4.19897 2 3.64979 2.18738 3.22389C2.3861 2.77223 2.72861 2.40921 3.15476 2.1986C3.55661 2 4.07478 2 5.11111 2H6C7.88562 2 8.82843 2 9.41421 2.62085C10 3.2417 10 4.24095 10 6.23944V8.49851C10 9.37026 10 9.80613 9.73593 9.95592C9.47186 10.1057 9.12967 9.86392 8.4453 9.38036L8.34103 9.30669C7.84086 8.95329 7.59078 8.77658 7.30735 8.68563C7.02392 8.59468 6.72336 8.59468 6.12223 8.59468H5.11111C4.07478 8.59468 3.55661 8.59468 3.15476 8.39608C2.72861 8.18547 2.3861 7.82245 2.18738 7.37079C2 6.94489 2 6.39571 2 5.29734Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M22 17.2973C22 16.199 22 15.6498 21.8126 15.2239C21.6139 14.7722 21.2714 14.4092 20.8452 14.1986C20.4434 14 19.9252 14 18.8889 14H18C16.1144 14 15.1716 14 14.5858 14.6209C14 15.2417 14 16.2409 14 18.2394V20.4985C14 21.3703 14 21.8061 14.2641 21.9559C14.5281 22.1057 14.8703 21.8639 15.5547 21.3804L15.659 21.3067C16.1591 20.9533 16.4092 20.7766 16.6926 20.6856C16.9761 20.5947 17.2766 20.5947 17.8778 20.5947H18.8889C19.9252 20.5947 20.4434 20.5947 20.8452 20.3961C21.2714 20.1855 21.6139 19.8225 21.8126 19.3708C22 18.9449 22 18.3957 22 17.2973Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <div className="ml-3 text-base font-medium text-gray-900">
                      <LanguageSelector />
                    </div>
                  </NavLink>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent whitespace-nowrap text-[14px] bg-primary hover:bg-[#080C09] hover:text-[#FDD700] rounded-[8px] font-ManropeMedium transition-all duration-300 ease-in-out
                  "
                >
                  {suggestion}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
