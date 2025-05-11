import { useState } from "react";
import cn from "classnames";
import Typography from "./Typography";

type TabsMenuProps = {
  menuClassName?: string;
  itemClassName?: string;
  menu: string[], 
  onChange?: Function
};

const TabsMenu = ({ menuClassName, itemClassName,menu = [], onChange}: TabsMenuProps) => {


  const [selectedItemId, setSelectedItemId] = useState(0);

  return (
    <div className={cn(
      "flex flex-col sm:flex-row gap-[32px] sm:gap-[48px] cursor-pointer",
      menuClassName
    )}>
      {menu.map((tab,id) => {
        const isSelected = selectedItemId === id;
        return (
          <div
            key={id}
            onClick={() => {
              setSelectedItemId(id)
              !!onChange && onChange(id,tab)
            }}
            className={cn(
              `
                flex flex-row items-center gap-[12px]
                w-[222px] h-[19px] sm:w-max sm:h-[32px]
                transition-all duration-200 box-content
              `,
              {
                "border-r-[3px] sm:border-b-[3px] sm:border-r-0 border-white text-white": isSelected,
                "hover:border-r-[3px] sm:hover:border-b-[3px] sm:hover:border-r-0 hover:border-[rgba(255,255,255,0.5)] text-[#D0D6F9]": !isSelected,
              },
              itemClassName
            )}
          >
            <Typography preset={8}>{tab.toUpperCase()}</Typography>
          </div>
        );
      })}
    </div>
  );
};

export default TabsMenu;
