import { Tabs } from "@mantine/core";
import { useState } from "react";
import { PostListTrend } from "./PostListTrend";
import { PostListUnanswered } from "./PostListUnanswered";

export const QuestionTabPanel = () => {
  const [activeTab, setActiveTab] = useState<string | null>("trend");
  const TAB_ITEMS = [
    { value: "trend", label: "トレンド" },
    { value: "unanswered", label: "未回答" },
  ];

  return (
    <>
      <Tabs.Panel value="question">
        <Tabs
          value={activeTab}
          onTabChange={setActiveTab}
          variant="pills"
          radius="xl"
        >
          <div className="top-0 sticky bg-white z-10 flex items-center">
            <Tabs.List className="my-2 xs:my-0 xs:py-4 pl-3 xs:pl-5">
              {TAB_ITEMS.map((item) => (
                <Tabs.Tab
                  style={{
                    background: `${
                      activeTab !== item.value ? "#F7F7F7" : "#42ce9f"
                    }`,
                  }}
                  key={item.value}
                  value={item.value}
                  className="w-[5.3rem] h-[2rem] mr-0.5 xs:mr-2"
                >
                  <span
                    className={`flex items-center font-sans text-[14px] xs:text-[15px] ${
                      activeTab !== item.value ? "text-gray-500" : "text-white"
                    } font-[600]`}
                  >
                    {item.label}
                  </span>
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </div>

          <>
            {TAB_ITEMS.map((item, index) => (
              <Tabs.Panel key={index} value={item.value}>
                {item.value === "trend" ? (
                  <PostListTrend />
                ) : item.value === "unanswered" ? (
                  <PostListUnanswered />
                ) : (
                  <></>
                )}
              </Tabs.Panel>
            ))}
          </>
        </Tabs>
      </Tabs.Panel>
    </>
  );
};