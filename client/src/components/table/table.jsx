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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SiReadthedocs } from "react-icons/si";
import Link from "next/link";
import Button from "@/components/button/Button";
import { MdCancel } from "react-icons/md";
import Field from "@/components/inputFIeld/Field";
import { useRef, useState } from "react";
import ResponseToast from "@/components/toast/Toast";
import { usePathname, } from "next/navigation";
import React from "react";


export function TablePri({ tableHead, pharmacy_table_data }) {
  const pathName = usePathname();
  //   const { searchQuery } = useSearch();

  //   const text_color = useSelector((state) => state.theme.text_color);

  //   const [modalIsOpen, setModalIsOpen] = useState(false);
  //   const closeModal = () => {
  //     setModalIsOpen(false);
  //   };

  const [getOrderID, setGetOrderID] = useState("");
  const phrma_ID = pharmacy_table_data?.[0]?.Pharmacy_id?._id;

  const [updateOrder, setUpdateOrder] = useState({
    order_status: "",
    price: "",
    description: "",
  });
  const { order_status, price, description } = updateOrder;
  const handelChange = (e) => {
    setUpdateOrder({ ...updateOrder, [e.target.name]: e.target.value });
  };

  // order-list pending update status api
  //   const [updateOrderStatus, { isLoading }] =
  //     useAidAvalaibleOrNotByPharmacyMutation();

  const handelChangeStatusSubmit = async () => {
    try {
      const res = await updateOrderStatus({
        phrma_id: phrma_ID,
        order_id: getOrderID,
        data: updateOrder,
      });
      ResponseToast({ res });
      setModalIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  // paid-orders update status api
  //   const [changeOrderStatus, load] = useChangeOrderStatusMutation();
  const handelChangeStatus = async () => {
    try {
      const res = await changeOrderStatus({
        phrma_id: phrma_ID,
        order_id: getOrderID,
        data: updateOrder,
      });
      ResponseToast({ res });
      setModalIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            {tableHead.map((item, i) => (
              <TableHead
                key={i + 7}
                className={`${item.className} text-primary-color min-w-fit`}
              >
                {item.head}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {pharmacy_table_data.map((items, i) => (
            <React.Fragment key={i + 1}>
              <TableRow
                className={`border--2 border-green-900 p-3 text-[#787878]`}
              >
                <TableCell className={`${items.className} text-center`}>
                  <abbr title={items._id}> {items._ID} </abbr>{" "}
                </TableCell>
                <TableCell className={`${items.className} text-center`}>
                  {items.name}
                </TableCell>
                <TableCell className={`${items.className} text-center`}>
                  {items.product}
                </TableCell>
                <TableCell className={`${items.className} text-center`}>
                  {items.amount}
                </TableCell>
                <TableCell className={`${items.className} text-center`}>
                  <select name="" id="" className="p-[0.2rem] bg_gradient rounded-md text-[#fff] outline-none border">
                    <option value="pending" className="text-[#000]">Pending</option>
                    <option value="Cancelled" className="text-[#000]">Cancelled</option>
                  </select>
                  {/* {items.status} */}
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
