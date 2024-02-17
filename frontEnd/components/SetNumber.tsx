import React, { useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { MessagingSigningABI, MessageSigning_ADDRESS } from "../constants";

type Props = {};

const SetNumber = (props: Props) => {
  const [number, SetNumber] = useState();

  const { config: setNumberConfig } = usePrepareContractWrite({
    address: MessageSigning_ADDRESS,
    abi: MessagingSigningABI,
    functionName: "setNumber",
    args: [number],
  });

  const {
    data: setNumberData,
    isError: isSettingNumberError,
    write: setNumberWrite,
  } = useContractWrite(setNumberConfig);

  const { isLoading: isSettingNumber, isSuccess: isNumberSetted } =
    useWaitForTransaction({
      hash: setNumberData?.hash,
    });

  const handleSetNumber = async (e: any) => {
    e.preventDefault();
    console.log("Setting Name...");
    setNumberWrite?.();
  };

  return (
    <>
      <form action="" onSubmit={handleSetNumber}>
        <div className="flex flex-col gap-2">
          <label htmlFor="Company_name">Number</label>
          <input
            value={number}
            onChange={(e: any) => SetNumber(e.target.value)}
            type="number"
            name="number"
            id="number"
            placeholder="Number"
            className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50"
          />
        </div>

        <button className="mt-4 bg-[#7F56D9] px-6 py-2 text-white rounded-lg">
          Set Number
        </button>

        <article className="mt-4 text-sm">
          {isSettingNumber && <p>Setting Number...</p>}

          {isSettingNumberError && <p>There is an Error in Setting Number</p>}
        </article>
      </form>
    </>
  );
};

export default SetNumber;
