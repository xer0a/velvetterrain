import { Layout } from "@/components/Layout";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Velvet Terrain." />
      </Head>
      <Layout>
        <div className="w-full border-2 text-center py-10 max-w-xl mx-auto">
          <h1 className="text-xl uppercase">Welcome to the Velvet Terrain</h1>
          <br />
          <p>
            Every piece in our collection is thoughtfully curated to reflect our
            commitment to quality and style. From homeware to accessories, all
            items are meticulously handcrafted with an incredible attention to
            detail.
          </p>
          <br />
          <p>
            Velvet Terrain garments embody a sense of exploration and
            authenticity. Our commitment to this means production may slow down
            at times, so we thank everyone for their patience and continued
            support.
          </p>
          <br />
          <p>There's so much more to come. We hope to see you soon.</p>
          <br />
          <p>G. Wright (founder)</p>
          <br />
          <p className="italic">
            “Fixation is the way to death, fluidity is the way to life”
          </p>
          <div className="flex relative aspect-square h-36 justify-center items-center mt-12 mx-auto text-white">
            <Image
              src={"/images/george-squat.png"}
              alt={"George in scene"}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
