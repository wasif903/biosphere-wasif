import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableSkeleton from "../skeleton/tables/TableSkeleton";

export function SimpleTable({ tableHeadNames, tableData, filterClassName, headerClasses="", columnClasses = ["", "", ""], isLoading, loadingLength }) {
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const filteredData = tableData?.filter((rowData) =>
    Object?.values(rowData)?.some((value) =>
      value?.toString()?.toLowerCase()?.includes(filterValue.toLowerCase())
    )
  );

  return (
    <>
      <div className={`${filterClassName} w-full`}>
        <input
          type="text"
          placeholder="Filter..."
          value={filterValue}
          onChange={handleFilterChange}
          className="border-[1px] border-[silver] outline-0 w--full bg-transparent text-primary-color p-[0.5rem] rounded-xl max-sm:w-[14rem] w-[15rem] m-3"
        />
      </div>

      {filteredData?.length === 0 ? (
        <div className="text-center text-gray-500">No data available</div>
      ) : isLoading ?
        <TableSkeleton loadingLength={loadingLength} /> :
        (
          <Table>
            <TableHeader>
              <TableRow>
                {tableHeadNames?.map((headName, index) => (
                  <TableHead
                    key={index}
                    className={`text-primary-color min-w-fit text-center ${columnClasses[index]} ${headerClasses}`}
                  >
                    {headName}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData?.map((rowData, rowIndex) => (
                <TableRow key={rowIndex} onClick={rowData.onclick} className='cursor-pointer w-full' >
                  {Object?.values(rowData)?.map((cellData, cellIndex) => (
                    <TableCell key={cellIndex} className={`text-center py-5 ${columnClasses[cellIndex]}`} >
                      <div className={`text-[#344767]`}> {cellData} </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
    </>
  );
}



















































// import React, { useState } from "react";

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// export function SimpleTable({ tableHeadNames, tableData }) {
//   const [filterValue, setFilterValue] = useState("");

//   const handleFilterChange = (e) => {
//     setFilterValue(e.target.value);
//   };

//   const filteredData = tableData.filter((rowData) =>
//     Object.values(rowData).some((value) =>
//       value.toString().toLowerCase().includes(filterValue.toLowerCase())
//     )
//   );

//   return (
//     <>
//       <div className="w-full flex justify-end mb-5">
//         <input
//           type="text"
//           placeholder="Filter..."
//           value={filterValue}
//           onChange={handleFilterChange}
//           className="border-[1px] border-[silver] outline-0 w--full bg-transparent text-primary-color p-[0.5rem] rounded-xl w-[15rem] m-3"
//         />
//       </div>

//       <Table>
//         <TableHeader>
//           <TableRow>
//             {tableHeadNames.map((headName, index) => (
//               <TableHead
//                 key={index}
//                 className={`text-primary-color min-w-fit text-center`}
//               >
//                 <div className={headName.className}> {headName} </div>
//               </TableHead>
//             ))}
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {filteredData.map((rowData, rowIndex) => (
//             <TableRow key={rowIndex}>
//               {Object.values(rowData).map((cellData, cellIndex) => (
//                 <TableCell key={cellIndex} className={`text-center`} >
//                   {cellData}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </>
//   );
// }
