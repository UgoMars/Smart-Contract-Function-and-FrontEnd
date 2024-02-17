import React from "react";
import SetName from "./SetName";
import GetName from "./GetName";
import SetNumber from "./SetNumber";
import GetNumber from "./GetNumber";
import SendMessage from "./SendMessage";
import GetMessage from "./GetMessage";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <h2 className="flex items-center justify-center text-4xl font-bold mt-6">
        Simple Dapp
      </h2>

      <p className="flex items-center justify-center text-3xl font-medium mt-6 mx-10">
        This Dapp Allows You to Send Message and get Message <br />
        Set Name and get Name, Set Number and get Number.
      </p>

      <div className="flex flex-row mt-20 items-center justify-center gap-20 font-bold">
        <div className="flex-col space-y-10">
          <SendMessage />

          <GetMessage />
        </div>

        <div className="flex-col space-y-10">
          <SetName />

          <GetName />
        </div>

        <div className="flex-col space-y-10">
          <SetNumber />
          <GetNumber />
        </div>
      </div>
    </>
  );
};

export default Hero;
