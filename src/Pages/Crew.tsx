import { useState } from "react"
import Typography from "../components/Typography"
import data from '../data/data.json'
import SmallPagination from "../components/SmallPagination"

const crewData = data.crew
const Crew = () => {
    const [currentCrew, setCurrentCrew] = useState(0)
  return (
    <div className="my-[48px] mx-[165px] flex flex-col flex-1">
        <div className="inline-flex mb-[24px] justify-center sm:justify-start">
            <Typography preset={5} className="mr-[18px] sm:mr-[28px] text-white/25 font-bold">02</Typography>
            <Typography preset={5} className="text-white">MEET YOUR CREW</Typography>
        </div>
        <div className="flex flex-col lg:flex-row gap-[32px] items-center flex-1 justify-between text-center lg:text-left">
        <div className="flex flex-col flex-1 justify-between h-full">
            <div className="flex flex-col h-full justify-center">
                <div></div>
                <Typography preset={4} className="text-white/50">
                    {crewData[currentCrew].role.toUpperCase()}
                </Typography>
                <Typography preset={3} className="text-white">
                    {crewData[currentCrew].name.toUpperCase()}
                </Typography>
                <Typography preset={9} className="text-[#D0D6F9]">
                    {crewData[currentCrew].bio}
                </Typography>
            </div>
            <SmallPagination
                className="my-[40px] lg:justify-start md:justify-center sm:justify-center"
                pageSize={1}
                totalItems={crewData.length}
                onClick={(i) => setCurrentCrew(i)}
            />
        </div>

            <div className="flex justify-center lg:justify-start">
                <img src={`${crewData[currentCrew].images.webp}`} className="w-min h-min" />
            </div>

      </div>
    </div>
  )
}

export default Crew