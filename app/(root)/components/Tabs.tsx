"use client";

import React, { useState } from "react";

interface TabProps {
  label: string;
  children: React.ReactNode;
}

interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex">
        {children.map((tab, index) => (
          <button
            key={index}
            className={`
              pr-3 text-sm font-medium
              focus:outline-none   
              ${
                activeTab === index
                  ? ""
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }
            `}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div>{children[activeTab]}</div>
    </div>
  );
};
