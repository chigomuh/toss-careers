import { css } from "@emotion/react";
import {
  section,
  wrapper,
  textWrapper,
  h2,
  br,
} from "components/mainPage/CoreValueSection";
import useFadeIn from "hooks/useFadeIn";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { mediaQuery } from "styles/common";
import addRef from "utils/addRef";

const GrowthSection = () => {
  const refAnimateFadeInUp = useRef<HTMLElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  useFadeIn(refAnimateFadeInUp.current, 200);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const { innerWidth } = window;

      if (innerWidth >= 992 && isMobile) {
        setIsMobile(false);
      }

      if (innerWidth < 992 && !isMobile) {
        setIsMobile(true);
      }
    });
  }, [isMobile]);
  console.log(isMobile);
  return (
    <section css={section("#FFFFFF")}>
      <div css={wrapper}>
        <div css={textWrapper} ref={addRef(refAnimateFadeInUp, 0)}>
          <h2 css={h2}>
            여러분의 성장에 <br css={br} />
            토스가 힘이 되어 드리겠습니다
          </h2>
        </div>
        <div css={cardWrapper}>
          <div css={growthCard}>
            <div css={cardText}>
              <h2 css={cardH2}>성장 지원금</h2>
              <h3 css={cardH3}>
                대규모 채용 기간에 지원하신 분 중 서류 합격자를 대상으로 총
                400분을 추첨하여 성장지원금 100만 원을 지급합니다. 최종 합격
                여부와 관계없이 여러분의 모든 여정이 성장의 발판이 될 수 있도록,
                토스도 함께 응원하는 마음을 담았습니다.
              </h3>
            </div>
            <Image
              src={`/image/${isMobile ? "mob" : "pc"}_banner_01.png`}
              alt="growth"
              layout="fill"
              css={cardImage}
            />
          </div>
          <div css={growthCard}>
            <div css={cardText}>
              <h2 css={cardH2}>토스 브랜드 굿즈</h2>
              <h3 css={cardH3}>
                대규모 채용 기간에 지원하신 분 중 합격 여부와 상관없이 총
                400분을 추첨하여 토스의 새로운 로고가 적용된 브랜드 굿즈를
                드립니다.
              </h3>
            </div>
            <Image
              src={`/image/${isMobile ? "mob" : "pc"}_banner_02.png`}
              alt="growth"
              layout="fill"
              css={cardImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;

const cardH3 = css({
  fontSize: "1.1rem",
  fontWeight: "600",
  color: "#FFFFFF",
  wordBreak: "keep-all",
  [mediaQuery[1]]: {
    fontSize: "1rem",
  },
});

const cardH2 = css({
  fontSize: "2.4rem",
  fontWeight: "700",
  color: "#FFFFFF",
  marginBottom: "1rem",
  [mediaQuery[1]]: {
    fontSize: "2rem",
  },
});

const cardText = css({
  width: "50%",
  height: "auto",
  padding: "3rem",
  [mediaQuery[2]]: {
    width: "100%",
    padding: "1.5rem",
  },
});

const cardWrapper = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "auto",
  padding: "2rem",
  position: "relative",
  [mediaQuery[1]]: {
    padding: "0",
  },
});

const cardImage = css({
  borderRadius: "1.5rem",
});

const growthCard = css({
  position: "relative",
  width: "90%",
  height: "22rem",
  borderRadius: "1.5rem",
  backgroundColor: "#4942ff",
  [mediaQuery[2]]: {
    height: "100%",
    maxWidth: "800px",
    maxHeight: "700px",
    minHeight: "500px",
  },
  marginBottom: "1rem",
  "&:last-of-type": {
    marginBottom: "0",
  },
});
