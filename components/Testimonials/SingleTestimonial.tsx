/* eslint-disable react/no-unescaped-entities */
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>
    );
  }

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="flex items-center mb-8 border-b border-body-color border-opacity-10">
          <div className="relative mr-4 h-[75px] mb-4 w-full max-w-[75px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill />
          </div>
          <div className="w-full">
            <h5 className="mb-1 text-xl font-bold text-dark dark:text-white sm:text-xl md:text-[25px]">
            Manisha Pawar
            </h5>
            {/* <p className="text-sm text-body-color">{designation}</p> */}
          </div>
        </div>
        <p className="mb-8  pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
        Meet Manisha, a seasoned professional with over 27 years of diverse work experience, whose journey from the skies to the boardroom exemplifies resilience, innovation, and a relentless pursuit of excellence. Manisha, embarked on her career as a flight attendant for a prestigious international airline, where she honed her customer-centric approach and developed a keen understanding of global dynamics.<br></br><br></br>
        Driven by an entrepreneurial spirit, she transitioned into the business realm, establishing a successful chain of health clubs across North India. Her ability to navigate the complexities of the health and wellness industry showcased her strategic acumen and determination to create positive impacts on people's lives. <br></br><br></br>In a notable career shift, Manisha made waves in the corporate landscape by spearheading IKEA's sourcing operations from South Asia. Her leadership played a pivotal role in enhancing the brand's global supply chain efficiency and sustainability initiatives.<br></br><br></br>A proud alumna of IIM Trichy, Manisha brings a unique blend of hands-on experience, visionary leadership, and a global perspective to the table. As a co-founder, she is set to leverage her rich background to drive the success of our startup, embodying the spirit of innovation and trailblazing in every endeavour.

        </p>
        
      </div>
      
    </div>
  );
};

export default SingleTestimonial;
