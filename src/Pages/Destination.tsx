import { useState } from "react"
import TabsMenu from "../components/TabsMenu"
import Typography from "../components/Typography"
import destionationInfo from '../data/data.json'

let destinations = destionationInfo.destinations

const Destination = () => {
  const [currentDest, setCurrentDest] = useState(0)
  return (
    <div className="my-[48px] mx-[165px] flex flex-1 flex-col">
      <div className="inline-flex mb-[24px]">
        <Typography preset={5} className="mr-[28px] text-white/25 font-bold">01</Typography><Typography preset={5} className="text-white">PICK YOUR DESTINATION</Typography>
      </div>
      <div className="flex flex-row gap-[32px] items-center flex-1 justify-between">
        <div className="flex flex-1">
          <img src={`${destinations[currentDest].images.webp}`}/>
        </div>
        <div className="flex flex-col flex-1 my-[133px] mx-[47px]">
          <TabsMenu menuClassName="mb-[40px]" menu={destinations.map(des => des.name)} onChange={(id: number) => setCurrentDest(id)}/>
          <Typography preset={2} className="text-white mb-[16px]">{destinations[currentDest].name.toUpperCase()}</Typography>
          <Typography preset={9} className="text-[#D0D6F9]">{destinations[currentDest].description.toUpperCase()}</Typography>
          <div className="h-[1px] w-full bg-white/25 stroke-[#979797] my-[40px]"/>
        </div>
      </div>
    </div>
  )
}

export default Destination