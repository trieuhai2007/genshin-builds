import Head from "next/head";
import { AppProps } from "next/app";
import { useRecoilValue } from "recoil";
import clsx from "clsx";

import LayoutHeader from "@components/LayoutHeader";
import LayoutFooter from "@components/LayoutFooter";

import { appBackgroundStyleState } from "@state/background-atom";
import { AD_BOTTOM_ZONEID } from "@lib/constants";

const App = ({ Component, pageProps, router }: AppProps) => {
  const appBackgroundStyle = useRecoilValue(appBackgroundStyleState);
  console.log(router);

  return (
    <>
      <div className="flex min-h-screen flex-col h-full bg-vulcan-900">
        <Head>
          <title>Genshin Builds | Genshin Impact Wiki Database</title>
          <meta
            property="og:title"
            content="Genshin Builds | Genshin Impact Wiki Database"
          />
          <meta
            property="twitter:title"
            content="Genshin Builds | Genshin Impact Wiki Database"
          />
          <meta
            name="description"
            content="Learn about every character in Genshin Impact including their skills, talents, builds, and tier list."
          />
          <meta
            property="og:description"
            content="Learn about every character in Genshin Impact including their skills, talents, builds, and tier list."
          />
          <meta
            property="twitter:description"
            content="Learn about every character in Genshin Impact including their skills, talents, builds, and tier list."
          />
        </Head>
        <LayoutHeader />
        <div className="flex flex-col">
          <div className="absolute top-12 pointer-events-none left-0 right-0 bottom-0 flex items-start justify-center overflow-hidden z-0">
            {appBackgroundStyle.image && (
              <img className="w-full" src={appBackgroundStyle.image} />
            )}
          </div>
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ ...appBackgroundStyle.gradient }}
          ></div>
        </div>
        <main
          className={clsx(
            "mb-8 z-10 text-gray-400",
            router.route !== "/builds-builder"
              ? "mx-auto container lg:px-20"
              : ""
          )}
        >
          <Component {...pageProps} />
        </main>
        <div className="mx-auto">
          {AD_BOTTOM_ZONEID && (
            <iframe
              src={`//a.exdynsrv.com/iframe.php?idzone=${AD_BOTTOM_ZONEID}&size=900x250`}
              width="900"
              height="250"
              scrolling="no"
              marginWidth={0}
              marginHeight={0}
              frameBorder="0"
            />
          )}
        </div>
      </div>
      <LayoutFooter />
    </>
  );
};

export default App;
