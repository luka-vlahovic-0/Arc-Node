import LpFaq from "@/components/LandingPage/LpFaq";
import LpHeader from "@/components/LandingPage/LpHeader";
import LpManagingAssets from "@/components/LandingPage/LpManagingAssets";
import LpPerks from "@/components/LandingPage/LpPerks";
import LpSubHeader from "@/components/LandingPage/LpSubHeader";

export default function Home() {
  return (
    <>
      <LpHeader />
      <LpSubHeader />
      <LpPerks />
      <LpManagingAssets />
      <LpFaq />
    </>
  );
}
