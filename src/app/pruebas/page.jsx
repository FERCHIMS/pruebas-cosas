
import AnimComponent from '@/components/anim-container/AnimComponent'
import AnimImages from '@/components/anim-container/AnimImages'
import GridCont from '@/components/grid-cont/GridCont'
import ImagenesSrc from '@/components/grid-cont/ImagenesSrc'
import NavDrop from '@/components/header/NavDrop'
import CardPrueba from '@/components/mas-pruebas/CardPrueba'
import TexPrueba from '@/components/mas-pruebas/TexPrueba'
import ContPruebas from '@/components/pruebas-cont/ContPruebas'
import Image from 'next/image'
import React from 'react'

const Pruebas = () => {
  return (
    <div className='w-full flex flex-col h-full bg-[#000]'>
      <NavDrop />
      <div className='relative flex flex-col'>
        <div>
          <CardPrueba />
        </div>
        <TexPrueba />
      </div>
      <div>
        <Image src="https://iili.io/dLCAQvS.jpg" quality={50} width={1000} height={1000} alt='esta foto' />
      </div>

    </div>


  )
}

export default Pruebas