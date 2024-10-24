import Link from "next/link"


const LinksHeight = () => {
  return (
    <div className="flex flex-col bg-pink-300">
        <Link className="text-[8rem] w-fit pt-0 pb-0 bg-orange-300" href="/">HOME</Link>
        <Link className="text-[8rem] w-fit bg-orange-300" href="/pruebas">PRUEBAS</Link>
        <Link className="text-[8rem] w-fit bg-orange-300" href="/mas">MAS</Link>
    </div>
  )
}

export default LinksHeight