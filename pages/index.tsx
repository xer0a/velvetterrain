import { Layout } from "@/components/Layout";
import { NextPage } from "next";

const LandingPage: NextPage = () => {
  return (
    <Layout>
      <div className="flex h-full justify-center items-center">
        Welcome to the Velvet Terrain.
      </div>
    </Layout>
  );
};

export default LandingPage;
