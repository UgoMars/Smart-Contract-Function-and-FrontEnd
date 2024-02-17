import React, { useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { MessagingSigningABI, MessageSigning_ADDRESS } from "../constants";

type Props = {};

const SetName = (props: Props) => {
  const [name, setName] = useState<string>("");

  const { config: setNameConfig } = usePrepareContractWrite({
    address: MessageSigning_ADDRESS,
    abi: MessagingSigningABI,
    functionName: "setName",
    args: [name],
  });

  const {
    data: setNameData,
    isError: isSettingNameError,
    write: setNameWrite,
  } = useContractWrite(setNameConfig);

  const { isLoading: isSettingName, isSuccess: isNameSetted } =
    useWaitForTransaction({
      hash: setNameData?.hash,
    });

  const handleSetName = async (e: any) => {
    e.preventDefault();
    console.log("Setting Name...");
    setNameWrite?.();
  };

  return (
    <>
      <form action="" onSubmit={handleSetName}>
        <div className="flex flex-col gap-2">
          <label htmlFor="Company_name">Name</label>
          <input
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50"
          />
        </div>

        <button className="mt-4 bg-[#7F56D9] px-6 py-2 text-white rounded-lg">
          Set Name
        </button>

        <article className="mt-4 text-sm">
          {isSettingName && <p>Setting Name...</p>}

          {isSettingNameError && <p>There is an Error in Setting Name</p>}
        </article>
      </form>
    </>
  );
};

export default SetName;
