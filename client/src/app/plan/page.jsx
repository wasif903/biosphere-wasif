"use client";

import Button from "@/components/button/Button";
import Field from "@/components/inputFIeld/Field";
import { SimpleTable } from "@/components/table/simpleTable";
import ResponseToast from "@/components/toast/Toast";
import { Card } from "@/components/ui/card";
import StoreLayout from "@/layout/StoreLayout";
import { useCreatePlanMutation, useGetPlansQuery } from "@/redux/PlanSlice/PlanSlice";
import { useEffect, useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PlanDialogBox } from "@/components/planDailogBox/planDailogBox";

const Page = () => {

  const [objectModal, setObjectModal] = useState('');

  const [plan, setPlan] = useState({
    role: "",
    title: "",
    price: "",
    description: "",
    discountedPrice: "",
  });

  const { role, title, price, description, discountedPrice } = plan;

  const [JoditEditor, setJoditEditor] = useState(null);
  const productDescEditor = useRef(null);

  useEffect(() => {
    import("jodit-react").then((module) => {
      setJoditEditor(module.default);
    });
  }, []);

  const handleChange = (e) => {
    setPlan({ ...plan, [e.target.name]: e.target.value });
  };

  const handleEditorChange = (newContent) => {
    setPlan((prevPlan) => ({ ...prevPlan, description: newContent }));
  };

  //  create plane api
  const [createPlan, { isLoading }] = useCreatePlanMutation();
  const handelSubmit = async () => {
    try {
      const res = await createPlan(plan);
      console.log(res);
      if (!res?.error) {
        ResponseToast({ res });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // get plan api
  const { data: plans } = useGetPlansQuery();
  const tableHeadNames = ["ID", "Role", "Title", "Price", "Discounted Price", "Description", "" ,""];
  // Mapping over your data to change the structure if needed
  const formattedData = plans?.map((item) => ({
    id: item._id.slice(-4),
    role: item.role,
    title: item.title,
    price: item.price,
    discountedPrice: item.discountedPrice,
    description: <div dangerouslySetInnerHTML={{ __html: item.description }}></div>,
    edit: (<div onClick={() => setObjectModal(item)}> <PlanDialogBox title_={'Edit Plan'} objectModal={objectModal} btnClass={'border-none bg-transparent shadow-none'} icon={<FaEdit className="text-xl" />} /> </div>),
    delete: (<MdDelete className="text-xl ms-5" />)
  }));
  const columnClasses = [
    "max-xl:w-[8rem] text-[#344767] text-sm text-left pl-5",
    "max-xl:w-[8rem] text-[#344767] text-left text-sm font-medium",
    "max-xl:w-[10rem] text-[#344767] text-left text-sm font-medium",
    "max-xl:w-[10rem] text-[#344767] text-sm font-medium",
    "max-xl:w-[11rem] text-[#344767] text-sm font-medium text--left font-medium",
    "max-xl:w-[20rem] text-[#344767] text-sm font-medium text-left",
  ];

  return (
    <StoreLayout>
      <h1 className="text-primary-color mb-3">Create Plan</h1>

      <Card
        x-chunk="dashboard-01-chunk-0"
        className="w-full box_shadow_pri blur_effect grid grid-cols-1 sm:grid-cols-2 p-5 gap-5"
      >
        <div>
          <label htmlFor=""> Role </label>
          <Field
            placeHolder={"Role"}
            name={"role"}
            value={role}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor=""> Title </label>
          <Field
            placeHolder={"Title"}
            name={"title"}
            value={title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor=""> Price </label>
          <Field
            placeHolder={"Price"}
            name={"price"}
            value={price}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor=""> Discounted Price </label>
          <Field
            placeHolder={"DiscountedPrice"}
            name={"discountedPrice"}
            value={discountedPrice}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-full">
          <label htmlFor="" className="pb-5">
            {" "}
            Description{" "}
          </label>
          <div className="border--2 border-[red] h-fit">
            {JoditEditor && (
              <JoditEditor
                ref={productDescEditor}
                value={description}
                onChange={handleEditorChange}
              />
            )}
          </div>
        </div>

        <div className="col-span-full flex items-end justify-end">
          <Button
            name={"Save"}
            mainClass={"w-fit px--3 rounded-lg text-white p-5 py-2"}
            onClick={handelSubmit}
            bgcolor={"bg_gradient"}
            isLoading={isLoading}
          />
        </div>
      </Card>

      <div className="blur_effect box_shadow_pri h-[19.5rem] overflow-auto mb-5 mt-5">
        <h4 className="p-2 px-5 pt-3 font-semibold text-xl text-[#344767]">
          {" "}
          Plans List{" "}
        </h4>

        <SimpleTable
          tableHeadNames={tableHeadNames}
          filterClassName={"hidden"}
          tableData={formattedData}
          columnClasses={columnClasses}
        />
      </div>
    </StoreLayout>
  );
};

export default Page;
