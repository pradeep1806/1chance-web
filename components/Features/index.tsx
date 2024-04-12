import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className=" py-16 md:py-20 lg:py-28"
      >
        <div className="container w-full">
          <SectionTitle
            title="Our Vision"
            paragraph="Imagine a world where the performing arts flourish, not just as a form of expression but as a thriving ecosystem. MSJ Art envisions a future where artists can focus on their craft without compromising financial stability, where audiences have unparalleled access to diverse and immersive experiences, and where the performing arts industry becomes a hub of innovation and collaboration."
            center
          />

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Features;
