import { css } from "@emotion/react";
import {
  section,
  wrapper,
  textWrapper,
  h2,
  h3,
  br,
} from "components/mainPage/CoreValueSection";
import useDiffDate from "hooks/useDiffDate";
import useFadeIn from "hooks/useFadeIn";
import Image from "next/image";
import { useRef } from "react";
import { mediaQuery } from "styles/common";
import addRef from "utils/addRef";

const GrowthStorySection = () => {
  const refAnimateFadeInUp = useRef<HTMLElement[]>([]);
  const deadline = "2022-10-09T23:59:59";
  const { date } = useDiffDate(deadline);

  useFadeIn(refAnimateFadeInUp.current, 200);

  return (
    <>
      <section css={section("#FFFFFF")}>
        <div css={wrapper}>
          <div css={textWrapper} ref={addRef(refAnimateFadeInUp, 0)}>
            <h2 css={h2}>
              토스는 어떻게 성장해 왔을까요? <br css={br} />
              토스의 성장 스토리를 공개합니다
            </h2>
            <h4 css={h4}>{`D-${date.day}`}</h4>
            <h3 css={h3}>
              실패가 없다면 성장도, 성공도 없다고 믿습니다. <br css={br} />
              지난 반기의 성공⋅실패 사례를 통해 얻은 러닝과 다음 반기 성장의
              방향성을 공유하는 토스의 축제, <br css={br} />
              2022 상반기 얼라인먼트 데이 현장을 최초 공개합니다.
            </h3>
          </div>
          <div css={imageWrapper} ref={addRef(refAnimateFadeInUp, 1)}>
            <Image
              src={`/image/growth-story.png`}
              alt="growth-story-poster"
              width={960}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default GrowthStorySection;

const imageWrapper = css({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "auto",
  opacity: "0",
  [mediaQuery[1]]: {
    width: "150%",
    height: "60vw",
  },
});

const h4 = css({
  fontSize: "5rem",
  fontWeight: "700",
  color: "#4942ff",
});
