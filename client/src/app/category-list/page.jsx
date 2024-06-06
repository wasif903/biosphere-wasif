"use client";
import Button from "@/components/button/Button";
import Dropdown from "@/components/dropdown/Dropdown";
import Field from "@/components/inputFIeld/Field";
import { SimpleTable } from "@/components/table/simpleTable";
import ResponseToast from "@/components/toast/Toast";
import StoreLayout from "@/layout/StoreLayout";
import {
  useCreateCategoryMutation,
  useGetCategoryQuery,
  useGetPopulatedCategoryQuery,
} from "@/redux/CategorySlice/CategorySlice";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";

// Import Icons
import { GrGallery } from "react-icons/gr";
import { MdDelete, MdOutlineEdit } from "react-icons/md";

function page() {
  const [categoryLoading, setCategoryLoading] = useState(false)
  const [category, setCategory] = useState({
    name: "",
    slug: "",
    desc: "",
    parent: [],
  });

  // Thumbnail State
  const [thumbnail, setThumbnail] = useState(null)

  const { name, slug, desc, parent } = category;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  // Handle Get Image
  const handleGetImage = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleParent = (e) => {
    setCategory(prevState => ({
      ...prevState,
      parent: [e.target.value],
    }));
  }

  // Get User Data
  const getCookieData = getCookie("biosphereearth") ? JSON?.parse(getCookie("biosphereearth")) : getCookie("biosphereearth");
  const storeID = getCookieData?._id;

  // Get Category API Start
  const { data: getCategory, isLoading: getCategoryLoading } = useGetCategoryQuery();

  useEffect(() => {
    setCategoryLoading(getCategoryLoading)
  }, [getCategory])
  // Get Category API End

  // Get Category API Start
  const { data: getPopulatedCategory } = useGetPopulatedCategoryQuery();

  // Table Header Names
  const tableHeadNames = ["ID", "Category", "", "", ""];

  // Table Column Classes
  const columnClasses = [
    "w-[5rem] text-left pe-[2rem]",
    "w-full text-left",
    " ",
    "px-[2rem]",
    "px-[2rem]",
  ];

  // Formate Data According to table
  const formattedData = getCategory?.categories?.map((item) => ({
    id: item?._id?.slice(-4),
    category: item?.name,
    status: item?.status?.[0],
    edit: (
      <div className="flex justify-end w-full">
        <MdOutlineEdit className="text-xl text-[grey] cursor-pointer" />
      </div>
    ),
    delete: (
      <div className="flex justify-end w-full">
        <MdDelete className="text-xl text-[grey] cursor-pointer" />
      </div>
    ),
  }));

  // Post Category API
  const [createCategory, { isLoading }] = useCreateCategoryMutation();

  // Handle Post Category API
  const handleSubmit = async () => {
    try {
      if (name === "" || slug === "" || desc === "" || thumbnail === "") {
        return ResponseToast({ message: "Please Fill Fields" })
      }

      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("slug", slug);
      formdata.append("desc", desc);
      formdata.append("thumbnail", thumbnail);
      formdata.append('parent', JSON.stringify(parent));

      const res = await createCategory({ storeID, data: formdata });
      ResponseToast({ res });

      if (!res.error) {
        setCategory({
          name: "",
          slug: "",
          desc: "",
          parent: [],
        });
        setThumbnail(null)
      }


    } catch (error) {
      console.log(error);
    }
  }

  console.log(getCategory?.categories)

  return (
    <StoreLayout>
      <div className="flex flex-col justify-between py-5 p-2">
        <div className="xl:flex xl:flex-row gap-5 flex flex-col-reverse px-3 pb-6">
          <div className="xl:w-[70%] flex flex-col justify--center blur_effect xl:py-[2rem] xl:px-[2rem] p-3">
            <h2 className="text-primary-color mb-3">Category List </h2>
            <p className="text-[#6E7191]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="mt-5">
              <SimpleTable
                tableHeadNames={tableHeadNames}
                tableData={formattedData}
                filterClassName={"my-0 hidden"}
                columnClasses={columnClasses}
                isLoading={categoryLoading}
              />
            </div>
          </div>

          <div className="xl:w-[30%] flex flex-col justify-center blur_effect xl:py-[1rem] xl:px-[1rem] p-3 h-fit">
            <h2 className="text-primary-color mb-3"> Add Category </h2>

            <div className="flex flex-col gap-4">
              <label
                htmlFor="catThumbnail"
                className="border-2 z-[999] w-fit rounded-sm"
              >
                <div className="p-3 flex items-center gap-3 w-fit text-[#6E7191]">
                  <GrGallery className="text-primary-color" /> Category
                  Thumbnail
                </div>
              </label>
              <input
                type="file"
                name="thumbnail"
                id="catThumbnail"
                className="hidden"
                onChange={handleGetImage}
              />

              <Field
                customClass={
                  "py-3 px-3 rounded-lg border-2 border-primary-foreground  bg-white outline-none"
                }
                placeHolder={"Category Name"}
                type={"text"}
                name={"name"}
                value={name}
                onChange={handleChange}
              />
              <Field
                customClass={
                  "py-3 px-3 rounded-lg border-2 border-primary-foreground  bg-white outline-none"
                }
                placeHolder={"Category Description"}
                type={"text"}
                name={'desc'}
                value={desc}
                onChange={handleChange}
              />

              <Field
                customClass={
                  "py-3 px-3 rounded-lg border-2 border-primary-foreground bg-white outline-none"
                }
                placeHolder={"Category Slug"}
                type={"text"}
                name={"slug"}
                value={slug}
                onChange={handleChange}
              />

              <Dropdown categories={getCategory?.categories} onchange={handleParent} />
              <Button
                name={"Create Category"}
                mainClass={
                  "border-2 border-primary-foreground w-fit p-3 rounded-lg"
                }
                pClass={"text-white"}
                bgcolor={"bg_gradient"}
                isLoading={isLoading}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </StoreLayout>
  );
}

export default page;
