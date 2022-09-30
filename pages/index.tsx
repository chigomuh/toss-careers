import { css } from "@emotion/react";
import Seo from "components/common/Seo";
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { mediaQuery } from "styles/common";
import addZero from "utils/addZero";
import scrollVideoPlay from "utils/scrollVideoPlay";

const Home: NextPage = () => {
  const refMainVideo = useRef<HTMLVideoElement>(null);
  const refMainText = useRef<HTMLDivElement>(null);
  const [remainingTime, setRemainingTime] = useState({
    day: "31",
    hour: "23",
    minute: "59",
    second: "59",
  });

  useEffect(() => {
    if (refMainVideo.current && refMainText.current) {
      window.addEventListener(
        "scroll",
        scrollVideoPlay(refMainVideo.current, [refMainText.current])
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
        </section>
      </div>
    </>
  );
};

export default Home;

const mainWrapper = css({
  position: "relative",
  width: "100%",
  height: "400rem",
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
