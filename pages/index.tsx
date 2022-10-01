import { css } from "@emotion/react";
import Seo from "components/common/Seo";
import CardSection from "components/mainPage/CardSection";
import MainSection from "components/mainPage/MainSection";
import type { NextPage } from "next";
import { useRef } from "react";
import { mediaQuery } from "styles/common";

const Home: NextPage = () => {
  const refChartVideo = useRef<HTMLVideoElement>(null);
  const refChartText1 = useRef<HTMLDivElement>(null);
  const refChartText2 = useRef<HTMLDivElement>(null);
  const refChartText3 = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (refMainVideo.current && refChevronIcon.current) {
  //     if (!refMainVideo.current.parentElement) return;

  //     const { top } =
  //       refMainVideo.current.parentElement.getBoundingClientRect();
  //     window.addEventListener(
  //       "scroll",
  //       scrollVideoPlay(
  //         refMainVideo.current,
  //         top,
  //         0,
  //         {
  //           opacity: [refChevronIcon.current],
  //         },
  //         breakpoints[1]
  //       )
  //     );
  //   }
  // }, []);

  // useEffect(() => {
  //   if (refChartVideo.current) {
  //     if (
  //       !refChartVideo.current.parentElement ||
  //       !refMainVideo.current ||
  //       !refChartText1.current ||
  //       !refChartText2.current ||
  //       !refChartText3.current
  //     )
  //       return;
  //     const { clientHeight } = refMainVideo.current;
  //     const { innerHeight } = window;
  //     const addSpace = clientHeight - innerHeight;

  //     const { top } =
  //       refChartVideo.current.parentElement.getBoundingClientRect();
  //     window.addEventListener(
  //       "scroll",
  //       scrollVideoPlay(
  //         refChartVideo.current,
  //         top,
  //         addSpace,
  //         {
  //           transform: [
  //             refChartText1.current,
  //             refChartText2.current,
  //             refChartText3.current,
  //           ],
  //         },
  //         breakpoints[1]
  //       )
  //     );
  //   }
  // }, []);

  return (
    <>
      <Seo />
      <div css={mainWrapper}>
        <MainSection />
        {/* <section css={videoSection("600vh", "800")}>
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
        </section> */}
        <CardSection />
      </div>
    </>
  );
};

export default Home;

/**
 * video section
 */
const mainWrapper = css({
  position: "relative",
  width: "100%",
  height: "auto",
  backgroundColor: "#863fff",
});

const chartVideo = css({
  width: "100%",
  height: "auto",
  transform: "scaleX(1.5)",
  [mediaQuery[1]]: {
    position: "absolute",
    bottom: "10rem",
  },
});

const h2 = css({
  whiteSpace: "pre-line",
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
  [mediaQuery[3]]: {
    fontSize: "3rem",
    paddingLeft: "10vw",
  },
  [mediaQuery[1]]: {
    fontSize: "2rem",
    paddingLeft: "unset",
    padding: "1rem 1rem",
  },
});
