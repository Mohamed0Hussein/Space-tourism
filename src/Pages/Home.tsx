import Icon from '../components/Icon'
import NavigationMenu from '../components/NavigationMenu'
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[url('src/assets/home/background-home-mobile.jpg')] md:bg-[url('src/assets/home/background-home-desktop.jpg')] sm:bg-[url('src/assets/home/background-home-tablet.jpg')] bg-no-repeat bg-cover bg-center">
      {/* Header */}
      <header className="flex items-center justify-between mt-6 md:mt-10 px-6 md:px-10 lg:px-16">
        <div className="flex items-center w-full gap-6 md:gap-16">
          <Icon icon="logo" className="cursor-pointer" />
          <div className="hidden md:block flex-grow h-px bg-white/25" />
        </div>
        <NavigationMenu menuClassName="hidden md:flex px-8 md:px-12 lg:px-16 gap-6 md:gap-8 bg-white/5 backdrop-blur-lg" />
      </header>

      <Outlet/>
    </div>
  )
}

export default Home