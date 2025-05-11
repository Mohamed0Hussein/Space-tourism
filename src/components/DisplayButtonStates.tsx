import cn from 'classnames';
import type { ReactNode } from 'react';
import Typography from './Typography';
import { theme } from '../utils/constants';

type ButtonProps = {
  className?: string;
  children?: ReactNode;
  onClick?: () => void
};

const DisplayButtonStates = ({ className, children, onClick }: ButtonProps) => {
  return (
    <div onClick={onClick}
      className={cn(
        `
          flex items-center justify-center cursor-pointer m-[88px]
          bg-white h-[272px] w-[272px] rounded-[999px]
          border-transparent hover:shadow-[0_0_0_88px_rgba(255,255,255,0.1)] transition-shadow
        `,
        className
      )}
      style={{ color: theme.BLUE[900] }}
    >
      <Typography preset={4}>{children}</Typography>
    </div>
  );
};

export default DisplayButtonStates;
