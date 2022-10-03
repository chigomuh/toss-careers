import { css } from "@emotion/react";
import Image from "next/image";
import Close from "public/svg/Close";
import Hamburger from "public/svg/Hamburger";
import { useState } from "react";
import { mediaQuery } from "styles/common";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onClickMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <nav css={[nav, navMobile]}>
        <div css={navBack}></div>
        <div css={container}>
          <div css={logoWraper}>
            <Image
              src="/svg/logo-toss-careers-reverse.svg"
              alt="toss-logo"
              width={150}
              height={22}
            />
          </div>
          <ul css={[navTap, navTapMobile, openMenu && open]}>
            <li>채용 공고</li>
            <li>합류 여정</li>
            <li>지금 가장 핫한 질문</li>
            <li>팀 문화</li>
          </ul>
          <div css={menuImage} onClick={onClickMenuOpen}>
            {openMenu ? (
              <Close stroke={"#FFFFFF"} />
            ) : (
              <Hamburger stroke={"#FFFFFF"} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

const open = css({
  [mediaQuery[1]]: {
    maxHeight: "100vh",
  },
});

const nav = css({
  width: "100%",
  height: "3.5rem",
  padding: "0 1rem",
  position: "fixed",
  zIndex: "999",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "rgba(0, 29, 58, 0.18)",
  backdropFilter: "blur(10px)",
});

const navMobile = css({
  [mediaQuery[1]]: {
    backgroundColor: "rgba(0, 29, 58, 0.35)",
  },
});

const navBack = css({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex: "-1",
});

const container = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100%",
  maxWidth: "60rem",
});

const logoWraper = css({
  cursor: "pointer",
});

const navTap = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "auto",
  height: "100%",
  fontSize: "medium",
  color: "#FFFFFF",
  fontWeight: "600",
  "& li": {
    padding: "0.5rem 1rem",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 29, 58, 0.06)",
      borderRadius: "0.5rem",
    },
  },
});

const navTapMobile = css({
  [mediaQuery[1]]: {
    flexDirection: "column",
    position: "absolute",
    top: "3.5rem",
    left: "0",
    width: "100%",
    maxHeight: "0",
    height: "auto",
    overflowY: "hidden",
    backgroundColor: "rgba(0, 29, 58, 0.35)",
    transition: "0.2s ease",
    "& li": {
      width: "100%",
      height: "3rem",
      margin: "0",
      display: "flex",
      alignItems: "center",
      padding: "0 1rem",
    },
  },
});

const menuImage = css({
  display: "none",
  [mediaQuery[1]]: {
    display: "block",
    width: "2rem",
    height: "2rem",
    cursor: "pointer",
  },
});
