import { css } from "@emotion/react";
import useFadeIn from "hooks/useFadeIn";
import { useRef } from "react";
import { mediaQuery } from "styles/common";
import addRef from "utils/addRef";
import videoHandleTransform from "utils/videoHandleTransform";

const CoreValueSection = () => {
  const refAnimateFadeInUp = useRef<HTMLElement[]>([]);
  const refVideo = useRef<HTMLVideoElement[]>([]);

  useFadeIn(refAnimateFadeInUp.current, 200);

  return (
    <section css={section("#FFFFFF")}>
      <div css={wrapper}>
        <div css={textWrapper} ref={addRef(refAnimateFadeInUp, 0)}>
          {/* text */}
          <h2 css={h2}>
            최고의 몰입과 성장을 경험할 수 있도록 <br css={br} /> 토스의 일하는
            문화는 계속 진화합니다
          </h2>
          <h3 css={h3}>
            세상에 없던 제품과 서비스를 선보이려면, 새로운 문화가 바탕이 되어야
            한다고 믿습니다. <br css={br} />
            토스 문화의 근간이 되는 코어 밸류(value), 그 세번째 버전을
            소개합니다.
          </h3>
        </div>
        <div css={videoWrapper} ref={addRef(refAnimateFadeInUp, 1)}>
          {/* video */}
          <div css={videoDiv} className={"type0"}>
            <video
              css={video}
              src="/video/shorts_01.mp4"
              ref={addRef(refVideo, 0)}
              onEnded={videoHandleTransform(refVideo.current, 0)}
              playsInline
              muted
            />
          </div>
          <div css={videoDiv} className={"type1"}>
            <video
              css={video}
              src="/video/shorts_02.mp4"
              ref={addRef(refVideo, 1)}
              autoPlay
              onEnded={videoHandleTransform(refVideo.current, 1)}
              playsInline
              muted
            />
          </div>
          <div css={videoDiv} className={"type2"}>
            <video
              css={video}
              src="/video/shorts_03.mp4"
              ref={addRef(refVideo, 2)}
              onEnded={videoHandleTransform(refVideo.current, 2)}
              playsInline
              muted
            />
          </div>
        </div>
        <button css={button}>코어 밸류 자세히 보기</button>
      </div>
    </section>
  );
};

export default CoreValueSection;

export const br = css({
  [mediaQuery[1]]: {
    display: "none",
  },
});

const video = css({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  borderRadius: "1.5rem",
  maxWidth: "360px",
});

const videoDiv = css({
  width: "75%",
  height: "450px",
  maxWidth: "300px",
  borderRadius: "1.5rem",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  transition: "all 1s ease-in-out",
});

const videoWrapper = css({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "540px",
  maxWidth: "1200px",
  marginBottom: "6rem",
  opacity: "0",
  overflowX: "hidden",
  "& .type0": {
    zIndex: "10",
    transform: "translate(-150%, -50%) scale(1)",
  },
  "& .type1": {
    zIndex: "20",
    transform: "translate(-50%, -50%) scale(1.2)",
  },
  "& .type2": {
    zIndex: "10",
    transform: "translate(50%, -50%) scale(1)",
  },
});

export const button = css({
  width: "13.8rem",
  height: "3.2rem",
  color: "#FFFFFF",
  backgroundColor: "#4942ff",
  borderRadius: "4rem",
  fontWeight: "700",
  fontSize: "1.125rem",
  transitionDuration: "0.2s",
  "&:hover": {
    transform: "scale(1.1)",
    color: "#4942ff",
    backgroundColor: "#FFFFFF",
    borderColor: "#4942ff",
    border: "1px solid",
  },
});

export const h3 = css({
  fontSize: "1.1rem",
  fontWeight: "500",
  color: "#4E5968",
  marginBottom: "1.5rem",
  [mediaQuery[1]]: {
    padding: "0 2rem",
    wordBreak: "keep-all",
  },
});

export const h2 = css({
  fontSize: "4rem",
  fontWeight: "800",
  lineHeight: "1.3",
  marginBottom: "1.5rem",
  color: "#000000",
  [mediaQuery[2]]: {
    fontSize: "3rem",
  },
  [mediaQuery[1]]: {
    fontSize: "2.3rem",
    padding: "0 1rem",
    wordBreak: "keep-all",
  },
});

export const textWrapper = css({
  textAlign: "center",
  marginBottom: "6rem",
  padding: "0 2rem",
  opacity: "0",
  [mediaQuery[1]]: {
    padding: "0",
  },
});

export const wrapper = css({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "6rem 0",
  position: "relative",
});

export const section = (backgroundColor: string) =>
  css({
    position: "relative",
    width: "100%",
    height: "auto",
    backgroundColor,
    overflow: "hidden",
    minHeight: "100vh",
  });
