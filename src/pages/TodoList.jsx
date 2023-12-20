
const TodoList = () => {
    return (
        <div className="bg-white dark:bg-[#2C2221] shadow p-5 rounded-md overflow-y-scroll md:overflow-scroll h-[500px] lg:h-auto lg:overflow-hidden">
            <h1 className=" text-base font-medium text-[#2E1619] dark:text-[#D1D5DB] pb-2">
                TO-DO-LIST
            </h1>
            <div className="flex items-start gap-5">
                <textarea
                    name=""
                    id=""
                    rows="3"
                    className="border border-[#EDEBEB] rounded-md w-full focus:border-[#FF7594] focus:outline-none p-2 dark:bg-[#EDEBEB] dark:border-[#fff]"
                ></textarea>
                <button className="bg-gradient-to-r from-[#FF7594] to-[#FF7C65] hidden lg:flex items-center gap-1 p-3 rounded-md w-24 justify-center text-white text-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                    >
                        <path
                            d="M5.75356 10.5C5.59256 10.5 5.43856 10.4335 5.32831 10.3163L2.49156 7.29521C2.27047 7.06071 2.28272 6.69146 2.51722 6.47096C2.75231 6.25046 3.12156 6.26213 3.34147 6.49663L5.74773 9.05804L10.6524 3.69021C10.8706 3.45163 11.2392 3.43588 11.4772 3.65288C11.7146 3.86988 11.731 4.23913 11.514 4.47655L6.18406 10.3099C6.07498 10.43 5.91981 10.4989 5.75764 10.5H5.75356Z"
                            fill="#FBFBFB"
                        />
                    </svg>
                    Add
                </button>
            </div>
            {/* select all */}
            <div className="flex justify-between items-center mt-6">
                <div className="text-sm flex items-center gap-3 text-[#2E1619] dark:text-[#D1D5DB]">
                    <input type="checkbox"
                        className="checkbox"
                        // disabled
                    />
                    Select All
                </div>
                <button className="bg-gradient-to-r from-[#FF7594] to-[#FF7C65] flex items-center gap-1 p-3 rounded-md w-28 justify-center text-white text-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                    >
                        <path
                            d="M5.75356 10.5C5.59256 10.5 5.43856 10.4335 5.32831 10.3163L2.49156 7.29521C2.27047 7.06071 2.28272 6.69146 2.51722 6.47096C2.75231 6.25046 3.12156 6.26213 3.34147 6.49663L5.74773 9.05804L10.6524 3.69021C10.8706 3.45163 11.2392 3.43588 11.4772 3.65288C11.7146 3.86988 11.731 4.23913 11.514 4.47655L6.18406 10.3099C6.07498 10.43 5.91981 10.4989 5.75764 10.5H5.75356Z"
                            fill="#FBFBFB"
                        />
                    </svg>
                    Done
                </button>
            </div>
            <div className="mt-4 font-medium text-[#2E1619] dark:text-[#D1D5DB] text-sm space-y-5">
                <div className="flex items-center gap-3">
                    <input type="checkbox" checked className="" />
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className="text-[#E0E0E0] dark:text-[#A6A6A6]">Last Added: 10 sep 2022</span>
                </div>
                <div className="flex items-center gap-3 ">
                    <input type="checkbox" checked disabled className="checkbox " />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className=" text-[#E0E0E0] dark:text-[#A6A6A6]">Last Added: 10 sep 2022</span>
                </div>
                <div className=" flex items-center gap-3">
                    <input type="checkbox" checked disabled className="checkbox " />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className=" text-[#E0E0E0] dark:text-[#A6A6A6]">Last Added: 10 sep 2022</span>
                </div>
                <div className=" flex items-center gap-3">
                    <input type="checkbox" checked disabled className="checkbox " />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className=" text-[#E0E0E0] dark:text-[#A6A6A6]">Last Added: 10 sep 2022</span>
                </div>
            </div>
        </div>
    );
};

export default TodoList;