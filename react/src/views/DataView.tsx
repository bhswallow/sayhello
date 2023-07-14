import { useClient } from "../hooks/useClient";
import { useAddressContext } from "../def-hooks/addressContext";
import { useEffect, useState } from "react";

export default function DataView() {
  const client = useClient();
  const { address } = useAddressContext();
  const sendSay = client.TestdemoTestdemo.tx.sendMsgSay;

  const SayHello = async (word: string): Promise<void> => {
    alert(word);
    const memo = "";
    const playload = {
      creator: address,
      word: word,
    };
    const send = () =>
      sendSay({
        value: playload,
        fee: { amount: [{ amount: "0", denom: "stake" }], gas: "200000" },
        memo,
      });

    const result = await send();
    console.log("<===Tx hash:", result.transactionHash);
  };
  return (
    <div>
      <button onClick={() => SayHello("test")}>Say hello</button>
    </div>
  );
}
