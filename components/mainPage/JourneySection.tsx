import { css } from "@emotion/react";
import {
  section,
  wrapper,
  textWrapper,
  h2,
  br,
} from "components/mainPage/CoreValueSection";
import { JOURNEY_TEXT } from "data/journey";
import useFadeIn from "hooks/useFadeIn";
import { useRef } from "react";
import addRef from "utils/addRef";

const JourneySection = () => {
  const refAnimateFadeInUp = useRef<HTMLElement[]>([]);
  useFadeIn(refAnimateFadeInUp.current, 200);
  return (
    <section css={section("#F2F2F2")}>
      <div css={wrapper}>
        <div css={textWrapper} ref={addRef(refAnimateFadeInUp, 0)}>
          <h2 css={h2}>
            여러분의 선택이 최고의 기회가 될 수 있도록 <br css={br} /> 기존과
            다른 합류 여정을 제안합니다
          </h2>
        </div>
        <div css={JTextWrapper} ref={addRef(refAnimateFadeInUp, 1)}>
          {JOURNEY_TEXT.map((data) => (
            <div key={data.id} css={liWrapper}>
              <h4 css={h4}>{`${data.id}. ${data.title}`}</h4>
              <li css={li}>{data.description}</li>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

const liWrapper = css({
  width: "100%",
  height: "auto",
  maxWidth: "80rem",
  minHeight: "8rem",
  padding: "2rem 1rem",
  borderTop: "2px solid #e5e5e5",
  "&:last-of-type": {
    borderBottom: "2px solid #e5e5e5",
  },
});

const JTextWrapper = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "auto",
  padding: "2rem",
  opacity: "0",
});

const h4 = css({
  fontSize: "1.2rem",
  fontWeight: "600",
  marginBottom: "0.5rem",
});

const li = css({
  listStyle: "inside",
  color: "#6b7684",
  fontSize: "1.1rem",
  fontWeight: "600",
  wordBreak: "keep-all",
  textIndent: "-1.5rem",
  paddingLeft: "1rem",
});
