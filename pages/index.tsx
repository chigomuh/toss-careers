import { css } from "@emotion/react";
import Seo from "components/common/Seo";
import CardSection from "components/mainPage/CardSection";
import ChartSection from "components/mainPage/ChartSection";
import MainSection from "components/mainPage/MainSection";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <div css={mainWrapper}>
        <MainSection />
        <ChartSection />
        <CardSection />
      </div>
    </>
  );
};

export default Home;

const mainWrapper = css({
  position: "relative",
  width: "100%",
  height: "auto",
  backgroundColor: "#863fff",
});
