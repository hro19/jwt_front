import React from "react";
import { match, P } from "ts-pattern";

const obj = {
  aaa: "テキストaaaなのです",
  bbb: "Admin",
};

const result = match(obj)
  .with({ aaa: P.string }, (val) => {
    return val.aaa;
  })
  .otherwise(() => {
    return "それ以外のキーが入っています"; // デフォルト値を返します
  });

const data: string | undefined | null = "Hello";

const result2 = match(data)
  .with(P.nullish, () => {
    return "null or undefined";
  })
  .otherwise((h) => {
    return h;
  });

const arr:string[] | null = ["山", "海", "谷"];
// const arr:string[] = [];
const checkaArr = match(arr.length)
  .with(0, () => {
    return <p>ゼロです</p>;
  })
  .otherwise(() => {
    return (
      <ul>
        {arr.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    );
  });

const page = () => {
  return (
    <>
      <h2>{result}</h2>
      <p>{result2}</p>
        {checkaArr}
    </>
  );
};

export default page;
