import { css, keyframes } from "@emotion/react";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import Seo from "components/common/Seo";
import type { NextPage } from "next";
import Chevron from "public/svg/Chevron";
import { useEffect, useRef, useState } from "react";
import { mediaQuery } from "styles/common";
import addZero from "utils/addZero";
import scrollVideoPlay from "utils/scrollVideoPlay";

const Home: NextPage = () => {
  const refMainVideo = useRef<HTMLVideoElement>(null);
  const refMainText = useRef<HTMLDivElement>(null);
  const refChevronIcon = useRef<HTMLDivElement>(null);
  const [remainingTime, setRemainingTime] = useState({
    day: "31",
    hour: "23",
    minute: "59",
    second: "59",
  });

  useEffect(() => {
    if (refMainVideo.current && refMainText.current && refChevronIcon.current) {
      window.addEventListener(
        "scroll",
        scrollVideoPlay(refMainVideo.current, {
          fixed: [refMainText.current],
          opacity: [refChevronIcon.current],
        })
      );
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const deadline = +new Date("2022-10-31T23:59:59");
      const now = +new Date();

      const remaining = deadline - now;

      setRemainingTime({
        day: Math.floor(remaining / (1000 * 60 * 60 * 24)).toString(),
        hour: addZero(Math.floor((remaining / (1000 * 60 * 60)) % 24)),
        minute: addZero(Math.floor((remaining / (1000 * 60)) % 60)),
        second: addZero(Math.floor((remaining / 1000) % 60)),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Seo />
      <div css={mainWrapper}>
        <section css={videoSection}>
          <div css={mainTextWrapper} ref={refMainText}>
            <p css={p("900", "lg")}>{`아직 끝나지 않은\n토스의 성장을 위해`}</p>
            <p
              css={p("700", "sm")}
            >{`${remainingTime.day}일 ${remainingTime.hour}:${remainingTime.minute}:${remainingTime.second}`}</p>
          </div>
          <video
            css={video}
            src="/video/main-video.mp4"
            muted
            ref={refMainVideo}
          />
          <div
            css={{
              position: "fixed",
              bottom: "3rem",
              left: "50%",
              width: "4rem",
              height: "3rem",
              color: "#E2E2E2",
              animation: `${bounce("-50%")} ease-out 2s infinite`,
            }}
            ref={refChevronIcon}
          >
            <Chevron />
          </div>
        </section>
        <section css={videoSection}></section>
        <section css={videoSection}></section>
      </div>
    </>
  );
};

export default Home;

const mainWrapper = css({
  position: "relative",
  width: "100%",
  height: "auto",
  backgroundColor: "#863fff",
});

const videoSection = css({
  width: "100%",
  height: "200rem",
  position: "relative",
});

const video = css({
  width: "100%",
  height: "auto",
  [mediaQuery[1]]: {
    padding: "45vh 0",
  },
});

const mainTextWrapper = css({
  width: "100%",
  height: "auto",
  zIndex: 1,
  padding: "8rem 0",
  position: "fixed",
  fontWeight: "900",
  color: "#FFFFFF",
  [mediaQuery[1]]: {
    padding: "4rem 0rem",
  },
});

const p = (fontWeight: string, size: "lg" | "sm") =>
  css({
    textAlign: "center",
    whiteSpace: "pre-line",
    lineHeight: "1.2",
    fontWeight,
    fontSize: size === "lg" ? "5rem" : "4rem",
    padding: "1rem 0",
    [mediaQuery[1]]: {
      fontSize: "10vw",
    },
  });

const bounce = (translateX = "0") =>
  keyframes({
    "0%": {
      transform: `translate(${translateX}, 0)`,
    },
    "50%": {
      transform: `translate(${translateX}, 1rem)`,
    },
    "100%": {
      transform: `translate(${translateX}, 0)`,
    },
  });
