import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import { mediaQuery } from "styles/common";
import addRef from "utils/addRef";
import scrollEventText from "utils/scrollEvent/scrollEventText";
import scrollEventVideo from "utils/scrollEvent/scrollEventVideo";

const ChartSection = () => {
  const refChartVideo = useRef<HTMLVideoElement>(null);
  const refChartText = useRef<HTMLElement[]>([]);
  const refSection = useRef<HTMLElement>(null);

  useEffect(() => {
    if (refChartVideo.current && refSection.current) {
      window.addEventListener(
        "scroll",
        scrollEventVideo(refChartVideo.current, refSection.current)
      );
    }
  }, []);

  useEffect(() => {
    if (refChartText.current && refSection.current) {
      window.addEventListener(
        "scroll",
        scrollEventText(refChartText.current, refSection.current)
      );
    }
  });

  return (
    <section css={videoSection("700vh")} ref={refSection}>
      <div css={videoWrapper}>
        <div css={mainTextWrapper}>
          <h2
            css={h2}
            ref={addRef(refChartText, 0)}
          >{`지금보다 더 편리하고 안전한 금융을 위한\n토스의 도전은 계속됩니다`}</h2>
          <h2
            css={h2}
            ref={addRef(refChartText, 1)}
          >{`사람들의 삶을 완전히 바꾸었고,\n앞으로도 바꿔나갈 혁신의 여정에\n함께할 동료를 기다립니다`}</h2>
          <h2
            css={h2}
            ref={addRef(refChartText, 2)}
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
  );
};

export default ChartSection;

const videoSection = (height: string) =>
  css({
    width: "100%",
    height,
    position: "relative",
  });

const videoWrapper = css({
  overflowX: "hidden",
  width: "100%",
  height: "auto",
  position: "sticky",
  top: "0",
  [mediaQuery[1]]: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

const mainTextWrapper = css({
  width: "100%",
  height: "auto",
  zIndex: 10,
  padding: "8rem 0",
  position: "absolute",
  fontWeight: "900",
  color: "#FFFFFF",
  [mediaQuery[1]]: {
    padding: "8rem 0rem",
    position: "unset",
  },
});

const chartVideo = css({
  width: "100%",
  height: "auto",
  transform: "scaleX(1.5)",
});

const h2 = css({
  lineHeight: "1.2",
  fontWeight: "700",
  fontSize: "5rem",
  padding: "1rem 0",
  paddingLeft: "15vw",
  position: "absolute",
  top: "20vh",
  left: "0",
  opacity: "0",
  transform: "translateY(0%)",
  wordBreak: "keep-all",
  maxWidth: "50rem",
  [mediaQuery[3]]: {
    fontSize: "3rem",
    maxWidht: "40rem",
    paddingLeft: "10vw",
  },
  [mediaQuery[2]]: {
    fontSize: "2rem",
    paddingLeft: "5vw",
    maxWidth: "24rem",
  },
  [mediaQuery[1]]: {
    fontSize: "2rem",
    paddingLeft: "unset",
    padding: "1rem 1rem",
    maxWidth: "24rem",
  },
});
