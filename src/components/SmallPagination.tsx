import { useMemo, useState } from "react";
import cn from "classnames";

type PaginationProps = {
  pageSize: number;
  totalItems: number;
  onClick?: (page: number) => void;
  className?: string;
};

const SmallPagination: React.FC<PaginationProps> = ({ pageSize, totalItems, onClick, className }) => {
  const [selectedPage, setSelectedPage] = useState(0);

  const pageCount = useMemo(() => Math.ceil(totalItems / pageSize), [pageSize, totalItems]);

  const handleOnClick = (i: number) => {
    !!onClick && onClick(i);
    setSelectedPage(i);
  };

  return (
    <div className={cn("flex flex-row gap-[54px]",className)}>
      {Array.from({ length: pageCount }, (_, i) => (
        <div
          key={i}
          onClick={() => handleOnClick(i)}
          className={cn(
            "h-[10px] w-[10px] md:h-[10px] md:w-[10px] lg:h-[15px] lg:w-[15px] rounded-[999px] bg-[rgba(255,255,255,0.1744)] hover:bg-[#979797] cursor-pointer",
            selectedPage === i ? "bg-white " : ""
          )}
        >
        </div>
      ))}
    </div>
  );
};

export default SmallPagination;
