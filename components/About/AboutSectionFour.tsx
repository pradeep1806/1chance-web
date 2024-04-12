/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionFour = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16  md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap text-center items-center">
            <div className="w-full px-4 ">
              {/* <SectionTitle
                title="Our Vision"
                paragraph=""
                mb="44px"
              /> */}
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
          Our Vision
        </h2>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">Imagine a world where the performing arts flourish, not just as a form of expression but as a thriving ecosystem. MSJ Art envisions a future where artists can focus on their craft without compromising financial stability, where audiences have unparalleled access to diverse and immersive experiences, and where the performing arts industry becomes a hub of innovation and collaboration.
</p>

              
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;
