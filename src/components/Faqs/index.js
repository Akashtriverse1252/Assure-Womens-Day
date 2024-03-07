import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React, { useState } from "react";
import data from "../../data/HeartAccordions.json";

const Index = () => {
  const [open, setOpen] = useState(null);

  const handleOpen = (id) => {
    setOpen(open === id ? null : id);
  };
  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.7 },
  };

  return (
    <>
      {data.map((item, index) => (
        <Accordion
          animate={CUSTOM_ANIMATION}
          open={open === index}
          icon={<Icon id={index} open={open} />}
          key={index}
          className=""
        >
          <AccordionHeader
            className="accordion__button"
            onClick={() => handleOpen(index)}
          >
            {item.title}
          </AccordionHeader>
          <AccordionBody>
            <ul>
              <li className="">
                <span>{item.content.title}</span>
              </li>
              {item.content.points.map((point, pointIndex) => (
                <li key={pointIndex} className="">
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
};

export default Index;

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
