import { cn } from '@/app/lib/utils';
import {
  LoaderCircleIcon,
  LoaderIcon,
  LoaderPinwheelIcon,
  type LucideProps,
} from 'lucide-react';

type SpinnerVariantProps = LucideProps;
const Spinner = ({ className, ...props }: SpinnerVariantProps) => {
    return (
        <LoaderPinwheelIcon className={cn('animate-spin', className)} {...(props as any)} />
    )
};

export default Spinner