import { SimpleTable } from '@/components/table/simpleTable'
import Image from 'next/image';
import React from 'react'
import { MdDelete } from "react-icons/md";

const UserProfileOrderTable = () => {
  // Table Headers
  const queryTableHead = [
    "Product Name",
    "Variation",
    "Category",
    "Rating",
    "Store Name",
    "Order Date",
    "Completed Date",
    "Amount",
    "Status",
    "",
  ];

  // Table Data Array
  const queryRawData = [
    {
      _id: 1,
      product: "/images/bottel_.png",
      name: "Orinase-Met",
      variation: "03",
      category: "medical",
      rating: "4.7",
      storeName: "rose & co.",
      orderDate: "23 DEC 2024",
      completedDate: "28 DEC 2024",
      status: "completed",
      price: "$49.00",
    },
    {
      _id: 1,
      product: "/images/bottel_.png",
      name: "Orinase-Met",
      variation: "03",
      category: "medical",
      rating: "4.7",
      storeName: "rose & co.",
      orderDate: "23 DEC 2024",
      completedDate: "28 DEC 2024",
      status: "completed",
      price: "$49.00",
    },
    {
      _id: 1,
      product: "/images/bottel_.png",
      name: "Orinase-Met",
      variation: "03",
      category: "medical",
      rating: "4.7",
      storeName: "rose & co.",
      orderDate: "23 DEC 2024",
      completedDate: "28 DEC 2024",
      status: "completed",
      price: "$49.00",
    },
  ];

  // Mapping over your data to change the structure if needed
  const queryFormattedData = queryRawData.map((item) => ({
    product: <div className='flex items-center gap-2'>
      <Image src={item?.product} width={100} height={100} className='w-[3rem] h-auto' />
      <p className='font-semibold'>{item?.name}</p>
    </div>,
    Variation: item?.variation,
    category: item?.category,
    rating: item?.rating,
    storeName: item?.storeName,
    orderDate: item?.orderDate,
    completedDate: item?.completedDate,
    price: item?.price,
    status: <div className='px-4 py-2 bg-[#BEFFC1] rounded-full text-[#0AA612]'>{item?.status}</div>,
    delete: <div className='flex items-center justify-center'><MdDelete size={20} /></div>
  }));

  const queryColumnClasses = [
    "text-[#344767] text-left text-sm font-medium pl-5",
    "text-[#344767] text-sm font-medium w-[7rem]",
    "text-[#344767] text-sm font-medium w-[7rem]",
    "text-[#344767] text-sm font-medium w-[7rem]",
    "text-[#344767] text-sm font-medium w-[8rem]",
    "text-[#344767] text-sm font-medium w-[8rem]",
    "text-[#344767] text-sm font-medium w-[8rem]",
    "text-[#344767] text-sm font-medium w-[7rem]",
    "text-[#344767] text-sm font-medium w-[7rem]",
    "text-[#344767] text-sm font-medium w-[7rem]",
    "text-[#344767] text-sm font-medium w-[7rem]",
  ];

  return (
    <div className='bg-white rounded-xl pt-2'>
      <SimpleTable
        tableHeadNames={queryTableHead}
        filterClassName={"hidden"}
        tableData={queryFormattedData}
        columnClasses={queryColumnClasses}
      />
    </div>
  )
}

export default UserProfileOrderTable
