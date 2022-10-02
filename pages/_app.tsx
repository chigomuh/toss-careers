import "styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/layouts/Layout";
import { Global } from "@emotion/react";
import { GlobalStyles } from "components/common/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
