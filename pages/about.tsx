import { Layout } from "@/components/Layout";
import Page from "@/components/page";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <>
      <Page>
        <Head>
          <title>About</title>
          <meta name="description" content="About Velvet Terrain." />
        </Head>
        <Layout>
          <div>Fat Retard with a sleeper build</div>
        </Layout>
      </Page>
    </>
  );
};

export default About;
