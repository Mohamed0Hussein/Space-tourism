import { useNavigate } from "react-router";

import Typography from '../components/Typography'
import DisplayButtonStates from '../components/DisplayButtonStates'
import { ROUTE_PATHS } from "../utils/routePaths";

const Landing = () => {
    let navigate = useNavigate()
  return (
    <>
        {/* Content */}
        <main className="flex flex-1 flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-20 lg:px-[165px] py-16 md:py-24 lg:py-32 gap-10 md:gap-20 lg:gap-0">
            {/* Text Content */}
            <div className="text-center lg:text-left max-w-[450px] lg:max-w-[540px]">
            <Typography className="text-[#D0D6F9]" preset={5}>
                SO, YOU WANT TO TRAVEL TO
            </Typography>
            <Typography className="text-white text-[80px] md:text-[100px] lg:text-[150px] leading-[1.1]" preset={1}>
                SPACE
            </Typography>
            <Typography className="text-[#D0D6F9] mt-4 md:mt-6" preset={9}>
                Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
            </Typography>
            </div>

            {/* Explore Button */}
            <div className="mt-10 md:mt-16 lg:mt-0 lg:ml-10">
            <DisplayButtonStates onClick={() => navigate(ROUTE_PATHS.DESTINATION)}>EXPLORE</DisplayButtonStates>
            </div>
        </main>
    </>
  )
}

export default Landing