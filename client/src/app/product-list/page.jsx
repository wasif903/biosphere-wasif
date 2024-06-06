"use client";

import Button from "@/components/button/Button";
import { SimpleTable } from "@/components/table/simpleTable";
import StoreLayout from "@/layout/StoreLayout";
import { useDeleteProductMutation, useGetProductsQuery } from "@/redux/ProductSlice/productslice";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import ThreeDots from "@/components/ThreeDots/ThreeDots";
import { RiDeleteBin5Line } from "react-icons/ri";
import ResponseToast from "@/components/toast/Toast";

const Page = () => {
  const [productListData, setProductListData] = useState([])

  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const router = useRouter();

  const getCookieData = getCookie("biosphereearth") ? JSON?.parse(getCookie("biosphereearth")) : getCookie("biosphereearth");
  const storeID = getCookieData?._id;

  const getProductListAPI = useGetProductsQuery(storeID, { skip: !storeID })
  const getProductListData = getProductListAPI?.data?.products
  const getProductListLoading = getProductListAPI?.isLoading

  const tableHeadNames = [
    "ID",
    "Product Name",
    "Variations",
    "Category",
    "Created Date",
    "Description",
    "Actions",
  ];


  // Mapping over your data to change the structure if needed
  const formattedData = (originalData) => {
    const data = originalData?.map((item, index) => {
      return {
        id: item._id.slice(-4),
        ProductName: (
          <div className="flex items-center gap-3">
            <img src={item?.productImage} alt="" className="w-14 h-14 rounded-md border-gray-500 border" />
            <p className="font-semibold">{item?.title}</p>
          </div>
        ),
        Variations: item?.variations?.length,
        Category: item?.category?.name,
        createdDate: item?.createdAt.split("T")[0],
        description: item?.desc,
        actions: (
          <ThreeDots
            key={item?._id}
            update={() => router.push(`/update-product/${item?.slug}`)}
            view={() => router.push(`/product-list/${item?.slug}`)}
            isLoading={deleteLoading}
            del={() => HandleDeleteProduct(item?.storeID, item?._id, item?.slug)}
            isOpen={index === openMenuIndex}
            setOpenMenuIndex={setOpenMenuIndex}
            index={index}
          />
        ),
      };
    });
    setProductListData(data);
  };

  useEffect(() => {
    formattedData(getProductListData);
  }, [getProductListData, openMenuIndex]);

  const columnClasses = [
    "w-[5rem] text-left",
    "w-[20%] text-left",
    "w-[10rem]",
    "w-[10rem]",
    "w-[10rem]",
  ];



  useEffect(() => {
    formattedData(getProductListData)
  }, [getProductListAPI])

  const [deleteProduct, { isLoading: deleteLoading }] = useDeleteProductMutation();

  // Delete Product Handler
  const HandleDeleteProduct = async (storeID, prodID, slug) => {
    try {
      const res = await deleteProduct({ storeID, prodID, slug });
      ResponseToast({ res });
    } catch (error) {
      console.log(error);
      ResponseToast({ message: "Internal Server Error" })
    }
  }

  return (
    <StoreLayout>
      <h4 className="text-xl text-secondary-color  mb-4">
        Dashboard Overview{" "}
      </h4>
      <div className="bg-white rounded-xl blur__effect box_shadow_sec h-full overflow-auto">
        <div className="flex max-sm:flex-col items--center justify-between p--2">
          <div className="p-2 px-5 pt-3">
            <h4 className="font-semibold text-3xl text-primary-color">
              {" "}
              Product List{" "}
            </h4>
            <p className="text-[#6E7191]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="px-5 pt-5">
            <Button
              name={
                <div className="flex items-center">
                  {" "}
                  <MdAdd className="text-[#fff] text-xl me-2" /> Add Products{" "}
                </div>
              }
              bgcolor={"bg--[#000]"}
              pClass={"text-[#fff] font-medium max-sm:text-sm"}
              className={"max-w-[14rem]"}
              style={{
                backgroundImage:
                  "linear-gradient(to right top, #5bc1e9, #40a4d9, #3087c7, #306ab2, #374d99)",
              }}
              onClick={() => router.push("/add-product")}
            />
          </div>
        </div>

        <div className="p-2">
          <SimpleTable
            tableHeadNames={tableHeadNames}
            tableData={productListData}
            filterClassName={"my-5"}
            columnClasses={columnClasses}
            isLoading={getProductListLoading}
          />
        </div>
      </div>
    </StoreLayout>
  );
};

export default Page;
