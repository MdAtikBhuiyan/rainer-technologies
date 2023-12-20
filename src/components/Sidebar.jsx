import { useEffect, useState } from "react";
import arrowBack from '/images/icons/side_arrow_round.svg'
import menuBar from '/images/icons/sidebar-menu.svg'
import appoinmentBtn from '/images/icons/default_plus.svg'
import logo_doctor from '/images/icons/fluent_doctor-filled.svg'
import { IoIosArrowBack } from "react-icons/io";
import { FiMenu, FiHome, FiUser, FiCalendar } from "react-icons/fi";
import { MdArrowBackIosNew, MdHistory } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Sidebar = ({ setSidebarOpen }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setSidebarOpen(open)
    }, [open, setSidebarOpen])

    const darkMode = document.documentElement.classList

    const Menus = [
        {
            title: "Home",
            src: "/home.svg",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="fill-[#FF7594]">
                <path d="M26.6665 10.6667L18.6665 3.65334C17.9332 2.9974 16.9838 2.63477 15.9999 2.63477C15.016 2.63477 14.0666 2.9974 13.3332 3.65334L5.33322 10.6667C4.90971 11.0454 4.57175 11.5101 4.34184 12.0297C4.11194 12.5493 3.99537 13.1118 3.99988 13.68V25.3333C3.99988 26.3942 4.42131 27.4116 5.17146 28.1618C5.9216 28.9119 6.93902 29.3333 7.99988 29.3333H23.9999C25.0607 29.3333 26.0782 28.9119 26.8283 28.1618C27.5785 27.4116 27.9999 26.3942 27.9999 25.3333V13.6667C28.0025 13.1008 27.885 12.5407 27.6552 12.0236C27.4253 11.5064 27.0884 11.0439 26.6665 10.6667ZM18.6665 26.6667H13.3332V20C13.3332 19.6464 13.4737 19.3072 13.7237 19.0572C13.9738 18.8071 14.3129 18.6667 14.6665 18.6667H17.3332C17.6868 18.6667 18.026 18.8071 18.276 19.0572C18.5261 19.3072 18.6665 19.6464 18.6665 20V26.6667ZM25.3332 25.3333C25.3332 25.687 25.1927 26.0261 24.9427 26.2761C24.6926 26.5262 24.3535 26.6667 23.9999 26.6667H21.3332V20C21.3332 18.9391 20.9118 17.9217 20.1616 17.1716C19.4115 16.4214 18.3941 16 17.3332 16H14.6665C13.6057 16 12.5883 16.4214 11.8381 17.1716C11.088 17.9217 10.6665 18.9391 10.6665 20V26.6667H7.99988C7.64626 26.6667 7.30712 26.5262 7.05707 26.2761C6.80702 26.0261 6.66655 25.687 6.66655 25.3333V13.6667C6.66679 13.4774 6.70734 13.2903 6.78551 13.1178C6.86367 12.9454 6.97766 12.7916 7.11988 12.6667L15.1199 5.66667C15.3632 5.45292 15.676 5.33503 15.9999 5.33503C16.3238 5.33503 16.6366 5.45292 16.8799 5.66667L24.8799 12.6667C25.0221 12.7916 25.1361 12.9454 25.2143 13.1178C25.2924 13.2903 25.333 13.4774 25.3332 13.6667V25.3333Z" />
            </svg>
        },
        {
            title: "Patient Profile",
            src: "/user.svg",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="fill-black dark:fill-white">
                <path d="M5.33325 28V26.6667C5.33325 22.2484 8.91497 18.6667 13.3333 18.6667H18.6666C23.0849 18.6667 26.6666 22.2484 26.6666 26.6667V28" stroke="#2E1619" strokeWidth="2" strokeLinecap="round" />
                <path d="M15.9998 14.6667C13.0543 14.6667 10.6665 12.2789 10.6665 9.33333C10.6665 6.38781 13.0543 4 15.9998 4C18.9453 4 21.3332 6.38781 21.3332 9.33333C21.3332 12.2789 18.9453 14.6667 15.9998 14.6667Z" stroke="#2E1619" strokeWidth="2" strokeLinecap="round" />
            </svg>
        },
        {
            title: "Appointment",
            src: "/calendar.svg",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="fill-white dark:fill-white">
                <path d="M5.84615 7.6925C5.35652 7.6925 4.88695 7.88701 4.54073 8.23323C4.1945 8.57944 4 9.04902 4 9.53864V26.1539C4 26.6435 4.1945 27.1131 4.54073 27.4593C4.88695 27.8055 5.35652 28 5.84615 28H26.1538C26.6435 28 27.1131 27.8055 27.4593 27.4593C27.8055 27.1131 28 26.6435 28 26.1539V9.53864C28 9.04902 27.8055 8.57944 27.4593 8.23323C27.1131 7.88701 26.6435 7.6925 26.1538 7.6925H22.4615" stroke="#2E1619" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.53857 4V11.3846" stroke="#2E1619" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.4617 4V11.3846" stroke="#2E1619" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.53857 7.6925H18.7693" stroke="#2E1619" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.53831 17.8464C10.0481 17.8464 10.4614 17.4331 10.4614 16.9233C10.4614 16.4135 10.0481 16.0002 9.53831 16.0002C9.02851 16.0002 8.61523 16.4135 8.61523 16.9233C8.61523 17.4331 9.02851 17.8464 9.53831 17.8464Z" stroke="#2E1619" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.0002 17.8464C16.51 17.8464 16.9233 17.4331 16.9233 16.9233C16.9233 16.4135 16.51 16.0002 16.0002 16.0002C15.4904 16.0002 15.0771 16.4135 15.0771 16.9233C15.0771 17.4331 15.4904 17.8464 16.0002 17.8464Z" stroke="#2E1619" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.4614 17.8464C22.9712 17.8464 23.3845 17.4331 23.3845 16.9233C23.3845 16.4135 22.9712 16.0002 22.4614 16.0002C21.9516 16.0002 21.5383 16.4135 21.5383 16.9233C21.5383 17.4331 21.9516 17.8464 22.4614 17.8464Z" stroke="#2E1619" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.53831 23.3846C10.0481 23.3846 10.4614 22.9713 10.4614 22.4615C10.4614 21.9517 10.0481 21.5385 9.53831 21.5385C9.02851 21.5385 8.61523 21.9517 8.61523 22.4615C8.61523 22.9713 9.02851 23.3846 9.53831 23.3846Z" stroke="#2E1619" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        },
        {
            title: "Medical History",
            src: "/clock.svg",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="fill-black dark:fill-white">
                <path d="M16.0001 2.66669C12.5819 2.67644 9.29807 3.99857 6.82675 6.36002V4.00002C6.82675 3.6464 6.68627 3.30726 6.43622 3.05721C6.18618 2.80716 5.84704 2.66669 5.49341 2.66669C5.13979 2.66669 4.80065 2.80716 4.55061 3.05721C4.30056 3.30726 4.16008 3.6464 4.16008 4.00002V10C4.16008 10.3536 4.30056 10.6928 4.55061 10.9428C4.80065 11.1929 5.13979 11.3334 5.49341 11.3334H11.4934C11.847 11.3334 12.1862 11.1929 12.4362 10.9428C12.6863 10.6928 12.8267 10.3536 12.8267 10C12.8267 9.6464 12.6863 9.30726 12.4362 9.05721C12.1862 8.80716 11.847 8.66669 11.4934 8.66669H8.29341C10.0078 6.87517 12.2928 5.73689 14.7555 5.44758C17.2182 5.15827 19.7047 5.73599 21.7876 7.08141C23.8705 8.42684 25.4196 10.4559 26.1685 12.8197C26.9174 15.1836 26.8194 17.7345 25.8913 20.0339C24.9632 22.3333 23.263 24.2375 21.083 25.4191C18.903 26.6007 16.3794 26.9859 13.9462 26.5085C11.5129 26.031 9.32204 24.7207 7.7502 22.8029C6.17837 20.8851 5.3238 18.4796 5.33341 16C5.33341 15.6464 5.19294 15.3073 4.94289 15.0572C4.69284 14.8072 4.3537 14.6667 4.00008 14.6667C3.64646 14.6667 3.30732 14.8072 3.05727 15.0572C2.80722 15.3073 2.66675 15.6464 2.66675 16C2.66675 18.6371 3.44873 21.215 4.91382 23.4076C6.37891 25.6003 8.46129 27.3092 10.8976 28.3184C13.334 29.3276 16.0149 29.5916 18.6013 29.0772C21.1877 28.5627 23.5635 27.2928 25.4282 25.4281C27.2929 23.5634 28.5627 21.1876 29.0772 18.6012C29.5917 16.0148 29.3276 13.3339 28.3185 10.8976C27.3093 8.46123 25.6003 6.37884 23.4077 4.91376C21.215 3.44867 18.6372 2.66669 16.0001 2.66669ZM16.0001 10.6667C15.6465 10.6667 15.3073 10.8072 15.0573 11.0572C14.8072 11.3073 14.6667 11.6464 14.6667 12V16C14.6667 16.3536 14.8072 16.6928 15.0573 16.9428C15.3073 17.1929 15.6465 17.3334 16.0001 17.3334H18.6667C19.0204 17.3334 19.3595 17.1929 19.6096 16.9428C19.8596 16.6928 20.0001 16.3536 20.0001 16C20.0001 15.6464 19.8596 15.3073 19.6096 15.0572C19.3595 14.8072 19.0204 14.6667 18.6667 14.6667H17.3334V12C17.3334 11.6464 17.1929 11.3073 16.9429 11.0572C16.6928 10.8072 16.3537 10.6667 16.0001 10.6667Z" />
            </svg>
        },
        { title: "Settings", 
        src: "/setting.svg", 
        icon: <RiSettings4Line />, },
    ];

    return (
        <>
            {/* tablet and desktop screen */}
            <div className={`md:fixed lg:fixed top-0 z-20 hidden md:block`}>
                <div
                    className={` ${open ? "w-[264px]" : "w-[76px] md:w-24"
                        } relative dark:bg-[#2E1619] bg-white pt-8 h-screen duration-300`}
                >
                    {
                        open && <>
                            {/* <img
                                src={arrowBack}
                                className={`absolute cursor-pointer -right-4 top-9 w-[34px] h-[34px] bg-white ${!open && "rotate-180"}`}
                                onClick={() => setOpen(!open)}
                            /> */}
                            <MdArrowBackIosNew
                                className={`absolute cursor-pointer -right-3 top-9 text-3xl p-1 bg-white dark:bg-[#FF7594] text-[#FF7594] dark:text-white shadow-lg rounded-full`}
                                onClick={() => setOpen(!open)}
                            />
                        </>
                    }
                    {/* main logo */}
                    <div className="flex">
                        {
                            !open ?
                                <>
                                    <img
                                        src={menuBar}
                                        className={`cursor-pointer w-9 h-9 ml-6 mx-auto`}
                                        onClick={() => setOpen(!open)}
                                    />
                                </>
                                :
                                <div className={`flex items-center ml-6 gap-6`}>
                                    <img
                                        className=" w-9 h-9"
                                        src={logo_doctor}
                                        alt="logo icon"
                                    />
                                    <h1 className="text-2xl font-normal dark:text-[#fff]">
                                        Medi<span className=" text-[#FF7594]">Doc</span>
                                    </h1>
                                </div>
                        }

                    </div>

                    {/* nav links */}
                    <ul className={`pt-28 flex flex-col mx-6 gap-10`}>
                        {Menus.map((menu, index) => (
                            <li
                                key={index}
                                className={`flex text-[#2E1619] text-3xl dark:text-[#fff] whitespace-nowrap cursor-pointer hover:text-[#FF7594] transition-all transform duration-300 items-center `}
                            >
                                {/* <img className="w-9 h-9" src={`/images/icons${Menu.src}`} /> */}
                                {menu.icon}

                                <span className={`${!open && "hidden"} origin-left ml-6 duration-200 text-base`}>
                                    {menu?.title}
                                </span>
                            </li>
                        ))}

                        {/* appointment */}
                        <div className="absolute bottom-10">
                            {!open ? (

                                <div
                                    className={`p-2 w-12 h-12 bg-[#FF7C65] rounded-full flex flex-col gap-6`}
                                >
                                    <img src={appoinmentBtn} alt="" />
                                </div>

                            ) : (

                                <div className="flex justify-center">
                                    <button className="origin-left text-base font-medium bg-gradient-to-r from-[#FF7594]  to-[#FF7C65] p-3 rounded text-white whitespace-nowrap">
                                        New Appointment
                                    </button>
                                </div>

                            )}
                        </div>
                    </ul>

                </div>

            </div>

            {/* mobile screen */}

            <div className={`fixed h-screen z-20 md:hidden
            ${open ? "top-0" : "top-9"}
            `}>

                <svg
                    className={`bg-white p-1.5 cursor-pointer w-9 h-9 ml-6 mx-auto relative z-10 ${open ? "hidden" : "block"
                        }`}
                    onClick={() => setOpen(!open)}
                    xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28" fill="white">
                    <path d="M3.5 21H24.5" stroke="#FF7594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.5 14H24.5" stroke="#FF7594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.5 7H24.5" stroke="#FF7594" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>


                <div className={` ${open ? "w-[264px]" : "w-0"
                    } relative dark:bg-[#2E1619] bg-white pt-8 h-screen duration-300`}>

                    {
                        open && <>
                           <MdArrowBackIosNew
                                className={`absolute cursor-pointer -right-3 top-9 text-3xl p-1 bg-white dark:bg-[#FF7594] text-[#FF7594] dark:text-white shadow-lg rounded-full`}
                                onClick={() => setOpen(!open)}
                            />
                        </>
                    }
                    {/* main logo */}
                    <div className="flex">
                        {
                            !open ?
                                <>
                                    <img
                                        src={menuBar}
                                        className={`cursor-pointer w-9 h-9 ml-6 mx-auto hidden`}
                                        onClick={() => setOpen(!open)}
                                    />
                                </>
                                :
                                <div className={`flex items-center ml-6 gap-6`}>
                                    <img
                                        className=" w-9 h-9"
                                        src={logo_doctor}
                                        alt="logo icon"
                                    />
                                    <h1 className="text-2xl font-normal dark:text-[#fff]">
                                        Medi<span className="text-[#FF7594]">Doc</span>
                                    </h1>
                                </div>
                        }

                    </div>

                    {/* nav links */}
                    <ul className={`pt-28 flex flex-col mx-6 gap-10 ${open ? "block" : "hidden"}`}>
                        {Menus.map((menu, index) => (
                            <li
                            key={index}
                            className={`flex text-[#2E1619] text-3xl dark:text-[#fff] whitespace-nowrap cursor-pointer hover:text-[#FF7594] transition-all transform duration-300 items-center `}
                        >
                            {/* <img className="w-9 h-9" src={`/images/icons${Menu.src}`} /> */}
                            {menu.icon}

                            <span className={`${!open && "hidden"} origin-left ml-6 duration-200 text-base`}>
                                {menu?.title}
                            </span>
                        </li>
                        ))}

                        {/* appointment */}
                        <div className={`absolute bottom-10`}>
                            {!open ? (

                                <div
                                    className={`p-2 w-12 h-12 bg-[#FF7C65] rounded-full flex flex-col gap-6`}
                                >
                                    <img src={appoinmentBtn} alt="" />
                                </div>

                            ) : (

                                <div className="flex justify-center">
                                    <button className="origin-left text-base font-medium bg-gradient-to-r from-[#FF7594]  to-[#FF7C65] p-3 rounded text-white whitespace-nowrap">
                                        New Appointment
                                    </button>
                                </div>

                            )}
                        </div>
                    </ul>
                </div>
            </div>


        </>
    );
};

export default Sidebar;