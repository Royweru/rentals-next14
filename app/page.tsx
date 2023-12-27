

import Image from "next/image";
import Slider from "@/components/slider";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full ">
     <Slider />
     <Button variant="destructive">
       HEyy
     </Button>
    </main>
  )
}
