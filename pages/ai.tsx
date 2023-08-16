import { Layout } from "@/components/Layout";
import Page from "@/components/page";
import { NextPage } from "next";
import Head from "next/head";

const AI: NextPage = () => {
  return (
    <>
      <Page>
        <Head>
          <title>AI</title>
          <meta
            name="description"
            content="Velvet Terrain Artificial Intelligence"
          />
        </Head>

        <Layout>
          <div className="w-full border-2 text-center py-20 max-w-xl mx-auto">
            AI
          </div>
        </Layout>
      </Page>
    </>
  );
};

export default AI;
