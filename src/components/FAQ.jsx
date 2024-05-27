import React, { useState } from "react";

import LanguageSelector from "./Language-selector";
import { Trans, useTranslation } from "react-i18next";
import faqImage from "../assets/images/faqImage.png";

const Accordion = () => {
  const { i18n } = useTranslation();
  return (
    <section className="max-w-[1280px] mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center pt-[60px]">
        <div className="w-full sm:w-1/2 flex flex-col justify-center gap-4">
          {/* First Accordion */}
          {i18n.language === "en" ? (
            // div1: Displayed when the language is English
            <AccordionItem
              header="As an owner operator, what can you deduct?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          ) : (
            // div2: Displayed when the language is not English (e.g., Urdu)
            <AccordionItem
              className="text-right"
              header="مالک آپریٹر کے طور پر، آپ کیا کٹوتی کر سکتے ہیں؟"
              text="آپ کی پہلی بلاگ پوسٹ تیار ہونے میں 2-3 ہفتے لگتے ہیں۔ اس میں آپ کی ماہانہ مواد کی مارکیٹنگ کی حکمت عملی کی گہرائی سے تحقیق اور تخلیق شامل ہے جو ہم آپ کی پہلی بلاگ پوسٹ، Ipsum دستیاب لکھنے سے پہلے کرتے ہیں۔"
            />
          )}

          {/* Second Accordion */}
          {i18n.language === "en" ? (
            // div1: Displayed when the language is English
            <AccordionItem
              header="What is Trailer Tracking?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available."
            />
          ) : (
            // div2: Displayed when the language is not English (e.g., Urdu)
            <AccordionItem
              className="text-right"
              header="ٹریلر ٹریکنگ کیا ہے؟"
              text="آپ کی پہلی بلاگ پوسٹ تیار ہونے میں 2-3 ہفتے لگتے ہیں۔ اس میں آپ کی ماہانہ مواد کی مارکیٹنگ کی حکمت عملی کی گہرائی سے تحقیق اور تخلیق شامل ہے جو ہم آپ کی پہلی بلاگ پوسٹ، Ipsum دستیاب لکھنے سے پہلے کرتے ہیں۔"
            />
          )}

          {/* Third Accordion */}
          {i18n.language === "en" ? (
            // div1: Displayed when the language is English
            <AccordionItem
              header="What is Trailer Tracking?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available."
            />
          ) : (
            // div2: Displayed when the language is not English (e.g., Urdu)
            <AccordionItem
              className="text-right"
              header="30 منٹ کے وقفے کا اصول کیا ہے؟"
              text="آپ کی پہلی بلاگ پوسٹ تیار ہونے میں 2-3 ہفتے لگتے ہیں۔ اس میں آپ کی ماہانہ مواد کی مارکیٹنگ کی حکمت عملی کی گہرائی سے تحقیق اور تخلیق شامل ہے جو ہم آپ کی پہلی بلاگ پوسٹ، Ipsum دستیاب لکھنے سے پہلے کرتے ہیں۔"
            />
          )}
        </div>
        <div className="w-full sm:w-1/2 flex justify-center">
          <img src={faqImage} className="w-max-[524px] h-max-[370px]" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };

  const { i18n } = useTranslation();
  return (
    <div className="w-full p-4 lg:px-6 xl:px-8 bg-lightBlue border-solid border-1 border-forBorder rounded-[16px] transition-all duration-300 ease-in-out">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5 transition-all duration-300 ease-in-out">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${active ? "rotate-180" : ""
              }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className={`mt-1 font-ManropeSB text-lg ${i18n.language === "en" ? "text-left" : "text-right"
              }`}>
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] transition-all duration-300 ease-in-out ${active ? "block" : "hidden"
          }`}
      >
        <p className="py-3 font-ManropeRegular text-[16px]">{text}</p>
      </div>
    </div>
  );
};
