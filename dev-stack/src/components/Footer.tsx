import imageLogo from '../assets/logo-text.png'


const Footer = () => {
    return (
        <div>

                  <div className="divider"></div>

            <div className='grid grid-cols-4 items-center  gap-5 p-5 ml-17'>

                <div className=''>
                    <img src={imageLogo} alt="" />
                    <p className='text-[#64748B] mt-3'>Curated tools, technologies, and resources for developers building modern software.</p>

                    <ul className='flex items-center gap-6 mt-3 font-semibold'>
                        <li>GitHub</li>
                        <li>Twitter</li>
                        <li>Linkedin</li>
                    </ul>
                </div>

                <div className='ml-50'>
                    <p className='font-semibold mb-2'>PRODUCT</p>
                    <p className='text-[#64748B]'>Home</p>
                    <p className='text-[#64748B]'>Technologies</p>
                    <p className='text-[#64748B]'>Projects</p>
                </div>

                <div className='ml-40'>
                    <p className='font-semibold mb-2'>Company</p>
                    <p className='text-[#64748B]'>About</p>
                    <p className='text-[#64748B]'>Contact</p>
                    <p className='text-[#64748B]'>Careers</p>
                </div>

                <div className='ml-35'>
                    <p className='font-semibold mb-2'>Legal</p>
                    <p className='text-[#64748B]'>Privacy Policy</p>
                    <p className='text-[#64748B]'>Terms of Service</p>
                </div>

            </div>

           
            <hr className='border-[#dae0e7] w-420 ml-17 mt-12'/>

            <div className=' text-[#64748B] ml-17 flex mt-4 mb-10'>
                <h2>© 2026 Dev Stack. All rights reserved.</h2>

                <div className='text-[#64748B] flex gap-7 ml-320'>
                    <h2>Privacy</h2>
                    <h2>Terms</h2>

                </div>

            </div>


            
        </div>
    );
};

export default Footer;