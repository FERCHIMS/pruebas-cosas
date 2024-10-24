import AnimComponent from "../anim-container/AnimComponent"


const TexPrueba = () => {
    return (
        <div className="absolute pt-10 inset-0 mt-10 px-10 flex flex-col items-center w-full ">
            <div className="w-fit flex flex-col relative ">
                <AnimComponent
                    esto="opacity-[75%] translate-x-0 blur-[0rem] brightness-[100%]"
                    otro="opacity-[0%] translate-x-[4.5vh] blur-[0.2rem] brightness-[200%] saturate-[200%] "
                    threshold="0.5"
                    rootMargin="-100px"
                    className='transition-all z-40 w-fit duration-[1200ms] overflow-hidden relative'
                >
                    <h2 className="text-[4rem] sm:text-[6rem] w-[50%] sm:w-fit leading-[1em] text-white font-black">TEXTO PRUEBA</h2>
                    <AnimComponent
                    esto="opacity-[0%] translate-x-[1.5vh] blur-[0rem] brightness-[100%]"
                    otro="opacity-[100%] translate-x-[6vh]  blur-[0.2rem] brightness-[200%] saturate-[200%]"
                    threshold="0.5"
                    rootMargin="-100px"
                    className="absolute inset-0 transition-all delay-200 duration-[1500ms]">
                        <h2 className="text-[5rem] z-10 sm:text-[6rem] w-[50%] sm:w-fit leading-[1em] text-white font-black">TEXTO PRUEBA</h2>
                    </AnimComponent>
                </AnimComponent>
                <AnimComponent
                    esto="opacity-[100%] translate-y-0 blur-[0rem] brightness-[100%]"
                    otro="opacity-[0%] translate-y-[4.5vh] blur-[0.2rem] brightness-[200%] saturate-[200%] "
                    threshold="0.5"
                    rootMargin="-100px"
                    className='transition-all z-40 duration-[1200ms] overflow-hidden'
                >
                    <h4 className="text-white font-bold tracking-widest">ESTO ES UN SUBTITULO </h4>
                    <p className="text-white font-regular w-full pr-8 sm:w-[50%] ">You get a workflow resting on a solid foundation: complete every model with pinpoint accuracy working with a Parasolid Siemens kernel under the hood. You get a workflow resting on a solid foundation: complete every model with pinpoint accuracy working with a Parasolid Siemens kernel under the hood.</p>
                </AnimComponent>
                <div className="w-[50%] h-full bg-black absolute filter blur-[3rem] ">

                </div>
            </div>
        </div>
    )
}

export default TexPrueba