"use client";
import { SimpleTable } from "@/components/table/simpleTable";
import StoreLayout from "@/layout/StoreLayout";
import { useGetAllStoresQuery } from "@/redux/AdminStore/AdminStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";

const page = () => {
    const [storeListData, setStoreListData] = useState([])

    const router = useRouter()

    const tableHeadNames = [
        "ID",
        "Store Name",
        "Kyc Status",
        "Verified",
        "Role",
        "Billing",
        "Created Date",
        "Review Kyc",
        "Action",
        "Details",
        "View",
    ];

    const columnClasses = [
        "w-[5rem] text-left",
        "w-[20%] text-left",
        "w-[10rem]",
        "w-[10rem]",
        "w-[10rem]",
        "w-[10rem]",
        "w-[10rem]",
        "w-[10rem] ",
        "w-[10rem] ",
        "w-[10rem] flex items-center justify-center",
        "w-[10rem]",
    ];


    // Get All Store API
    const getAllStoresAPI = useGetAllStoresQuery()
    const getAllStoreData = getAllStoresAPI?.data
    const getAllStoreLoading = getAllStoresAPI?.isLoading

    // Mapping over your data to change the structure if needed
    const formattedData = (originalData) => {
        const data = originalData?.map((item) => {
            return {
                id: item._id.slice(-4),
                StoreName: item.storeName,
                kycStatus: item.kyc !== null ? item.kyc?.status?.[0] : "Incomplete",
                Verified: item.verified === true ? "true" : "false",
                Role: item.role?.[0],
                Billing: item.kyc?.acountID === "" ? "Deactive" : "Active",
                CreatedDate: item?.createdAt?.split("T")[0],
                ReviewKyc: <div className={item.verified === true ? "hidden" : "block"}>
                    <select name="" id="" className="outline-none hover:bg-transparent w-[8rem] bg-transparent cursor-pointer">
                        <option value="">Update Status</option>
                        <option value="">Accept</option>
                        <option value="">Reject</option>
                    </select>
                </div>,
                Action: <div>
                    <select name="" id="" className="outline-none hover:bg-transparent w-[5rem] bg-transparent cursor-pointer">
                        <option value="">Active</option>
                        <option value="">Deactive</option>
                    </select>
                </div>,
                Details: <FaDownload className="text-xl text-right text-[grey] cursor-pointer active:scale-[0.95]" />,
                View: <span className="flex items-center justify-center">
                    <IoEye className="text-xl text-right text-[grey] cursor-pointer active:scale-[0.95]" onClick={() => router.push(`/store-list/store-profile/${item?._id}`)} />
                </span>

            }
        });
        setStoreListData(data)
    }

    useEffect(() => {
        formattedData(getAllStoreData)
    }, [getAllStoresAPI])

    // console.log(storeListData)
    // console.log(getAllStoreData)



    return (
        <StoreLayout>
            <h4 className="text-xl text-secondary-color my-3">
                {" "}
                Dashboard Overview{" "}
            </h4>
            <div className="bg-white rounded-xl blur__effect box_shadow_sec h-full overflow-auto">
                <div className="flex max-sm:flex-col items--center justify-between p--2">
                    <div className="p-2 px-5 pt-3">
                        <h4 className="font-semibold text-3xl text-primary-color">
                            Store List
                        </h4>
                        <p className="text-[#6E7191]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>


                </div>

                <div className="p-2">
                    <SimpleTable
                        tableHeadNames={tableHeadNames}
                        tableData={storeListData}
                        filterClassName={"my-5"}
                        columnClasses={columnClasses}
                    />
                </div>
            </div>
        </StoreLayout>
    )
}

export default page
