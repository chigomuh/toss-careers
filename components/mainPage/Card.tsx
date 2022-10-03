import { css } from "@emotion/react";
import Image from "next/image";
import { LegacyRef } from "react";

interface Props {
  idx: number;
  refDiv: LegacyRef<HTMLDivElement>;
}

const Card = ({ idx, refDiv }: Props) => {
  return (
    <div key={idx} css={card(idx.toString())} ref={refDiv}>
      <Image
        src={`/image/card-0${idx + 1}.jpg`}
        alt={`card-poster-${idx + 1}`}
        layout="fill"
        css={image}
      />
    </div>
  );
};

export default Card;

const image = css({
  borderRadius: "2rem",
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
    "span:first-of-type": {
      fontWeight: "900",
    },
  });
