import Icon from '../components/Icon';
import NavigationMenu from '../components/NavigationMenu';
import { Outlet } from "react-router";
import { ROUTE_PATHS } from '../utils/routePaths';
import { useLocation } from "react-router";
import cn from 'classnames'

const Home = () => {
  const location = useLocation()
  return (
    <div className={cn("flex flex-col w-full min-h-screen bg-no-repeat bg-cover bg-center ",
      {"bg-[url('/assets/home/background-home-mobile.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')] md:bg-[url('/assets/home/background-home-tablet.jpg')]" : location.pathname === ROUTE_PATHS.HOME },
      {"bg-[url('/assets/destination/background-destination-mobile.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')]" : location.pathname === ROUTE_PATHS.DESTINATION },
      {"bg-[url('/assets/crew/background-crew-mobile.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] md:bg-[url('/assets/crew/background-crew-tablet.jpg')]" : location.pathname === ROUTE_PATHS.CREW },
      {"bg-[url('/assets/technology/background-technology-mobile.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] md:bg-[url('/assets/technology/background-technology-tablet.jpg')]" : location.pathname === ROUTE_PATHS.TECHNOLOGY },
      )}>
      <header className="flex items-center justify-between mt-6 md:mt-10 px-6 md:px-10 lg:px-16">
        <div className="flex items-center w-full gap-6 md:gap-16">
          <Icon icon="logo" className="cursor-pointer" />
          <div className="hidden md:block flex-grow h-px bg-white/25" />
        </div>

        <NavigationMenu menuClassName="px-4 sm:px-6 md:px-12 lg:px-16 gap-6 md:gap-8 bg-white/5 backdrop-blur-lg" />
      </header>

      <Outlet />
    </div>
  );
};

export default Home;
