import Image from "next/image";

export const LandingBanner = () => {
  return (
    <>
      <div className="relative w-full h-96">
        <Image
          alt={"Banner image for Velvet Terrain"}
          fill
          src="/images/landing-banner.jpg"
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
};
