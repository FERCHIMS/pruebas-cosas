import AnimComponent from "../anim-container/AnimComponent"
import Image from "next/image"
import GridCont from "../grid-cont/GridCont"
import getImages from "../llamadas/Llamadas"


const CardPrueba = async () => {
    const imagenes = await getImages()
    return (

        /* //PARTE 1  */
        <div className="relative w-full">
            <div className="flex justify-center flex-wrap gap-4">
                <GridCont numero={5} grande={3}>
                    {imagenes.map((imagen, index) => (
                        <div key={index}>
                            <AnimComponent
                                esto="opacity-100 blur-[0rem] "
                                otro="opacity-[30%] blur-[0.5rem] "
                                threshold="0.4"
                                rootMargin="-100px"
                                className='transition-all duration-[1200ms]'
                            >
                                <Image className="w-[100%]" placeholder="blur" blurDataURL="data:image/svg+xml;base64,..." src={imagen.src} width={500} height={500} alt='fotito' />
                            </AnimComponent>
                        </div>
                    ))}

                </GridCont>
            </div>

            {/* //PARTE 2 */}
            <div className="flex absolute inset-0 z-10 justify-center flex-wrap gap-4">
                <GridCont numero={5} grande={3}>
                    {imagenes.map((imagen, index) => (
                        <div key={index}>
                            <AnimComponent
                                esto="opacity-[0%] translate-y-0 blur-[0rem] brightness-[100%]"
                                otro="opacity-[30%] translate-y-[1.5vh] blur-[0.2rem] brightness-[200%] saturate-[200%] "
                                threshold="0.5"
                                rootMargin="-100px"
                                className='transition-all bg-pink w-full h-full duration-[1200ms] filter '
                            >
                                <Image placeholder="blur" blurDataURL="data:image/svg+xml;base64,..." className="w-[100%]" src={imagen.src} width={500} height={500} alt='fotito' />
                            </AnimComponent>
                        </div>
                    ))}
                    
                </GridCont>
            </div>
        </div>
    )
}

export default CardPrueba