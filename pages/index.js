import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am an aspiring self-taught front-end web developer.</p>
        <p>
          I have a curious and always interested in learning new technologies
          and advancing my knowledge in my current tech stack. I looking for a
          new job and you can see my information is this page{" "}
          <a href="https://portfolio-app-vuong.vercel.app/">
            Vuong Do Portfolio
          </a>
        </p>
      </section>
    </Layout>
  );
}
