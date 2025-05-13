import { useState} from 'react'
import Typography from '../components/Typography'
import LargePagination from '../components/LargePagination'
import data from '../data/data.json'

const techData = data.technology

const Technology = () => {
    const [currentTech, setCurrentTech] = useState(0)
  return (
    <div className="my-[48px] ml-[165px] mr-[165px] lg:mr-0 flex flex-col flex-1">
    <div className="inline-flex mb-[24px] justify-center sm:justify-start">
        <Typography preset={5} className="mr-[18px] sm:mr-[28px] text-white/25 font-bold">03</Typography>
        <Typography preset={5} className="text-white">SPACE LAUNCH 101</Typography>
    </div>
    <div className="flex flex-col-reverse lg:flex-row gap-[32px] items-center justify-between text-center lg:text-left flex-1">
        <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[64px] flex-1">
            <LargePagination
                className="lg:flex-col lg:w-fit"
                pageSize={1}
                totalItems={techData.length}
                onClick={(i) => setCurrentTech(i)}
            />
            <div className="flex flex-col h-full justify-center">
                <Typography preset={4} className="text-white/50">THE TERMINOLOGY…</Typography>
                <Typography preset={3} className="text-white">{techData[currentTech].name.toUpperCase()}</Typography>
                <Typography preset={9} className="text-[#D0D6F9]">{techData[currentTech].description}</Typography>

            </div>
        </div>

        <img 
        src={techData[currentTech].images.landscape} 
        className="w-full h-auto lg:hidden" // Show landscape on mobile
        />
        <img 
        src={techData[currentTech].images.portrait} 
        className="hidden lg:block w-auto h-full" // Show portrait on medium+ screens
        />

  </div>
</div>
  )
}

export default Technology