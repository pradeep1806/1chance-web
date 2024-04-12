import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 relative z-10">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                MSJ Art
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-white  sm:text-lg md:text-xl">
                MSJ Art was born out of a passion for the performing arts and a recognition of the need for innovative business solutions in the industry. Founded by a team of artists, entrepreneurs, and industry experts, we bring a unique blend of creativity and business acumen to the table.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 w-full">
          <Image
            src="/images/hero/hero.jpg"
            alt="founder1"
            layout="responsive"
            width={1920}
            height={1080}
            objectFit="cover"
            quality={100}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
