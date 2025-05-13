import { useMemo, useState } from "react";
import Typography from "./Typography";
import cn from "classnames";
import { theme } from "../utils/constants";

type PaginationProps = {
  pageSize: number;
  totalItems: number;
  onClick?: (page: number) => void;
  className?: string
};

const LargePagination: React.FC<PaginationProps> = ({ pageSize, totalItems, onClick, className }) => {
  const [selectedPage, setSelectedPage] = useState(0);

  const pageCount = useMemo(() => Math.ceil(totalItems / pageSize), [pageSize, totalItems]);

  const handleOnClick = (i: number) => {
    !!onClick && onClick(i);
    setSelectedPage(i);
  };

  return (
    <div className={cn("flex flex-row gap-10",className)}>
      {Array.from({ length: pageCount }, (_, i) => (
        <Typography
          key={i}
          onClick={() => handleOnClick(i)}
          preset={4}
          className={cn(
            "flex flex-row justify-center items-center  h-[54px] w-[54px] md:h-[54px] md:w-[54px] lg:h-[80px] lg:w-[80px] rounded-[999px] border border-[rgba(255,255,255,0.25)] hover:border-white cursor-pointer",
            selectedPage === i ? `text-[${theme.BLUE[900]}] bg-white` : "text-white"
          )}
        >
          {i + 1}
        </Typography>
      ))}
    </div>
  );
};

export default LargePagination;
