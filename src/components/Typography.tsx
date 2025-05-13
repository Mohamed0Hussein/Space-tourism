import type { ElementType, ReactNode } from 'react';
import cn from 'classnames';

type TypoProps = {
  preset?: number;
  component?: ElementType;
  className?: string;
  children: ReactNode;
  onClick?: Function,
};

const Typography = ({ preset = 1, component: Component = 'div', onClick, className, children , ...rest}: TypoProps) => {
  let presetClassName = '';

  switch (preset) {
    case 1:
      presetClassName = 'font-bellefair text-[144px]  tracking-[0px]';
      break;
    case 2:
      presetClassName = 'font-bellefair text-[100px] tracking-[0px]';
      break;
    case 3:
      presetClassName = 'font-bellefair text-[56px] tracking-[0px]';
      break;
    case 4:
      presetClassName = 'font-bellefair text-[32px] tracking-[0px]';
      break;
    case 5:
      presetClassName = 'font-barlow-condensed text-[28px] tracking-[4px]';
      break;
    case 6:
      presetClassName = 'font-bellefair text-[28px] tracking-[0px]';
      break;
    case 7:
      presetClassName = 'font-barlow-condensed text-[14px] tracking-[2px]';
      break;
    case 8:
      presetClassName = 'font-barlow text-[16px] tracking-[2px]';
      break;
    case 9:
      presetClassName = 'font-barlow-condensed text-[18px]  tracking-[0px]';
      break;
    default:
      presetClassName = 'font-bellefair text-[144px]  tracking-[0px]';
      break;
  }

  return (
    <Component onClick={onClick} className={cn(presetClassName,className)} {...rest}>
      {children}
    </Component>
  );
};

export default Typography;
