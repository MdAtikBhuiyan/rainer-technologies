import banner from '/images/images/banner-2.svg'

const CovidUpdates = () => {
    return (
        <div className="bg-white dark:bg-[#2C2221] shadow p-5 font-medium rounded-md">
            <div className="text-sm flex justify-between dark:text-[#fff]">
                <h1>Covid-19 Updates</h1>

                <div className="flex flex-col items-end">
                    <h1>
                        10 September 2022 <br />
                    </h1>
                    <h1 className=" text-[#8A8686] dark:text-[#fff]">Thursday 10:00:00 AM</h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-10 lg:gap-0">
                <div>
                    <img className="w-full h-full" src={banner} alt="" />
                </div>
                <div className="bg-gradient-to-r from-[#FF7594] to-[#FF7C65] h-full text-white text-[14px] px-4 py-6 rounded-md text-center leading-10">
                    <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-1">
                        <div>
                            <h1>Infection Number</h1>
                            <h1 className="text-3xl font-medium">500</h1>
                        </div>
                        <div>
                            <h1>Total Infection</h1>
                            <h1 className=" text-3xl font-medium">500,000</h1>
                        </div>
                        <div>
                            <h1>Infection Rate</h1>
                            <h1 className=" text-3xl font-medium">10%</h1>
                        </div>
                        <div>
                            <h1 className=" text-[14px] large:text-[10px]">Number of Death</h1>
                            <h1 className=" text-3xl font-medium">20</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CovidUpdates;