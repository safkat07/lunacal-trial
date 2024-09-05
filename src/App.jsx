
import AboutMeWidget from './components/AboutMeWidget/AboutMeWidget'
import PhotoWidget from './components/PhotoWidget/PhotoWidget'


const App = () => {
    return (
      <div className='flex w-full justify-center items-center min-h-screen px-4'>
        {/* Empty Left half for laptop */}
        <div className='hidden xl:block xl:w-1/2'></div>

        {/* Right side widgets */}
        <div className='w-full xl:w-1/2 m-auto flex flex-col gap-5 justify-center items-center'>
          <AboutMeWidget />
          <div className="w-[65%] h-1 bg-gray-700 shadow-md rounded-full mx-auto"></div>
          <PhotoWidget />
          <div className="w-[65%] h-1 bg-gray-700 shadow-md rounded-full mx-auto"></div>
        </div>
      </div>
    );
  };

export default App
