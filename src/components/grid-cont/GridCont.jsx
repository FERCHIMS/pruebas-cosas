'use client'
import Masonry from 'react-masonry-css'
import './grid.css'

const GridCont = ({children, numero, grande, className=""}) => {
  const breakpointColumnsObj = {
    default: numero,
    1100: grande,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={`my-masonry-grid ${className} `}
      columnClassName="my-masonry-grid_column">
      {children}
    </Masonry>
  )
}

export default GridCont