import "@fontsource/inter";
import { AppProps } from "next/app";
import { GlobalStyles as TwGlobal } from "twin.macro";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <TwGlobal />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
