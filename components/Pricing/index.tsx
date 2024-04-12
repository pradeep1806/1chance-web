/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="Why MSJ Art?" paragraph="" center width="665px" />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="w-full">
              <div
                className="wow fadeInUp relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp "
                data-wow-delay=".1s"
              >
                <div className="mb-4 flex items-center justify-between border-b border-body-color border-opacity-10">
                  <h3 className="price mb-4 text-3xl font-bold text-black ">
                    Innovation
                  </h3>
                </div>

                <div className="mb-12">
                  We're not afraid to think outside the box and challenge the
                  status quo. <br></br>Our team is constantly exploring new ideas and
                  strategies to push the boundaries of what's possible in the
                  performing arts industry.
                </div>
                <div className="absolute bottom-0 right-0 z-[-1]">
                  <svg
                    width="179"
                    height="158"
                    viewBox="0 0 179 158"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                      fill="url(#paint0_linear_70:153)"
                    />
                    <path
                      opacity="0.3"
                      d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                      fill="url(#paint1_linear_70:153)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_70:153"
                        x1="69.6694"
                        y1="29.9033"
                        x2="196.108"
                        y2="83.2919"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_70:153"
                        x1="165.348"
                        y1="-75.4466"
                        x2="-3.75136"
                        y2="103.645"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <div
                className="wow fadeInUp relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp"
                data-wow-delay=".1s"
              >
                <div className="mb-4 flex items-center justify-between border-b border-body-color border-opacity-10">
                  <h3 className="price mb-4 text-3xl font-bold text-black">
                  Collaboration
                  </h3>
                </div>

                <div>
                We believe in the power of collaboration and partnership. By working closely with our partners, we're able to co-create solutions that are both innovative and practical.
                </div>
                <div className="absolute bottom-0 right-0 z-[-1]">
                  <svg
                    width="179"
                    height="158"
                    viewBox="0 0 179 158"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                      fill="url(#paint0_linear_70:153)"
                    />
                    <path
                      opacity="0.3"
                      d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                      fill="url(#paint1_linear_70:153)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_70:153"
                        x1="69.6694"
                        y1="29.9033"
                        x2="196.108"
                        y2="83.2919"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_70:153"
                        x1="165.348"
                        y1="-75.4466"
                        x2="-3.75136"
                        y2="103.645"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <div
                className="wow fadeInUp relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp"
                data-wow-delay=".1s"
              >
                <div className="mb-4 flex items-center justify-between border-b border-body-color border-opacity-10">
                  <h3 className="price mb-4 text-3xl font-bold text-black">
                  Impact
                  </h3>
                </div>

                <div>
                At the end of the day, our goal is to make a positive impact on the performing arts community. Whether it's helping a struggling artist achieve financial stability or revitalizing a struggling art form, we measure our success by the real-world outcomes we achieve.
                </div>
                <div className="absolute bottom-0 right-0 z-[-1]">
                  <svg
                    width="179"
                    height="158"
                    viewBox="0 0 179 158"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                      fill="url(#paint0_linear_70:153)"
                    />
                    <path
                      opacity="0.3"
                      d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                      fill="url(#paint1_linear_70:153)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_70:153"
                        x1="69.6694"
                        y1="29.9033"
                        x2="196.108"
                        y2="83.2919"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_70:153"
                        x1="165.348"
                        y1="-75.4466"
                        x2="-3.75136"
                        y2="103.645"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
