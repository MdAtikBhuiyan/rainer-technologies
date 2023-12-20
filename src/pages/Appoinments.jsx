
const Appoinments = () => {
    const appointmentsInfo = [
        {
            year: "2022",
            month: "Sep",
            date: "22",
            name: "Dr. Muhammad Abdul Hussein",
            role: "Cardiologist",
            slot: "Morning",
            time: "10.00 AM",
            color: '#FF9898'
        },
        {
            year: "2022",
            month: "Sep",
            date: "22",
            name: "Dr. Muhammad Abdul Hussein",
            role: "Cardiologist",
            slot: "Morning",
            time: "10.00 AM",
            color: '#FFF598'
        },
        {
            year: "2022",
            month: "Sep",
            date: "22",
            name: "Dr. Muhammad Abdul Hussein",
            role: "Cardiologist",
            slot: "Morning",
            time: "10.00 AM",
            color: '#98FFC1'
        },
        {
            year: "2022",
            month: "Sep",
            date: "22",
            name: "Dr. Muhammad Abdul Hussein",
            role: "Cardiologist",
            slot: "Morning",
            time: "10.00 AM",
            color: '#98C7FF'
        },
    ];

    return (
        <div className="bg-white dark:bg-[#2C2221] shadow shadow-[#b8b7b7] rounded-md p-5 pb-2 overflow-y-scroll md:overflow-scroll h-[500px] lg:h-auto lg:overflow-hidden">

            <h1 className="text-base text-[#2E1619] dark:text-white">Upcoming Appointments</h1>

            <div className="mt-5">
                <ol className="relative border-s-2 border-[#EDEBEB]">

                    {
                        appointmentsInfo.map((data, idx) => (
                            <li
                                key={idx}
                                className="ms-4 relative flex flex-col justify-center mb-5">
                                <div
                                    style={{ backgroundColor: data.color }}
                                    className="absolute w-3 h-3 rounded-full -start-[1.45rem] "></div>
                                {/* content */}
                                <div className="flex">
                                    <div className="z-10 bg-white text-[#384449] text-[20px] font-medium border border-[#EDEBEB] p-3 rounded-2xl flex flex-col justify-center items-center">
                                        <h1 className="text-xs lg:text-sm">{data.year}</h1>
                                        <h1 className="text-sm lg:text-xl text-[#384449] font-bold py-2">
                                            {data.date}
                                        </h1>
                                        <h1 className="text-sm lg:ext-xl">{data.month}</h1>
                                    </div>

                                    <div className="z-0 -ml-3 flex flex-col w-full border border-[#FDDAD6] bg-[#FFF5F5] dark:bg-[#413838] px-6 py-3 rounded-2xl leading-6">
                                        <h1 className="text-sm lg:text-base text-primary-text font-medium dark:text-[#fff]">
                                            {data.name}
                                        </h1>
                                        <h1 className="text-sm text-primary-text dark:text-[#fff]">
                                            {data.role}
                                        </h1>
                                        <div className="mt-auto text-xs lg:text-sm flex gap-2 lg:gap-4 items-center text-[#8A8686] ">
                                            <h1 className="bg-white px-1.5 lg:2 py-1 rounded-md">

                                                Slot:
                                                <span className=" text-[#384449]">
                                                    {data.slot}
                                                </span>
                                            </h1>
                                            <h1 className="bg-white px-1.5 lg:2 py-1 rounded-md">
                                                Time:
                                                <span className=" text-[#384449]">
                                                    {data.time}
                                                </span>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }

                </ol>

            </div>

        </div>
    );
};

export default Appoinments;