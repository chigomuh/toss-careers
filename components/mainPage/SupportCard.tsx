import { css } from "@emotion/react";
import { mediaQuery } from "styles/common";

interface Props {
  title: string;
  description: string;
}

const SupportCard = ({ title, description }: Props) => {
  return (
    <div css={supportCard}>
      <h2 css={h2}>{title}</h2>
      <h3 css={h3}>{description}</h3>
    </div>
  );
};

export default SupportCard;

const h3 = css({
  fontSize: "1.1rem",
  fontWeight: "550",
  color: "#4E5968",
});

const h2 = css({
  fontSize: "1.7rem",
  fontWeight: "700",
  marginBottom: "1rem",
});

const supportCard = css({
  backgroundColor: "#d9d9d920",
  backdropFilter: "blur(10px)",
  width: "19rem",
  height: "28rem",
  padding: "3rem",
  margin: "1rem",
  borderRadius: "1.5rem",
  [mediaQuery[2]]: {
    width: "90%",
    height: "auto",
    minHeight: "10rem",
    padding: "2rem",
  },
});
