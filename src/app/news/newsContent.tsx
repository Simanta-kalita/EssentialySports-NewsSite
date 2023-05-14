"use client";
import React, { useState } from "react";
import NewsGrid from "./newsGrid";

export default function NewsContent() {
  const [active, setActive] = useState(3);
  const tabs = [
    {
      title: "politics",
    },
    {
      title: "business",
    },
    {
      title: "tech",
    },
    {
      title: "sports",
    },
    {
      title: "science",
    },
    {
      title: "health",
    },
    {
      title: "arts",
    },
  ];

  return (
    <section className="flex flex-col">
      <div className="flex flex-row flex-wrap gap-4 py-4">
        {tabs &&
          tabs.map((tab, index) => (
            <span
              key={index}
              onClick={() => setActive(index)}
              className={`px-4 py-1 rounded-full hover:text-primary/60 hover:border-primary/60 border-2 cursor-pointer transition-all font-medium capitalize ${
                active === index
                  ? "text-primary/75 border-primary/75"
                  : "text-black/75 border-black/75"
              }`}
            >
              {tab.title}
            </span>
          ))}
      </div>
      <NewsGrid newsData={tabs[active]?.title} />
    </section>
  );
}