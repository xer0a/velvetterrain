import { Layout } from "@/components/Layout";
import { NextPage } from "next";
import Head from "next/head";
import Page from "@/components/page";
import Image from "next/image";

//we can come back to this soon

// export interface ProductInfo {
//   name: string;
//   image?: string;
//   price: number;
//   href: string;
//   isStocked: boolean;
// }

const LandingPage: NextPage = () => {
  return (
    <>
      <Page>
        <Head>
          <title>Velvet Terrain - Home</title>
          <meta
            name="description"
            content="Velvet Terrain is an apparel & clothing retailer based in Auckland, New Zealand."
          />
        </Head>
        <Layout>
          <div className="w-full text-center py-10 max-w-xl mx-auto overfl">
            <h1 className="text-xl uppercase">Welcome to the Velvet Terrain</h1>
            <br />
            <p>
              Every piece in our collection is thoughtfully curated to reflect
              our commitment to quality and style. From homeware to accessories,
              all items are meticulously handcrafted with an incredible
              attention to detail.
            </p>
            <br />
            <p>
              Velvet Terrain garments embody a sense of exploration and
              authenticity. Our commitment to this means production may slow
              down at times, so we thank everyone for their patience and
              continued support.
            </p>
            <br />
            <p>Theres so much more to come. We hope to see you soon.</p>
            <br />
            <p>G. Wright (founder)</p>
            <br />
            <p className="italic pb-4">
              “Fixation is the way to death, fluidity is the way to life”
            </p>
            <div className="flex relative aspect-square justify-center items-center mx-auto">
              <div className="border-2 w-[250px] h-[250px]">
                <Image
                  src={"/images/george-squat.png"}
                  alt={"George in scene"}
                  fill
                  priority
                  className=" rounded-xl"
                />
              </div>
            </div>
          </div>
        </Layout>
      </Page>
    </>
  );
};

export default LandingPage;
