import NuevAnim from "../anim-container/NuevAnim"
import Image from "next/image"
import { lilitaOne } from "../fonts/Fonts"

const HomeInicio = () => {
    return (
        <>
            <div className="hidden  lg:flex w-full justify-start bg-pink-400 overflow-hidden">
                <div className="flex max-w-[100%] sm:max-w-[90%] lg:max-w-[50%]  z-10  gap-5 sm:px-20 px-10 py-10 flex-col ">
                    <h2 className={` text-white  h-fit object-fill smr:text-[6rem] sm:text-[8rem] text-[4rem] leading-[0.8em] tracking-[-0.05em] ${lilitaOne.className} `}> Whereas recognition </h2>
                    <p className="text-white text-[1.1rem] lg:w-[100%] tracking-widest w-[100%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut perferendis voluptas iste. Sed quasi veritatis sequi cumque odit,
                        como importo funtes de google fonts en mi aplicacion de nextjs 14 que utiliza app router; la fuente que quiero importar es Lilita One </p>
                </div>

                <NuevAnim
                    className="lg:block hidden"
                    esto="opacity-100 translate-x-0"
                    otro="opacity-0 translate-x-[-10vw]"
                >
                    <Image src="https://www.dropbox.com/scl/fi/trjwz4tmc5kncl7tlyfoz/634eryery.png?rlkey=hm3w3x8pt8pvycyv3p2muhdkp&st=66zoehft&raw=1"
                        width={500}
                        height={500}
                        alt="esto foto"
                    />
                </NuevAnim>
            </div>

            <div className="w-full block flex-col p-10 items-center bg-pink-400 lg:hidden ">
                <h2 className={` text-white w-fit h-fit smr:text-[6rem] sm:text-[8rem] text-[4rem] leading-[0.8em] tracking-[-0.05em] ${lilitaOne.className} `}> Whereas recognition </h2>
                <p className="text-white text-[1.1rem] py-5 lg:w-[80%] tracking-widest w-[100%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut perferendis voluptas iste. Sed quasi veritatis sequi cumque odit,
                        como importo funtes de google fonts en mi aplicacion de nextjs 14 que utiliza app router; la fuente que quiero importar es Lilita One </p>
                <NuevAnim
                    className="w-full h-[100vh] object-cover pt-10 flex justify-center"
                    esto="opacity-100"
                    otro="opacity-100"
                >
                    <Image className="object-cover" src="https://www.dropbox.com/scl/fi/trjwz4tmc5kncl7tlyfoz/634eryery.png?rlkey=hm3w3x8pt8pvycyv3p2muhdkp&st=66zoehft&raw=1"
                        width={500}
                        height={500}
                        alt="esto foto"
                    />
                </NuevAnim>
            </div>
        </>
    )
}

export default HomeInicio