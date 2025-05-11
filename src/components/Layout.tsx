// components/Layout.tsx
import NavigationMenu from "./NavigationMenu";
import Icon from "./Icon";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Shared Header with Navigation */}
      <header className="flex items-center justify-between mt-6 md:mt-10 px-6 md:px-10 lg:px-16">
        <div className="flex items-center w-full gap-6 md:gap-16">
          <Icon icon="logo" className="cursor-pointer" />
          <div className="hidden md:block flex-grow h-px bg-white/25" />
        </div>
        <NavigationMenu menuClassName="hidden md:flex px-8 md:px-12 lg:px-16 gap-6 md:gap-8 bg-white/5 backdrop-blur-lg" />
      </header>

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout;