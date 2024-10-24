'use client'
import { ReactLenis, useLenis } from 'lenis/react'

const LenisScroll = ({children}) => {
    /* const lenis = useLenis(({ scroll }) => {
        
      }) */
  return (
    <ReactLenis root options={{
        lerp:"0.07"
    }} >
      {children}
    </ReactLenis>
  )
}

export default LenisScroll