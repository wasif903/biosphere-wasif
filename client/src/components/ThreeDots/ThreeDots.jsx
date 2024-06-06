import React, { useEffect } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrUpdate } from 'react-icons/gr';
import { IoEye } from 'react-icons/io5';
import { RiDeleteBin5Line } from 'react-icons/ri';

const ThreeDots = ({ update, view, del, isLoading, isOpen, setOpenMenuIndex, index }) => {
    console.log("isOpen:", isOpen); // Debugging to check isOpen value
    console.log("index:", index); // Debugging to check index value

    const handleUpdate = () => {
        update();
        setOpenMenuIndex(null);
    };

    const handleView = () => {
        view();
        setOpenMenuIndex(null);
    };

    const handleDelete = () => {
        del();
        setOpenMenuIndex(null);
    };

    return (
        <div className="bg-transparent gap-2 pr-2 flex items-center justify-center relative">
            <BsThreeDotsVertical
                size={20}
                className="cursor-pointer"
                onClick={() => setOpenMenuIndex(isOpen ? null : index)}
            />
            {isOpen && (
                <div className="absolute top-9 right-6 rounded z-50 flex flex-col gap-3 p-4 bg-primary-color">
                    <span className="flex gap-2" onClick={handleUpdate}>
                        <GrUpdate className="text-lg text-right text-white cursor-pointer active:scale-[0.95] active:rotate-45 transition-all ease-out" />
                        <p className="text-white">Update</p>
                    </span>
                    <span className="flex gap-2" onClick={handleView}>
                        <IoEye className="text-lg text-right text-white cursor-pointer active:scale-[0.95]" />
                        <p className="text-white">View</p>
                    </span>
                    <span className="flex gap-2" onClick={handleDelete}>
                        <RiDeleteBin5Line className="text-lg text-right text-white cursor-pointer active:scale-[0.95]" />
                        {isLoading ? <p className="text-white">Loading...</p> : <p className="text-white">Delete</p>}
                    </span>
                </div>
            )}
        </div>
    );
};

export default ThreeDots;
