'use client'
import Link from "next/link"
import { useState } from "react"
import { motion as m, AnimatePresence } from 'framer-motion'
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Monomaniac_One } from "next/font/google"
import { inconsolata } from "../fonts/Fonts"

const NavDrop = () => {
  const pathName = usePathname()
  const [isOpen, setIsOpen] = useState(false);


  const onMouseEnter = (link) => {
    setIsOpen(link)

  }
  const onMouseLeave = () => {
    setIsOpen(null)
  }

  return (
    <div className="relative z-50 flex flex-col ">
      <div className="flex gap-4 p-2">
        <div onMouseEnter={() => onMouseEnter("/1")} onMouseLeave={onMouseLeave} className="w-fit  flex justify-center items-center h-fit bg-purple-400">
          <Link className="bg-yellow-200 flex leading-[1rem] justify-center items-center w-full h-full " href="/1">Cosas nuevas</Link>
        </div>
        <div onMouseEnter={() => onMouseEnter("/2")} onMouseLeave={onMouseLeave} className="w-fit  flex justify-center items-center h-fit bg-purple-400">
          <Link className="bg-yellow-200 flex leading-[1rem]  justify-center items-center w-full h-full " href="/2">Alternativas</Link>
        </div>
        <div onMouseEnter={() => onMouseEnter("/3")} onMouseLeave={onMouseLeave} className="w-fit  flex justify-center items-center h-fit bg-purple-400">
          <Link className="bg-yellow-200 flex leading-[1rem] justify-center items-center w-full h-full " href="/3">Producciones</Link>
        </div>
      </div>
        <div>
      <AnimatePresence>
          {isOpen === "/1" && (

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => onMouseEnter("/1")}
              onMouseLeave={onMouseLeave}
              className="bg-black z-10 flex p-5 mt-[0rem] absolute w-full h-fit">
              <div className="flex w-fit h-fit flex-col">
                <h2 className={`text-white ${inconsolata.className} uppercase text-[2rem]`} >Cosas nuevas</h2>
                <Image className="w-[20rem] h-[100%] object-cover p-2 rounded-full " src="https://iili.io/dkfTeTb.png" width={500} height={500} alt="foto 1" />
              </div>
              <div className="p-5 w-fit">
                <p className={`text-white ${inconsolata.className} `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nisi! Consequuntur ipsum iste nobis vel, optio, aspernatur soluta facere distinctio praesentium eligendi sapiente quam facilis, quisquam nam possimus eum beatae.</p>
              </div>
            </m.div>

          )}
          {isOpen === "/2" && (

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => onMouseEnter("/2")}
              onMouseLeave={onMouseLeave}
              className="bg-black z-10 p-5 flex mt-[0rem] absolute w-full h-fit  ">

              <div className="flex w-fit h-fit flex-col">
                <h2 className={`text-white ${inconsolata.className} uppercase text-[2rem]`} >Alternativas</h2>
                <Image className="w-[20rem] h-[100%] object-cover p-2 rounded-full" src="https://iili.io/dkfTkjj.png" width={500} height={500} alt="foto 2" />
              </div>
              <div className="p-5 w-fit">
                <p className={`text-white ${inconsolata.className} `}>Seleccionamos para Grupo Autosur ASESOR DE VENTAS de PLAN DE AHORRO para desempeñarse en Sucursal Puerto Madryn. Será responsable de la venta de planes de ahorro, realizando la búsqueda de potenciales clientes, asesorando durante todo el proceso de negociación y compra. Buscamos una persona con buena presencia, perfil comercial, dinámico, con capacidad de negociación y vocación de servicio orientada hacia el cliente.</p>
              </div>
            </m.div>

          )}
          {isOpen === "/3" && (
            <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => onMouseEnter("/3")}
            onMouseLeave={onMouseLeave}
            className="bg-black z-10 p-5 flex mt-[0rem] absolute w-full h-fit ">

            <div className="flex w-fit h-fit flex-col">
              <h2 className={`text-white ${inconsolata.className} uppercase text-[2rem]`} >Esta es tercera</h2>
              <Image className="w-[20rem] h-[100%] object-cover p-2 rounded-full" src="https://iili.io/dkfTeTb.png" width={500} height={500} alt="foto 3" />https://iili.io/dkfTvZx.png
            </div>
            <div className="p-5 w-fit">
              <p className={`text-white ${inconsolata.className} `}>Seleccionamos para Grupo Autosur ASESOR DE VENTAS de PLAN DE AHORRO para desempeñarse en Sucursal Puerto Madryn. Será responsable de la venta de planes de ahorro, realizando la búsqueda de potenciales clientes, asesorando durante todo el proceso de negociación y compra. Buscamos una persona con buena presencia, perfil comercial, dinámico, con capacidad de negociación y vocación de servicio orientada hacia el cliente.</p>
            </div>
          </m.div>

          )}
      </AnimatePresence>
        </div>
    </div>
  )
}

export default NavDrop;

{/* <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => onMouseEnter("/3")}
              onMouseLeave={onMouseLeave}
              className="bg-black z-10 p-5 flex mt-[0rem] absolute w-full h-fit ">
              <div className="flex flex-col">
                <h2 className={`text-white ${inconsolata.className} text-[2rem] uppercase`} >Producciones</h2>
                <Image className="w-full p-2 rounded-full" src="https://iili.io/dkfTvZx.png" width={500} height={500} alt="foto 3" />
              </div>
              <div className="p-5 w-fit">
                <p className={`text-white ${inconsolata.className} `}>Seleccionamos para Grupo Autosur ASESOR DE VENTAS de PLAN DE AHORRO para desempeñarse en Sucursal Puerto Madryn.
                  Será responsable de la venta de planes de ahorro, realizando la búsqueda de potenciales clientes, asesorando durante todo el proceso de negociación y compra.
                  Buscamos una persona con buena presencia, perfil comercial, dinámico, con capacidad de negociación y vocación de servicio orientada hacia el cliente.</p>
              </div>
            </m.div> */}