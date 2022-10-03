import { css } from "@emotion/react";
import {
  br,
  h2,
  section,
  textWrapper,
  wrapper,
  button,
} from "components/mainPage/CoreValueSection";
import useFadeIn from "hooks/useFadeIn";
import { useRef } from "react";
import addRef from "utils/addRef";
import SupportCard from "components/mainPage/SupportCard";
import { SUPPORT_CARD_TEXT } from "data/support";
import { mediaQuery } from "styles/common";
import Image from "next/image";

const SupportSection = () => {
  const refAnimateFadeInUp = useRef<HTMLElement[]>([]);
  useFadeIn(refAnimateFadeInUp.current, 200);

  return (
    <section css={section("#FFFFFF")}>
      <div css={coin({ top: "0", right: "0" }, "20", "20", "50%", "120")}>
        <Image
          src={`/image/sub_img_silver_coin.png`}
          alt="silver-coin"
          layout="fill"
        />
      </div>
      <div css={coin({ bottom: "0", left: "0" }, "30", "30", "0", "0")}>
        <Image
          src={`/image/sub_img_silver_coin.png`}
          alt="silver-coin"
          layout="fill"
        />
      </div>
      <div css={coin({ bottom: "5rem", right: "0" }, "20", "20", "40%", "100")}>
        <Image
          src={`/image/sub_img_yellow_coin.png`}
          alt="yellow-coin"
          layout="fill"
        />
      </div>
      <div css={wrapper}>
        <div css={textWrapper} ref={addRef(refAnimateFadeInUp, 0)}>
          <h2 css={h2}>
            몰입하는 당신을 위한 <br css={br} />
            아낌없는 보상과 지원
          </h2>
        </div>
        <div css={supportWrapper} ref={addRef(refAnimateFadeInUp, 1)}>
          {SUPPORT_CARD_TEXT.map((support) => (
            <SupportCard
              key={support.id}
              title={support.title}
              description={support.description}
            />
          ))}
        </div>
        <button css={button}>더 알아보기</button>
      </div>
    </section>
  );
};

export default SupportSection;

interface Tblr {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const coin = (
  tblr: Tblr,
  width: string,
  height: string,
  translateX: string,
  rotate: string
) =>
  css({
    position: "absolute",
    top: tblr.top || "unset",
    bottom: tblr.bottom || "unset",
    left: tblr.left || "unset",
    right: tblr.right || "unset",
    width: `${width}rem`,
    height: `${height}rem`,
    transform: `translateX(${translateX}) rotate(${rotate}deg)`,
    [mediaQuery[1]]: {
      width: `${+width / 2}rem`,
      height: `${+height / 2}rem`,
    },
  });

const supportWrapper = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "auto",
  opacity: "0",
  marginBottom: "3rem",
  [mediaQuery[2]]: {
    flexDirection: "column",
  },
});
