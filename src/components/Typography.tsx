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
      presetClassName = 'font-bellefair text-[144px] leading-[171.9%] tracking-[0px]';
      break;
    case 2:
      presetClassName = 'font-bellefair text-[100px] leading-[114.6%] tracking-[0px]';
      break;
    case 3:
      presetClassName = 'font-bellefair text-[56px] leading-[64.2%] tracking-[0px]';
      break;
    case 4:
      presetClassName = 'font-bellefair text-[32px] leading-[36.7%] tracking-[0px]';
      break;
    case 5:
      presetClassName = 'font-barlow-condensed text-[28px] leading-[33.6%] tracking-[4px]';
      break;
    case 6:
      presetClassName = 'font-bellefair text-[28px] leading-[32.1%] tracking-[0px]';
      break;
    case 7:
      presetClassName = 'font-barlow-condensed text-[14px] leading-[16.8%] tracking-[2px]';
      break;
    case 8:
      presetClassName = 'font-barlow text-[16px] leading-[19.2%] tracking-[2px]';
      break;
    case 9:
      presetClassName = 'font-barlow-condensed text-[18px] leading-[180%] tracking-[0px]';
      break;
    default:
      presetClassName = 'font-bellefair text-[144px] leading-[171.9%] tracking-[0px]';
      break;
  }

  return (
    <Component onClick={onClick} className={cn(presetClassName,className)} {...rest}>
      {children}
    </Component>
  );
};

export default Typography;
