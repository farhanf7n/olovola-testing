import LanguageSelector from "../components/Language-selector";
import { Trans, useTranslation } from "react-i18next";

function Chus() {
  const { t } = useTranslation();
  const { para1, para2, styledSpan, b2bMainHeading } = t("B2b");
  return (
    <div>
      {/* B2B Section */}
      {/* div1 */}
      <div className="flex flex-col text-3xl font-ManropeSB items-center text-center">
        <p>
          {para1}{" "}
          <span className="relative font-ClashDisplayMedium before:block before:absolute before:bg-primary before:h-[13px] before:w-full before:bottom-[4px] before:right-0 before:z-[-1]">
            {styledSpan}
          </span>
        </p>
        <p>{para2}</p>
      </div>

      {/* div2 */}
      <div>
        <p className="flex flex-col text-3xl font-ManropeSB items-center text-center">
          {b2bMainHeading}
        </p>
      </div>
    </div>
  );
}

export default Chus;
