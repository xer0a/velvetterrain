import Image from "next/image";

export const LandingBanner = () => {
  return (
    <>
      <div className="relative w-full -z-20 h-96 md:block hidden">
        <Image
          alt={"Banner image for Velvet Terrain"}
          fill
          src="/images/landing-banner - copy.jpg"
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
};
