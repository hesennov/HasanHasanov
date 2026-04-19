import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

// ---------------------------------------------------------------
// Compound Card Component
// ---------------------------------------------------------------
interface CardRootProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

function CardRoot({ children, className, hover = false, glow = false, onClick }: CardRootProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className={cn(
        'glass rounded-xl overflow-hidden',
        hover && 'cursor-pointer transition-shadow duration-300',
        glow && 'hover:glow-blue',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('px-6 pt-6 pb-4', className)}>
      {children}
    </div>
  );
}

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

function CardBody({ children, className }: CardBodyProps) {
  return (
    <div className={cn('px-6 pb-6', className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('px-6 py-4 border-t border-white/5', className)}>
      {children}
    </div>
  );
}

// ---------------------------------------------------------------
// Compound export — Card.Root, Card.Header, Card.Body, Card.Footer
// ---------------------------------------------------------------
export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
};
