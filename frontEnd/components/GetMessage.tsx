import React, { useState } from "react";
import { useContractRead } from "wagmi";
import { MessagingSigningABI, MessageSigning_ADDRESS } from "../constants";

type Props = {};

const GetMessage = (props: Props) => {
  const {
    data: getMessageData,
    isError: isGettingMessageError,
    isLoading: isGettingMessage,
  } = useContractRead({
    address: MessageSigning_ADDRESS,
    abi: MessagingSigningABI,
    functionName: "getMessage",
    watch: true,
    onSuccess(data) {
      console.log("Success", data);
    },
    onError(error) {
      console.log("Error", error);
    },
  });

  return (
    <div>
      <p>Message: {String(getMessageData)} </p>
      {isGettingMessageError && (
        <p className="text-sm font-normal">
          Error getting Message, <br /> Please Check if wallet is connected...
        </p>
      )}
      {isGettingMessage && <p>Getting Message....</p>}
    </div>
  );
};

export default GetMessage;
