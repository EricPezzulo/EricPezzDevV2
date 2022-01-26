import Head from "next/head";
import Image from "next/image";
import Button from "./components/Button";
import { Github } from "@styled-icons/entypo-social/Github";
import { Twitter } from "@styled-icons/icomoon/Twitter";
import { Discord } from "@styled-icons/simple-icons/Discord";
import { Email } from "@styled-icons/material/Email";
import { GlobeAmericas } from "@styled-icons/fa-solid/GlobeAmericas";
import { Youtube } from "@styled-icons/entypo-social/Youtube";
import styles from "../styles/home.module.css";
import { useState } from "react";
export default function Home() {
  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard("eric.pezzulo@gmail.com")
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [isCopied, setIsCopied] = useState(false);
  const [message, setMessage] = useState("");
  const submitForm = () => {
    // Check to make sure text area is not empty.
    // send that message to server/email
    console.log(message);
  };
  return (
    <div className="flex flex-col bg-dark-gray-bg h-auto w-screen">
      <Head>
        <title>EricPezzDev</title>
        <meta name="EricPezzDev" content="Web development" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url(`https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap`);
        </style>
      </Head>

      <section className="flex flex-col min-w-full min-h-screen overflow-auto">
        <div className="flex w-full justify-end absolute mt-5">
          <Button
            btnTitle="Blogs"
            btnColor="transparent"
            btnTextColor="text-white"
            paddingX="px-3"
            paddingY="py-1"
            borderRadius="rounded-lg"
            textSize="text-3xl"
            fontWeight="font-thin"
            fontStyle="font-custom"
            hover="hover:text-shadow-white hover:mt-3 duration-150 ease-out"
            ifClicked={null}
          />
          <Button
            btnTitle="Projects"
            btnColor="transparent"
            btnTextColor="text-white"
            paddingX="px-3"
            paddingY="py-1"
            borderRadius="rounded-lg"
            textSize="text-3xl"
            fontWeight="font-thin"
            fontStyle="font-custom"
            hover="hover:text-shadow-white hover:mt-3 duration-150 ease-out"
            ifClicked={null}
          />
          <Button
            btnTitle="About Me"
            btnColor="transparent"
            btnTextColor="text-white"
            paddingX="px-3"
            paddingY="py-1"
            borderRadius="rounded-lg"
            textSize="text-3xl"
            fontWeight="font-thin"
            fontStyle="font-custom"
            hover="hover:text-shadow-white hover:mt-3 duration-150 ease-out"
            ifClicked={null}
          />
        </div>
        <div className="flex flex-col grow object-center justify-center items-center text-white text-5xl font-custom font-thin ">
          <div>
            <h1 className="mb-2 font-custom text-4xl text-gray-100 md:text-6xl">
              hi, I&apos;m <br className="block md:hidden" />
              <span className="relative">
                <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                  Eric <span className="text-3xl md:text-5xl">👋.</span>
                </span>
                <span
                  className={`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-dark-gray-bg w-full animate-type will-change`}
                ></span>
              </span>
            </h1>
          </div>
          <div className="flex overflow-hidden">
            <h1 className="mb-2 font-custom text-2xl text-gray-100 sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="relative">
                <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap">
                  I like to build things with react and node.js
                </span>
                <span
                  className={`${styles.cursorBottom} absolute -bottom-0 left-0 -top-1 inline-block bg-dark-gray-bg w-full animate-bottom will-change`}
                ></span>
              </span>
            </h1>
          </div>
        </div>
        <div
          id="socialHandles"
          className="flex flex-col font-custom absolute bottom-2 text-lg"
        >
          <h2 className="text-white text-4xl font-light ml-2">Web Developer</h2>
          <div className="flex">
            <div className="flex items-center justify-center h-auto">
              <div
                className="group text-white flex items-center mx-2"
                onClick={() => window.open(`http://twitter.com/EricPezzDev`)}
              >
                <div className="w-6 h-6 group-hover:drop-shadow-white hover:cursor-pointer">
                  <Twitter />
                </div>
                <p className="ml-2 mt-2 group-hover:text-shadow-white hover:cursor-pointer">
                  @ericpezzdev
                </p>
              </div>
              <div
                className="group text-white flex items-center mx-2"
                onClick={() => window.open(`https://github.com/EricPezzulo`)}
              >
                <div className="w-6 h-6 group-hover:drop-shadow-white hover:cursor-pointer">
                  <Github />
                </div>
                <p className="ml-2 mt-2 group-hover:text-shadow-white hover:cursor-pointer">
                  ericpezzulo
                </p>
              </div>
              <div
                className="group text-white flex items-center mx-2"
                onClick={() => window.open(`https://discord.gg/VdZ2qxcg8D`)}
              >
                <div className="w-6 h-6 group-hover:drop-shadow-white hover:cursor-pointer">
                  <Discord />
                </div>
                <p className="ml-2 mt-2 group-hover:text-shadow-white hover:cursor-pointer">
                  xEurkz#8244
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="group text-white flex items-center mx-2">
              <div className="w-6 h-6 ">
                <Email />
              </div>
              <p className="ml-2 mt-2 ">ericpezzulo@gmail.com</p>
            </div>
            <div className="group text-white flex items-center mx-2">
              <div className="w-6 h-6 ">
                <GlobeAmericas />
              </div>
              <p className="ml-2 mt-2 ">New York, USA</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col min-w-full min-h-screen mt-5 overflow-x-hidden">
        <div className="ml-2">
          <h2 className="text-white text-4xl font-light">About Me</h2>
        </div>
      </section>

      <footer className="flex flex-col bg-black h-footer">
        <div className="flex p-4 justify-center">
          <h3 className="font-light text-4xl text-white underline p-2">
            Connect With Me
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col w-min ">
            <div className="flex justify-center">
              <textarea
                className="rounded-md bg-dark-gray-bg outline-none text-white p-2 text-lg font-light resize-none"
                name="contactsubmission"
                id="contactsub"
                cols={50}
                rows={7}
                placeholder="write your message here &#10;remember to include your name and a prefered way to contact you"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-end mt-4">
              <Button
                btnTitle="Submit"
                btnColor="bg-blue-500"
                btnTextColor="text-white"
                paddingX="px-3"
                paddingY="py-1"
                borderRadius="rounded-lg"
                textSize="text-xl"
                fontWeight="font-light"
                fontStyle="font-custom"
                hover="hover:text-shadow-white hover:mr-3 duration-150 ease-out"
                ifClicked={submitForm}
              />
            </div>
          </div>
        </div>
        <div className="flex m-2 items-center justify-center">
          <div
            className="text-dark-icons w-10 h-10 hover:drop-shadow-white hover:cursor-pointer mx-3 hover:text-white"
            onClick={() => window.open(`https://twitter.com/EricPezzDev`)}
            title="Follow me on Twitter"
          >
            <Twitter />
          </div>
          <div
            className="text-dark-icons w-10 h-10 hover:drop-shadow-white hover:cursor-pointer mx-3 hover:text-white"
            onClick={() => window.open(`https://github.com/EricPezzulo`)}
            title="Check out my GitHub"
          >
            <Github />
          </div>
          <div
            className="text-dark-icons w-10 h-10 hover:drop-shadow-white hover:cursor-pointer mx-3 hover:text-white"
            onClick={() => window.open(`https://discord.gg/VdZ2qxcg8D`)}
            title="Talk to me on Discord"
          >
            <Discord />
          </div>
          <div
            className="text-dark-icons w-10 h-10 hover:drop-shadow-white hover:cursor-pointer mx-3 hover:text-white"
            onClick={() =>
              window.open(
                `https://www.youtube.com/channel/UCyTg3VejLrRcijRMjfcWQ1Q`
              )
            }
            title="Check out my YouTube channel"
          >
            <Youtube />
          </div>
          <div className="group flex flex-col ">
            <div
              className="text-dark-icons w-10 h-10 hover:drop-shadow-white hover:cursor-pointer mx-3 hover:text-white"
              onClick={handleCopyClick}
              title="Click to copy my email to clipboard"
            >
              <Email />
            </div>
          </div>
        </div>
        {isCopied && (
          <div className="flex justify-center">
            <p className="text-white rounded bg-dark-icons px-2 py-1">
              email copied to clipboard!
            </p>
          </div>
        )}
      </footer>
    </div>
  );
}
