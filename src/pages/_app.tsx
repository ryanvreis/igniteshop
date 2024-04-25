import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";
import logoImg from "@/assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";

import Head from "next/head";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {" "}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RHW2ET0CT3"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RHW2ET0CT3', 
                page_path = window.location.pathname,
              );
            `,
          }}
        />
      </Head>

      <Container>
        <Header>
          <Image src={logoImg} alt="" />
        </Header>

        <Component {...pageProps} />
      </Container>
    </>
  );
}
