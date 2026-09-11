import bannerLogo from '../assets/banner-stack.png'



const Banner = () => {
    return (

        <div className='grid grid-cols-2 items-center gap-6 p-5 ml-67'>

            <div>
                <h1 className="text-5xl font-bold">Build Your Ideal</h1>
                <h2 className="text-6xl font-bold">Development Stack</h2>
                <p className='p-1 mt-6'>Explore frontend, backend, database, and tooling options, <br /> compare them side by side, and put together the stack <br /> that fits your next project.</p>

                <div className='mt-14 flex gap-3'>
                    <button className='bg-linear-to-r from-[#F97316] to-[#EC4899] text-white px-6 py-3 rounded-lg font-semibold'>Explore Technologies</button>
                      <button className="border px-6 py-3 rounded-lg font-semibold">Learn More</button>

                </div>

            </div>

            <div className='m- 20'>
                <img src={bannerLogo} alt="" />
                 
            </div>
            
            
        </div>
    );
};

export default Banner;