import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Error404 from "../assets/images/Error404.gif";

function NoPage() {
  const { t } = useTranslation();
  const { FOFheading, NPheadingOne, NPheadingTwo, GoHomeButton } = t("NoPage");
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center h-100"
        style={{ height: `calc(100vh - 98px)` }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex flex-col text-[36px] font-ManropeEB sm:text-[80px] text-primary  leading-[44px] sm:leading-[73px] pb-4 tracking-tight">
            {FOFheading}
          </h1>

          <img src={Error404} className="h-[400px]" alt="" />

          <div className="flex flex-col justify-center items-center gap-2">
            <div>
              <h3 className="flex flex-col text-3xl font-ManropeSB items-center">
                {NPheadingOne}
              </h3>
              <p className="text-center px-[16px] text-lg flex flex-col font-ManropeRegular">
                {NPheadingTwo}
              </p>
            </div>
            <Link
              to="/"
              className="whitespace-nowrap text-[14px] bg-primary hover:bg-[#080C09] hover:text-[#FDD700] py-[10px] px-[20px] rounded-[8px] font-ManropeMedium transition-all duration-300 ease-in-out"
            >
              {GoHomeButton}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoPage;
