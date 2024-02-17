import React, { useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { MessagingSigningABI, MessageSigning_ADDRESS } from "../constants";

type Props = {};

const SendMessage = (props: Props) => {
  const [message, setMessage] = useState<string>("");

  const { config: sendMessageConfig } = usePrepareContractWrite({
    address: MessageSigning_ADDRESS,
    abi: MessagingSigningABI,
    functionName: "sendMessage",
    args: [message],
  });

  const {
    data: sendMessageData,
    isError: isSendingMessageError,
    write: sendMessageWrite,
  } = useContractWrite(sendMessageConfig);

  const { isLoading: isSendingMessage, isSuccess: isMessageSent } =
    useWaitForTransaction({
      hash: sendMessageData?.hash,
    });

  const handleSetName = async (e: any) => {
    e.preventDefault();
    console.log("Setting Name...");
    sendMessageWrite?.();
  };

  return (
    <>
      <form action="" onSubmit={handleSetName}>
        <div className="flex flex-col gap-2">
          <label htmlFor="Company_name">Message</label>
          <input
            value={message}
            onChange={(e: any) => setMessage(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Your message"
            className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50"
          />
        </div>

        <button className="mt-4 bg-[#7F56D9] px-6 py-2 text-white rounded-lg">
          Send Message
        </button>

        <article className="mt-4 text-sm">
          {isSendingMessage && <p>Sending Message...</p>}

          {/* {isSendingMessageError && <p>There is an Error in Setting Name</p>} */}

          {isMessageSent && <p>Message Signed and Sent Successfully... </p>}
        </article>
      </form>
    </>
  );
};

export default SendMessage;
