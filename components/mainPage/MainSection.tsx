import { css, keyframes } from "@emotion/react";
import useDiffDate from "hooks/useDiffDate";
import Chevron from "public/svg/Chevron";
import { useEffect, useRef, useState } from "react";
import { mediaQuery } from "styles/common";
import scrollEventOpacity from "utils/scrollEvent/scrollEventOpacity";
import scrollEventVideo from "utils/scrollEvent/scrollEventVideo";

const MainSection = () => {
  const refMainVideo = useRef<HTMLVideoElement>(null);
  const refChevronIcon = useRef<HTMLDivElement>(null);
  const refSection = useRef<HTMLDivElement>(null);

  const deadline = "2022-10-31T23:59:59";
  const { date } = useDiffDate(deadline);

  useEffect(() => {
    if (refChevronIcon.current && refSection.current) {
      window.addEventListener(
        "scroll",
        scrollEventOpacity(refChevronIcon.current, refSection.current)
      );
    }
  }, []);

  useEffect(() => {
    if (refMainVideo.current && refSection.current) {
      window.addEventListener(
        "scroll",
        scrollEventVideo(refMainVideo.current, refSection.current)
      );
    }
  }, []);

  return (
    <section css={videoSection("400vh")} ref={refSection}>
      <div css={videoWrapper}>
        <div css={mainTextWrapper}>
          <p
            css={p("900", "lg", true)}
          >{`아직 끝나지 않은\n토스의 성장을 위해`}</p>
          <p
            css={p("700", "sm", true)}
          >{`${date.day}일 ${date.hour}:${date.minute}:${date.second}`}</p>
        </div>
        <video
          css={mainVideo}
          src="/video/main-video.mp4"
          muted
          ref={refMainVideo}
        />
      </div>
      <div css={chevron} ref={refChevronIcon}>
        <Chevron />
      </div>
    </section>
  );
};

export default MainSection;

const videoSection = (height: string) =>
  css({
    width: "100%",
    height,
    position: "relative",
  });

const mainVideo = css({
  width: "100%",
  height: "auto",
});

const mainTextWrapper = css({
  width: "100%",
  height: "auto",
  zIndex: 1,
  padding: "8rem 0",
  position: "absolute",
  fontWeight: "900",
  color: "#FFFFFF",
  [mediaQuery[1]]: {
    padding: "4rem 0rem",
    position: "unset",
  },
});

const videoWrapper = css({
  width: "100%",
  height: "auto",
  position: "sticky",
  top: "0",
});

const p = (fontWeight: string, size: "lg" | "sm" | "xs", align: boolean) => {
  const sizeObj = {
    lg: "5rem",
    sm: "4rem",
    xs: "3rem",
  };

  return css({
    textAlign: align ? "center" : "unset",
    display: "block",
    whiteSpace: "pre-line",
    lineHeight: "1.2",
    fontWeight,
    fontSize: sizeObj[size],
    padding: "1rem 0",
    paddingLeft: align ? "unset" : "10vw",
    [mediaQuery[1]]: {
      fontSize: "10vw",
    },
  });
};

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

const chevron = css({
  position: "fixed",
  bottom: "3rem",
  left: "50%",
  width: "4rem",
  height: "3rem",
  color: "#E2E2E2",
  animation: `${bounce("-50%")} ease-out 2s infinite`,
});
