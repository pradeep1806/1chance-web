/* eslint-disable react/no-unescaped-entities */
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import Image from "next/image";
import Link from "next/link";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Manisha Pawar",
    designation: "Founder @TailGrids",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Devid Weilium",
    designation: "Founder @UIdeck",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-primary/[.03] py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="ABOUT THE FOUNDERS" paragraph="" center />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-1">
          <div
            className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8"
            data-wow-delay=".1s"
          >
            <div className="mb-8 flex items-center border-b border-body-color border-opacity-10">
              <div className="relative mr-4 mb-4 h-[125px] w-full max-w-[125px] overflow-hidden rounded-full">
                <Image
                  src="/images/testimonials/manisha.png"
                  alt={"founder1"}
                  width={125}
                  height={125}
                />
              </div>
              <div className="w-full">
                <h5 className="mb-1 text-2xl font-bold text-dark dark:text-white sm:text-2xl md:text-[35px]">
                  MANISHA PAWAR
                </h5>
                <a className="mr-6 text-base hover:text-primary" target="blank" href={"https://www.linkedin.com/in/manishapawar6920/"}>View LinkedIn Profile</a>
              </div>
            </div>
            <p className="mb-8  pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
              Meet Manisha, a seasoned professional with over 27 years of
              diverse work experience, whose journey from the skies to the
              boardroom exemplifies resilience, innovation, and a relentless
              pursuit of excellence. Manisha, embarked on her career as a flight
              attendant for a prestigious international airline, where she honed
              her customer-centric approach and developed a keen understanding
              of global dynamics.<br></br>
              <br></br>
              Driven by an entrepreneurial spirit, she transitioned into the
              business realm, establishing a successful chain of health clubs
              across North India. Her ability to navigate the complexities of
              the health and wellness industry showcased her strategic acumen
              and determination to create positive impacts on people's lives.{" "}
              <br></br>
              <br></br>In a notable career shift, Manisha made waves in the
              corporate landscape by spearheading IKEA's sourcing operations
              from South Asia. Her leadership played a pivotal role in enhancing
              the brand's global supply chain efficiency and sustainability
              initiatives.<br></br>
              <br></br>A proud alumna of IIM Trichy, Manisha brings a unique
              blend of hands-on experience, visionary leadership, and a global
              perspective to the table. As a co-founder, she is set to leverage
              her rich background to drive the success of our startup, embodying
              the spirit of innovation and trailblazing in every endeavour.
            </p>
          </div>

          <div
            className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8"
            data-wow-delay=".1s"
          >
            <div className="mb-8 flex items-center border-b border-body-color border-opacity-10">
              <div className="relative mr-4 mb-4 h-[125px] w-full max-w-[125px] overflow-hidden rounded-full">
                <Image
                  src="/images/testimonials/sanjay.png"
                  alt={"founder1"}
                  width={125}
                  height={125}
                />
              </div>
              <div className="w-full">
                <h5 className="mb-1 text-2xl font-bold text-dark dark:text-white sm:text-2xl md:text-[35px]">
                SANJAY PAWAR
                </h5>
                <a className="mr-6 text-base hover:text-primary" target="blank" href={"https://www.linkedin.com/in/sanjay-pawar-1129172ab/"}>View LinkedIn Profile</a>
              </div>
            </div>
            <p className="mb-8  pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
            Introducing Sanjay Pawar, a versatile professional whose journey is a tapestry woven with threads of entertainment, culinary exploration, and global experiences. Born into a lineage adorned with cinematic brilliance, Sanjay's upbringing was immersed in the enchanting world of films, with his parents being prominent figures in the industry and his grandmother, the legendary actress Lalitha Pawar. With roots deeply embedded in entertainment, Sanjay's wanderlust led him to the skies, where his ventures in the airline business took him around the globe, exposing him to diverse cultures and culinary traditions. Drawing inspiration from his travels, Sanjay delved into the culinary arts, mastering cuisines from around the world and ultimately becoming a renowned food consultant. Now, as he joins our team, Sanjay brings with him a wealth of knowledge, creativity, and entrepreneurial flair, poised to make a significant impact as we venture into the innovative realm of apps.
            </p>
          </div>

          <div
            className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8"
            data-wow-delay=".1s"
          >
            <div className="mb-8 flex items-center border-b border-body-color border-opacity-10">
              <div className="relative mr-4 mb-4 h-[125px] w-full max-w-[125px] overflow-hidden rounded-full">
                <Image
                  src="/images/testimonials/jasmeet.png"
                  alt={"founder1"}
                  width={125}
                  height={125}
                />
              </div>
              <div className="w-full">
                <h5 className="mb-2 text-2xl font-bold text-dark dark:text-white sm:text-2xl md:text-[35px]">
                  JASMEET PAL SINGH
                </h5>
               <a className="mr-6 text-base hover:text-primary" target="blank" href={"https://www.linkedin.com/in/jasmeetpalsingh/"}>View LinkedIn Profile</a>
              </div>
            </div>
            <p className="mb-8  pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
              Jasmeet Pal Singh, a seasoned professional who epitomises the
              ethos of excellence in every endeavour he undertakes. With over 23
              years of enriching experience both in India and abroad, Jasmeet
              has carved a distinguished niche for himself across diverse
              domains including Experiential Marketing, Digital Planning,
              Strategic Planning, and Project Management.
              <br></br>
              <br></br>
              At the heart of Jasmeet's approach lies his unwavering commitment
              to understanding and exceeding customer expectations. His
              proficiency in navigating the intricacies of experiential
              technologies over the past two decades underscores his mastery in
              translating client requirements into innovative real-life
              solutions, leveraging the latest tools and technologies.<br></br>
              <br></br>Jasmeet's academic prowess further fortifies his
              expertise. A double Post Graduate in Business Management from the
              prestigious IIM Trichy and IMT Ghaziabad, where he graduated with
              first division honors in both programs, Jasmeet's academic journey
              began at Delhi University, where he pursued Business Economics
              with a Bachelor's degree.
              <br></br>
              <br></br>Guided by the philosophy "Aim for excellence and success
              will follow," Jasmeet Pal Singh continues to inspire and lead by
              example, setting new benchmarks of achievement in every venture he
              embarks upon.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-5 right-0 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-0 bottom-5 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
