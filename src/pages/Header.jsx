import HeaderCard from '../components/HeaderCard';
import Navbar from '../components/Navbar';
import banner1 from '/images/images/banner-1.png'

const Header = () => {
    return (
        <div className="">
            <div className="flex flex-col md:flex-row p-6 justify-between items-center bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] md:rounded-lg relative -z-0">
                <div className='pt-16 md:pt-0'>
                    <img src={banner1} alt="img" />
                </div>
                <div className=" text-white pb-6 md:pb-0">
                    <h1 className="text-2xl font-semibold mb-6">Hello, Mary Jane!</h1>
                    <div className='text-base'>
                        <p> Stay Up-to-Date with your appointments. </p>
                        <p className='mt-3'> You Have No pending Reports</p>
                    </div>
                </div>
            </div>
            <div className='px-8 md:px-0'>
                <HeaderCard />
            </div>
        </div>
    );
};

export default Header;