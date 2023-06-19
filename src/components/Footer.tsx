import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/solid";

type Props = {};

function Footer({}: Props) {
  return (
    <section className="bg-tertiary py-16 px-4">
      <div className="max-w-[1240px] mx-auto text-white flex justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-8">Logo</h1>
          <p>Made with use of TheMealDB</p>
          <div className="text-gray-400 cursor-pointer">
            <h4 className="">-BartekTheSnowmann-</h4>
            <CodeBracketIcon className="h-6 w-6 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
