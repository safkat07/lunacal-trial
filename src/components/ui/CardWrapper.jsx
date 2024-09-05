import { cn } from '@/lib/utils'
import { FaRegCircleQuestion } from "react-icons/fa6";
import { RiGalleryView2 } from "react-icons/ri";


const CardWrapper = ({ children, className }) => {
    return (
      <div className={cn("h-72 w-3/4 mx-auto bg-[#363C43] rounded-2xl text-[#969696] px-5 py-5 overflow-y-auto content-container flex gap-x-2.5 relative shadow-custom", className)}>
        <div className='sticky top-5 flex h-1/2 justify-between items-center flex-col text-xl'>
          <FaRegCircleQuestion />
          <RiGalleryView2 />
        </div>
        <div className='ml-2'>
          {children}
        </div>
      </div>
    );
  };

export default CardWrapper
