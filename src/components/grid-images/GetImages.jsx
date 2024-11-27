import Image from "next/image"
import getImages from "../llamadas/Llamadas"
import GridCont from "../grid-cont/GridCont"


const GetImages = async() => {
     const images = await getImages()
  return (
    <div>
        <GridCont>
        {images.map((image) => (
            <div key={image.id}> 
                <Image src={image.src} width={500} height={500} alt="images get" />
            </div>
        ))}
        </GridCont>
    </div>
  )
}

export default GetImages