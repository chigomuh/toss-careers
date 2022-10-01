import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import { mediaQuery } from "styles/common";
import scrollEventCard from "utils/scrollEvent/scrollEventCard";

const CardSection = () => {
  const refCardTextWrapper = useRef<HTMLDivElement>(null); // card section
  const refCard = useRef<HTMLDivElement>(null); // card
  const refCard1 = useRef<HTMLDivElement>(null); // card
  const refCard2 = useRef<HTMLDivElement>(null); // card
  const refCard3 = useRef<HTMLDivElement>(null); // card
  const refCard4 = useRef<HTMLDivElement>(null); // card
  const refCard5 = useRef<HTMLDivElement>(null); // card
  const refCard6 = useRef<HTMLDivElement>(null); // card
  const refCard7 = useRef<HTMLDivElement>(null); // card
  const refCard8 = useRef<HTMLDivElement>(null); // card

  useEffect(() => {
    if (
      !refCard.current ||
      !refCard1.current ||
      !refCard2.current ||
      !refCard3.current ||
      !refCard4.current ||
      !refCard5.current ||
      !refCard6.current ||
      !refCard7.current ||
      !refCard8.current
    )
      return;

    if (!refCard.current.parentElement) return;
    if (!refCard.current.parentElement.parentElement) return;
    if (!refCard.current.parentElement.parentElement.parentElement) return;

    const topParentElement =
      refCard.current.parentElement.parentElement.parentElement;

    window.addEventListener(
      "scroll",
      scrollEventCard(
        [
          refCard.current,
          refCard1.current,
          refCard2.current,
          refCard3.current,
          refCard4.current,
          refCard5.current,
          refCard6.current,
          refCard7.current,
          refCard8.current,
        ],
        topParentElement
      )
    );
  }, []);

  return (
    <section css={cardSection}>
      <div css={cardDivwrapper} ref={refCardTextWrapper}>
        <div css={TextWrapper}>
          <h3
            css={h3("lg", "700")}
          >{`토스가 만들고\n싶은 새로운 내일,\n어떤 모습인지\n확인해보세요`}</h3>
          <h3
            css={h3("sm", "600")}
          >{`토스가 만들고 있는 금융의 변화, 당신도 직접\n변화를 만들 수 있습니다. 토스 각 계열사의\n비전을 확인해보세요.`}</h3>
        </div>
        <div css={cardWrapper}>
          <div css={card("0")} ref={refCard}>
            <span>토스</span>
            <span>
              토스 커뮤니티 및 다양한 금융/비금융 데이터를 통해 대한민국
              신용평가 시장을 재정의합니다. 공급자 중심의 평가에서 소비자 중심의
              상환 능력 평가를 통해 시장에 새로운 가치를 창출합니다.
            </span>
          </div>
          <div css={card("1")} ref={refCard1}>
            토스뱅크
          </div>
          <div css={card("2")} ref={refCard2}>
            토스페이먼츠
          </div>
          <div css={card("3")} ref={refCard3}>
            토스증권
          </div>
          <div css={card("4")} ref={refCard4}>
            토스인슈어런스
          </div>
          <div css={card("5")} ref={refCard5}>
            토스씨엑스
          </div>
          <div css={card("6")} ref={refCard6}>
            토스글로벌
          </div>
          <div css={card("7")} ref={refCard7}>
            토스플레이스
          </div>
          <div css={card("8")} ref={refCard8}>
            토스신용데이터(가칭)
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;

/**
 * card section
 */
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
    opacity: index === "0" ? 1 : 0.5,
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
  width: "24rem",
  maxWidth: "90%",
  height: "26rem",
  wordBreak: "keep-all",
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
    justifyContent: "space-around",
    padding: "2rem 0",
  },
});

const TextWrapper = css({
  width: "24rem",
  height: "auto",
  color: "#FFFFFF",
  [mediaQuery[1]]: {
    width: "90%",
  },
});

const h3 = (fontSize: string, fontWeight: string) =>
  css({
    fontSize: fontSize === "lg" ? "3rem" : "1.2rem",
    fontWeight,
    wordBreak: "keep-all",
    padding: "1rem",
    [mediaQuery[1]]: {
      fontSize: fontSize === "lg" ? "2rem" : "0",
    },
  });
