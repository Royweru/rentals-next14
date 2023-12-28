

import Image from "next/image";
import Slider from "@/components/slider";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";
import { Search } from "@/components/search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full ">
     <Hero >
       <Search />
     </Hero>
    </main>
  )
}
