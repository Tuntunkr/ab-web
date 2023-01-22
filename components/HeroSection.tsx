import React from "react";

function HeroSection() {
  return (
    <>
      <div className="conatainer mx-auto">
        <section className="contributor-section  secSpacer ">
          <div className="card-box">
            <h1 className="text-bold text-center text-6xl text-white ">
              Curated for the <br />
              <span className="heading ">Contributors.</span>
            </h1>
            <p className="mpara">
              Awesome dot is a company that curates the best resources, projects
              and
              <br /> learning in the polkadot ecosystem.
            </p>
            <input
              type="search"
              placeholder="Find our Projects"
              className="mr-1
           mb-4 w-full rounded border-[#D0D5DD] py-2.5 px-2 text-[#667085] focus:outline-none sm:mr-3 sm:w-80 lg:mb-0"
            />
            <button className="btn2">Search</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
