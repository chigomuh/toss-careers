import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import { mediaQuery } from "styles/common";
import addRef from "utils/addRef";
import scrollEventCard from "utils/scrollEvent/scrollEventCard";
import Image from "next/image";
import useFadeIn from "hooks/useFadeIn";

const CardSection = () => {
  const refSection = useRef<HTMLElement>(null);
  const refCard = useRef<HTMLDivElement[]>([]);
  const refCardTextWrapper = useRef<HTMLDivElement>(null);
  const refAnimateFadeInUp = useRef<HTMLElement[]>([]);

  useFadeIn(refAnimateFadeInUp.current, 200);

  useEffect(() => {
    if (refCard.current && refSection.current) {
      window.addEventListener(
        "scroll",
        scrollEventCard(refCard.current, refSection.current)
      );
    }
  }, []);

  return (
    <section css={cardSection} ref={refSection}>
      <div css={cardDivwrapper} ref={refCardTextWrapper}>
        <div css={TextWrapper} ref={addRef(refAnimateFadeInUp, 0)}>
          <h3
            css={h3("lg", "700")}
          >{`토스가 만들고\n싶은 새로운 내일,\n어떤 모습인지\n확인해보세요`}</h3>
          <h3
            css={h3("sm", "600")}
          >{`토스가 만들고 있는 금융의 변화, 당신도 직접\n변화를 만들 수 있습니다. 토스 각 계열사의\n비전을 확인해보세요.`}</h3>
        </div>
        <div css={cardWrapper}>
          {Array(9)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                css={card(idx.toString())}
                ref={addRef(refCard, idx)}
              >
                <Image
                  src={`/image/card-0${idx + 1}.jpg`}
                  alt={`card-poster-${idx + 1}`}
                  layout="fill"
                  css={image}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;

const image = css({
  borderRadius: "2rem",
});

const cardSection = css({
  width: "100%",
  height: "1000vh",
  position: "relative",
  zIndex: "900",
});

const card = (index: string) =>
  css({
    zIndex: 999 - +index,
    position: "absolute",
    top: "0",
    right: "0",
    width: "100%",
    height: "100%",
    backgroundColor: `#00${index.repeat(3)}0`,
    borderRadius: "2rem",
    padding: "2rem",
    color: "#000000",
    transform: `scale(${1 - +index / 30}) translateY(${+index * 18}%)`,
    span: {
      display: "block",
      fontWeight: "700",
    },
    "span:first-child": {
      fontWeight: "900",
    },
  });

const cardWrapper = css({
  position: "relative",
  width: "360px",
  maxWidth: "90%",
  height: "480px",
  wordBreak: "keep-all",
  [mediaQuery[2]]: {
    width: "300px",
    height: "400px",
  },
});

const cardDivwrapper = css({
  overflowX: "hidden",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "sticky",
  top: "0px",
  "@media (max-width: 900px)": {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const TextWrapper = css({
  width: "24rem",
  height: "auto",
  color: "#FFFFFF",
  opacity: "0",
  [mediaQuery[2]]: {
    width: "20rem",
  },
  [mediaQuery[1]]: {
    width: "20rem",
  },
});

const h3 = (fontSize: string, fontWeight: string) =>
  css({
    fontSize: fontSize === "lg" ? "3rem" : "1.2rem",
    fontWeight,
    wordBreak: "keep-all",
    padding: "1rem",
    [mediaQuery[2]]: {
      fontSize: fontSize === "lg" ? "2rem" : "0",
    },
    [mediaQuery[1]]: {
      fontSize: fontSize === "lg" ? "2rem" : "0",
    },
  });
