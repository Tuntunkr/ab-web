import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { AiOutlineGithub } from "react-icons/ai";
import TweetEmbed from "react-tweet-embed";
import { useEffect, useState } from "react";
import Script from "next/script";

const Result = () => {
  const [libExist, setlibExist] = useState(false);

  const s = () => {
    //first update line 149 as your requirenment
    //pros:- this /learn page render fast
    //cons:- after loading script ,it renders whole twitter data at once so we have to wait minimum 2s
    //future implementation ?? instead of waiting to render twitter data we can show loding gif

    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => {
        setlibExist(true);
      };
      document.body.appendChild(script);
    }, []);
  };
  s();

  return (
    <>
      <section className="container mx-auto">
        {/* new card detais */}
        <div className="flex  justify-center mt-5">
          <div className="text-center text-[#101828] text-lg">
            <h1>
              Bitcoin: Economics, Technology, and
              <br /> Governance
            </h1>
            <p className="text-[#667085] text-center  ">
              The scarcity of paper money is caused and ensured by unequal
              access to technology, and the scarcity of book money, in its turn,
              is regulated by legal rules.
            </p>
          </div>
        </div>

        <div className="qwert border-2 p-5 w-200 mt-5">
          <img
            className=" w-full h-80 object-cover rounded-md "
            src="https://imgur.com/BvW2xD1.png"
            alt="apple watch photo"
          />
        </div>

        <div className=" text-[#101828]">
          <h1>Introduction</h1>
          <p className="text-[#667085] ">
            The scarcity of paper money is caused and ensured by unequal access
            to technology, and the scarcity of book money, in its turn, is
            regulated by legal rules.
          </p>
        </div>
      </section>
    </>
  );
};

export default Result;
