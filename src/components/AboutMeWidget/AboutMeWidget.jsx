import  { useState } from 'react';
import CardWrapper from '../ui/CardWrapper';
import useTabData from '@/hooks/useTabData';


const AboutMeWidget = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [tabData, error, loading] = useTabData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <CardWrapper className="w-full xl:w-[720px] xl:h-[316px]">
      <div className='relative text-xl flex w-full justify-between items-center text-center bg-[#171717] h-16 px-5 rounded-2xl gap-5'>
        {tabData.map((tab) => (
          <button
            key={tab.id}
            aria-selected={activeTab === tab.id}
            className={`relative z-10 h-3/4 w-full rounded-xl transition-colors duration-300 ${activeTab === tab.id ? 'text-white' : 'text-gray-500'}`}
            onClick={() => setActiveTab(tab?.id)}
          >
            {tab.label}
          </button>
        ))}
        <div
          className={`absolute inset-2 h-3/4 w-1/3 bg-[#28292F] rounded-xl transition-transform duration-300 shadow-2xl shadow-black`}
          style={{ transform: `translateX(${tabData.findIndex(tab => tab.id === activeTab) * 95}%)` }}
        />
      </div>

      <div className='mt-5'>
        {tabData.map((tab) => (
          activeTab === tab.id && <div className='text-xl text-justify' key={tab.id}>{tab.content}</div>
        ))}
      </div>
    </CardWrapper>
  );
};

export default AboutMeWidget;
