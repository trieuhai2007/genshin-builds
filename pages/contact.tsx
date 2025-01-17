import { getLocale } from "@lib/localData";
import { GetStaticProps } from "next";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <br />
      <div>
        I made this app in my free tune and also it is open source. you&apos;re
        free to report an issue, propose an idea, ask for a feature or anything
        to improve the app in my github:{" "}
        <a href="https://github.com/dvaJi/genshin-builds">Github</a>
        or send an email to genshinbuildscom@gmail.com
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
  const lngDict = await getLocale(locale);

  return {
    props: {
      lngDict,
    },
  };
};

export default Contact;
