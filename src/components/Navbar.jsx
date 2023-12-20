import { useEffect, useRef, useState } from "react";
import Theme from "./Theme";
import avatar from '/images/icons/Avatar.svg'
import arrowDown from '/images/icons/arrow_down.svg'

const Navbar = () => {

    const [show, setShow] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // console.log('Click outside');
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                console.log('Closing dropdown');
                setShow(false);
            }
        };

        // console.log('Adding event listener');
        document.addEventListener('click', handleClickOutside);

        return () => {
            // console.log('Removing event listener');
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex justify-between items-center ml-10 md:ml-0">
            <button className="text-2xl md:text-[#646F75] font-semibold text-white dark:text-white">Home</button>

            <div className="ml-auto flex items-center gap-4 relative">
                <Theme />
                {/* dropdown btn */}
                <div
                    ref={dropdownRef}
                    onClick={() => setShow(!show)} className="flex cursor-pointer relative z-10 md:static">
                    <img src={avatar} className="shadow rounded-full" alt="" />
                    <img src={arrowDown} className="hidden md:block" alt="" />
                </div>
                {/* drop down menu */}
                <ul
                    className={`${show ? 'block' : 'hidden'} absolute z-20 top-14 duration-300 bg-white shadow rounded pt-1`}>
                    <div className="px-4 py-3 text-sm text-[#646F75] ">
                        <div>Atik Bhuiyan</div>
                        <div className="font-medium truncate">atik@gmail.com</div>
                    </div>
                    <ul className="py-2 border-t text-sm text-[#646F75]">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">History</a>
                        </li>
                    </ul>
                    <div className="py-2 border-t">
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 ">Sign out</a>
                    </div>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;