import { manrope } from "@/app/Fonts";

const FeatureCard = () => {
  return (
    <article className="flex flex-col md:flex-row lg:flex-col items-center  space-y-5">
      <div className="w-14 h-14 flex flex-col  items-center justify-center border-2  rounded-full border-zinc-600">
        <span className=" text-indigo-950 text-2xl font-semibold  leading-10">
          1
        </span>
      </div>

      <section className="flex flex-col space-y-6 md:items-start md:ms-6 lg:items-center lg:ms-0">
        <div className=" text-center text-indigo-950 text-[28px] font-semibold font-['Fraunces 144pt'] leading-9">
          Actionable insights
        </div>

        <div
          className={` max-w-[493px] lg:max-w-[345px] text-center md:text-start lg:text-center  text-zinc-600  text-base font-normal  leading-7 ${manrope.className} `}
        >
          Optimize your products, improve customer satisfaction and stay ahead
          of the competition with our product data analytics.
        </div>
      </section>
    </article>
  );
};

export default FeatureCard;
