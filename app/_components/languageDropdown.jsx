"use client";

import { useState } from "react";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function LanguageDropdown() {
  const [language, setLanguage] = useState("English");
  const [flag, setFlag] = useState(
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/32px-Flag_of_the_United_States.svg.png"
  );

  const handleMenuClick = ({ key }) => {
    if (key === "ar") {
      setLanguage("Arabic");
      setFlag(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/32px-Flag_of_Saudi_Arabia.svg.png"
      );
    } else {
      setLanguage("English");
      setFlag(
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/32px-Flag_of_the_United_States.svg.png"
      );
    }

    console.log(`Language changed to: ${key === "ar" ? "Arabic" : "English"}`);
  };

  const items = [
    {
      label: (
        <div className="flex items-center gap-2 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/32px-Flag_of_Saudi_Arabia.svg.png"
            alt="Saudi Arabia Flag"
            className="w-4 h-4"
          />
          <span>Arabic</span>
        </div>
      ),
      key: "ar",
    },
    {
      label: (
        <div className="flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/32px-Flag_of_the_United_States.svg.png"
            alt="USA Flag"
            className="w-4 h-4"
          />
          <span>English</span>
        </div>
      ),
      key: "en",
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      className="min-w-[100px] sm:min-w-[148px]"
      trigger={["click"]}
    >
      <div className="border border-[#03B89E] rounded-lg py-[8px] px-[10px] cursor-pointer flex justify-between items-center gap-[0px] sm:gap-[30px] text-[#222222]">
        <div className="element-center">
          <img
            src={flag}
            alt="Current Language Flag"
            className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"
          />
          <span className="text-xs sm:text-sm lg:text-base">{language}</span>
        </div>
        <DownOutlined className=" text-[11px] ml-2" />
      </div>
    </Dropdown>
  );
}
