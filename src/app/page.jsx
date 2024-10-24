

import NuevAnim from "@/components/anim-container/NuevAnim";
import HomeInicio from "@/components/homeInicio/HomeInicio";
import PdfViewer from "@/components/pdfviewer/PdfViewer";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeInicio />
      
        
        <Image className="w-full" src="https://iili.io/dOfJPsV.png" width={1000} height={1000} alt="esta foto" />
        
      
    </div>
  )
}