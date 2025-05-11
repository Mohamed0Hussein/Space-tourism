import { useState } from "react";
import { useNavigate } from "react-router";
import cn from "classnames";

import Typography from "./Typography";
import { ROUTE_PATHS } from "../utils/routePaths";

const tabs = [
  { id: "00", label: "Home", path: ROUTE_PATHS.HOME},
  { id: "01", label: "Destination", path: ROUTE_PATHS.DESTINATION },
  { id: "02", label: "Crew" },
  { id: "03", label: "Technology" },
];

type ItemProps = {
  label: string;
  id: string;
  onClick: (id: string) => void;
  selected?: boolean;
  className?: string;
  path?: string
};


const NavigationItem = ({ label, id, onClick, selected, className, path }: ItemProps) => {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => {
        onClick(id)
        navigate(`${path}`)
      }}
      className={cn(
        `
          flex flex-row items-center gap-[12px] text-white box-content
          w-[222px] h-[19px] sm:w-max sm:h-[96px]
          transition-all duration-100
        `,
        {
          "border-r-[3px] sm:border-b-[3px] sm:border-r-[0px] border-white": selected,
          "hover:border-r-[3px] sm:hover:border-b-[3px] sm:hover:border-r-[0px] hover:border-[rgba(255,255,255,0.5)]": !selected,
        },
        className
      )}
    >
      <Typography preset={8} className="font-bold">{id}</Typography>
      <Typography preset={8}>{label}</Typography>
    </div>
  );
};

type MenuProps = {
  menuClassName?: string;
  itemClassName?: string;
};

const NavigationMenu = ({ menuClassName, itemClassName }: MenuProps) => {
  const [selectedItemId, setSelectedItemId] = useState(tabs[0].id);

  return (
    <div className={cn(
      "flex flex-col sm:flex-row gap-[27px] sm:gap-[48px] cursor-pointer",
      menuClassName
    )}>
      {tabs.map((tab) => (
        <NavigationItem
          key={tab.id}
          label={tab.label}
          id={tab.id}
          onClick={setSelectedItemId}
          selected={selectedItemId === tab.id}
          className={itemClassName}
          path={tab.path}
        />
      ))}
    </div>
  );
};

export default NavigationMenu;
