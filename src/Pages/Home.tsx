import Icon from '../components/Icon';
import NavigationMenu from '../components/NavigationMenu';
import { Outlet } from "react-router";
import { ROUTE_PATHS } from '../utils/routePaths';
import { useMemo } from 'react';
import { useLocation } from "react-router";
import cn from 'classnames'

const Home = () => {
  const location = useLocation()
  const bgPath = useMemo(() => {
    switch(location.pathname){
      case ROUTE_PATHS.HOME:
        return "src/assets/home/background-home-";
      case ROUTE_PATHS.DESTINATION:
        return "src/assets/destination/background-destination-";
      default:
        return "src/assets/home/background-home-";
    }
  }, [location.pathname]);

  return (
    <div className={cn("flex flex-col w-full min-h-screen bg-no-repeat bg-cover bg-center ",
      {"bg-[url('src/assets/home/background-home-mobile.jpg')] md:bg-[url('src/assets/home/background-home-desktop.jpg')] sm:bg-[url('src/assets/home/background-home-tablet.jpg')]" : location.pathname === ROUTE_PATHS.HOME },
      {"bg-[url('src/assets/destination/background-destination-mobile.jpg')] md:bg-[url('src/assets/destination/background-destination-desktop.jpg')] sm:bg-[url('src/assets/destination/background-destination-tablet.jpg')]" : location.pathname === ROUTE_PATHS.DESTINATION },
      {"bg-[url('src/assets/crew/background-crew-mobile.jpg')] md:bg-[url('src/assets/crew/background-crew-desktop.jpg')] sm:bg-[url('src/assets/crew/background-crew-tablet.jpg')]" : location.pathname === ROUTE_PATHS.CREW },
      {"bg-[url('src/assets/technology/background-technology-mobile.jpg')] md:bg-[url('src/assets/technology/background-technology-desktop.jpg')] sm:bg-[url('src/assets/technology/background-technology-tablet.jpg')]" : location.pathname === ROUTE_PATHS.TECHNOLOGY },
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
