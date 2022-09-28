import Seo from "components/common/Seo";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <div
        css={{
          backgroundColor: "#8031FE",
          width: "100vw",
          height: "200vh",
        }}
      >
        헬로 마이 프로젝트
      </div>
    </>
  );
};

export default Home;
