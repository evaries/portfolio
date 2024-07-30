import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { ReactNode } from 'react';

export type TooltipProps = {
  children?: ReactNode;
  text: string;
};

export const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  return (
    <TooltipProvider>
      <UITooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </UITooltip>
    </TooltipProvider>
  );
};

