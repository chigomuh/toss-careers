import { css, keyframes } from "@emotion/react";
import Seo from "components/common/Seo";
import type { NextPage } from "next";
import Chevron from "public/svg/Chevron";
import { useEffect, useRef, useState } from "react";
import { breakpoints, mediaQuery } from "styles/common";
import getDiffNowDeadline from "utils/getDiffNowDeadline";
import scrollVideoPlay from "utils/scrollVideoPlay";

const Home: NextPage = () => {
  const refMainVideo = useRef<HTMLVideoElement>(null);
  const refChevronIcon = useRef<HTMLDivElement>(null);
  const refChartVideo = useRef<HTMLVideoElement>(null);
  const refChartText1 = useRef<HTMLDivElement>(null);
  const refChartText2 = useRef<HTMLDivElement>(null);
  const refChartText3 = useRef<HTMLDivElement>(null);
  const [remainingTime, setRemainingTime] = useState({
    day: "31",
    hour: "23",
    minute: "59",
    second: "59",
  });

  useEffect(() => {
    if (refMainVideo.current && refChevronIcon.current) {
      if (!refMainVideo.current.parentElement) return;

      const { top } =
        refMainVideo.current.parentElement.getBoundingClientRect();
      window.addEventListener(
        "scroll",
        scrollVideoPlay(
          refMainVideo.current,
          top,
          0,
          {
            opacity: [refChevronIcon.current],
          },
          breakpoints[1]
        )
      );
    }
  }, []);

  useEffect(() => {
    if (refChartVideo.current) {
      if (
        !refChartVideo.current.parentElement ||
        !refMainVideo.current ||
        !refChartText1.current ||
        !refChartText2.current ||
        !refChartText3.current
      )
        return;
      const { clientHeight } = refMainVideo.current;
      const { innerHeight } = window;
      const addSpace = clientHeight - innerHeight;

      const { top } =
        refChartVideo.current.parentElement.getBoundingClientRect();
      window.addEventListener(
        "scroll",
        scrollVideoPlay(
          refChartVideo.current,
          top,
          addSpace,
          {
            transform: [
              refChartText1.current,
              refChartText2.current,
              refChartText3.current,
            ],
          },
          breakpoints[1]
        )
      );
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const deadline = "2022-10-31T23:59:59";
      const { day, hour, minute, second } = getDiffNowDeadline(deadline);

      setRemainingTime({
        day,
        hour,
        minute,
        second,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Seo />
      <div css={mainWrapper}>
        <section css={videoSection("300vh", "900")}>
          <div css={videoWrapper}>
            <div css={mainTextWrapper}>
              <p
                css={p("900", "lg", true)}
              >{`아직 끝나지 않은\n토스의 성장을 위해`}</p>
              <p
                css={p("700", "sm", true)}
              >{`${remainingTime.day}일 ${remainingTime.hour}:${remainingTime.minute}:${remainingTime.second}`}</p>
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
        <section css={videoSection("600vh", "800")}>
          <div css={videoWrapper}>
            <div css={mainTextWrapper}>
              <h2
                css={h2}
                ref={refChartText1}
              >{`지금보다 더 편리하고 안전한 금융을 위한\n토스의 도전은 계속됩니다`}</h2>
              <h2
                css={h2}
                ref={refChartText2}
              >{`사람들의 삶을 완전히 바꾸었고,\n앞으로도 바꿔나갈 혁신의 여정에\n함께할 동료를 기다립니다`}</h2>
              <h2
                css={h2}
                ref={refChartText3}
              >{`토스가 꾸는 꿈의 크기는\n계속 커지고 있습니다`}</h2>
            </div>
            <video
              css={chartVideo}
              src="/video/chart-video.mp4"
              muted
              ref={refChartVideo}
            />
          </div>
        </section>
        <section css={videoSection("300vh", "700")}></section>
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

const videoSection = (height: string, zIndex: string) =>
  css({
    width: "100%",
    height: height,
    position: "relative",
    zIndex,
  });

const mainVideo = css({
  width: "100%",
  height: "auto",
  [mediaQuery[1]]: {
    position: "absolute",
    bottom: "0",
  },
});

const chartVideo = css({
  width: "100%",
  height: "auto",
  [mediaQuery[1]]: {
    position: "absolute",
    transform: "scaleX(1.5)",
    bottom: "10rem",
  },
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
  },
});

const videoWrapper = css({
  width: "100%",
  height: "100vh",
  position: "absolute",
  top: "0",
  left: "0",
  [mediaQuery[1]]: {
    overflow: "hidden",
  },
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

const h2 = css({
  whiteSpace: "pre-line",
  lineHeight: "1.2",
  fontWeight: "700",
  fontSize: "5rem",
  padding: "1rem 0",
  paddingLeft: "25vw",
  position: "absolute",
  top: "20vh",
  left: "0",
  opacity: "0",
  transform: "translateY(0%)",
  [mediaQuery[3]]: {
    fontSize: "3rem",
    paddingLeft: "20vw",
  },
  [mediaQuery[2]]: {
    fontSize: "2rem",
    paddingLeft: "15vw",
  },
  [mediaQuery[1]]: {
    fontSize: "2rem",
    paddingLeft: "unset",
    padding: "1rem 1rem",
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

const chevron = css({
  position: "fixed",
  bottom: "3rem",
  left: "50%",
  width: "4rem",
  height: "3rem",
  color: "#E2E2E2",
  animation: `${bounce("-50%")} ease-out 2s infinite`,
});
