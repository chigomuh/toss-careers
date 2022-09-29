import { css } from "@emotion/react";
import Seo from "components/common/Seo";
import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import scrollVideoPlay from "utils/scrollVideoPlay";

const Home: NextPage = () => {
  const refMainVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (refMainVideo.current) {
      window.addEventListener("scroll", scrollVideoPlay(refMainVideo.current));
    }
  }, []);

  return (
    <>
      <Seo />
      <div css={mainWrapper}>
        <section css={videoSection}>
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
});

const videoSection = css({
  backgroundColor: "#8031FE",
  width: "100%",
  height: "200rem",
  position: "relative",
});

const video = css({
  width: "100%",
  height: "auto",
});
