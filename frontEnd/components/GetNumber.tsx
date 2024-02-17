import React from "react";
import { useContractRead } from "wagmi";
import { MessagingSigningABI, MessageSigning_ADDRESS } from "../constants";

type Props = {};

const GetNumber = (props: Props) => {
  const {
    data: getNumberData,
    isError: isGettingNumberError,
    isLoading: isGettingNumber,
  } = useContractRead({
    address: MessageSigning_ADDRESS,
    abi: MessagingSigningABI,
    functionName: "getNumber",
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
      <p>Number: {Number(getNumberData)} </p>
      {isGettingNumberError && (
        <p className="text-sm font-normal">
          Error getting Number, <br />
          Please Check if wallet is connected
        </p>
      )}
      {isGettingNumber && <p>Getting Number....</p>}
    </div>
  );
};

export default GetNumber;
