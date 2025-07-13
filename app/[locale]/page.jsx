'use client';

import Introduction from "@/components/Introduction.jsx";
import Apropos from "@/components/Apropos.jsx";
import Projets from "@/components/projets";

export default function Home() {
  return (
    <>
      <Introduction />
      <Apropos />
      <Projets />
    </>
  );
}
