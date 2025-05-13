import { useState } from "react"
import TabsMenu from "../components/TabsMenu"
import Typography from "../components/Typography"
import destionationInfo from '../data/data.json'

let destinations = destionationInfo.destinations

const Destination = () => {
  const [currentDest, setCurrentDest] = useState(0)

  return (
    <div className="my-[24px] sm:my-[48px] mx-6 sm:mx-[48px] lg:mx-[165px] flex flex-1 flex-col">
      <div className="inline-flex mb-[24px] justify-center sm:justify-start">
        <Typography preset={5} className="mr-[18px] sm:mr-[28px] text-white/25 font-bold">01</Typography>
        <Typography preset={5} className="text-white">PICK YOUR DESTINATION</Typography>
      </div>

      <div className="flex flex-col lg:flex-row gap-[32px] items-center flex-1 justify-between text-center lg:text-left">
        <div className="flex flex-1 justify-center lg:justify-start">
          <img src={`${destinations[currentDest].images.webp}`} />
        </div>

        <div className="flex flex-col flex-1 my-[40px] sm:my-[80px] lg:my-[133px] mx-0 sm:mx-[24px] lg:mx-[47px]">
          <TabsMenu
            menuClassName="mb-[24px] sm:mb-[32px] lg:mb-[40px]"
            menu={destinations.map(des => des.name)}
            onChange={(id: number) => setCurrentDest(id)}
          />

          <Typography preset={2} className="text-white mb-[16px]">
            {destinations[currentDest].name.toUpperCase()}
          </Typography>
          <Typography preset={9} className="text-[#D0D6F9]">
            {destinations[currentDest].description.toUpperCase()}
          </Typography>

          <div className="h-[1px] w-full bg-white/25 stroke-[#979797] my-[32px] sm:my-[40px]" />

          <div className="flex flex-col sm:flex-row flex-1 gap-[24px] items-center sm:items-start">
            <div className="flex flex-col gap-[12px] flex-1">
              <Typography preset={7} className="text-[#D0D6F9]">AVG. DISTANCE</Typography>
              <Typography preset={6} className="text-white">{destinations[currentDest].distance.toUpperCase()}</Typography>
            </div>
            <div className="flex flex-col gap-[12px] flex-1">
              <Typography preset={7} className="text-[#D0D6F9]">EST. TRAVEL TIME</Typography>
              <Typography preset={6} className="text-white">{destinations[currentDest].travel.toUpperCase()}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
