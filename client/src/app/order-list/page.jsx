"use client";

import { SimpleTable } from "@/components/table/simpleTable";
import StoreLayout from "@/layout/StoreLayout";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const tableHeadNames = [
    "ID",
    "Name",
    "Product",
    "Amount",
    "Category",
    "Email",
    "Status",
  ];

  const rawData = [
    {
      _id: 20252,
      name: "Joseph Cam.",
      product: "Medicine",
      amount: "$200",
      category: "Pills",
      email: "jay@example.com",
      status: (
        <select
          name=""
          id=""
          className="p-[0.2rem] bg_gradient rounded-md text-[#fff] outline-none border"
        >
          <option value="pending" className="text-[#000]">
            Pending
          </option>
          <option value="Cancelled" className="text-[#000]">
            Cancelled
          </option>
        </select>
      ),
    },
    {
      _id: 20227,
      name: "Joseph Cam.",
      product: "Medicine",
      amount: "$200",
      category: "Pills",
      email: "jay@example.com",
      status: (
        <select
          name=""
          id=""
          className="p-[0.2rem] bg_gradient rounded-md text-[#fff] outline-none border"
        >
          <option value="pending" className="text-[#000]">
            Pending
          </option>
          <option value="Cancelled" className="text-[#000]">
            Cancelled
          </option>
        </select>
      ),
    },
    {
      _id: 2028,
      name: "Joseph Cam.",
      product: "Medicine",
      amount: "$200",
      category: "Pills",
      email: "jay@example.com",
      status: (
        <select
          name=""
          id=""
          className="p-[0.2rem] bg_gradient rounded-md text-[#fff] outline-none border"
        >
          <option value="pending" className="text-[#000]">
            Pending
          </option>
          <option value="Cancelled" className="text-[#000]">
            Cancelled
          </option>
        </select>
      ),
    },
    {
      _id: 2025,
      name: "Joseph Cam.",
      product: "Medicine",
      amount: "$200",
      category: "Pills",
      email: "jay@example.com",
      status: (
        <select
          name=""
          id=""
          className="p-[0.2rem] bg_gradient rounded-md text-[#fff] outline-none border"
        >
          <option value="pending" className="text-[#000]">
            Pending
          </option>
          <option value="Cancelled" className="text-[#000]">
            Cancelled
          </option>
        </select>
      ),
    },
    {
      _id: 2021,
      name: "Joseph Cam.",
      product: "Medicine",
      amount: "$200",
      category: "Pills",
      email: "jay@example.com",
      status: (
        <select
          name=""
          id=""
          className="p-[0.2rem] bg_gradient rounded-md text-[#fff] outline-none border"
        >
          <option value="pending" className="text-[#000]">
            Pending
          </option>
          <option value="Cancelled" className="text-[#000]">
            Cancelled
          </option>
        </select>
      ),
    },
    {
      _id: 2024,
      name: "Joseph Cam.",
      product: "Medicine",
      amount: "$200",
      category: "Pills",
      email: "jay@example.com",
      status: (
        <select
          name=""
          id=""
          className="p-[0.2rem] bg_gradient rounded-md text-[#fff] outline-none border"
        >
          <option value="pending" className="text-[#000]">
            Pending
          </option>
          <option value="Cancelled" className="text-[#000]">
            Cancelled
          </option>
        </select>
      ),
    },
    {
      _id: 2023,
      name: "Joseph Cam.",
      product: "Medicine",
      amount: "$200",
      category: "Pills",
      email: "jay@example.com",
      status: (
        <select
          name=""
          id=""
          className="p-[0.2rem] bg_gradient rounded-md text-[#fff] outline-none border"
        >
          <option value="pending" className="text-[#000]">
            Pending
          </option>
          <option value="Cancelled" className="text-[#000]">
            Cancelled
          </option>
        </select>
      ),
    },
    {
      _id: 2022,
      name: "Joseph Cam.",
      product: "Medicine",
      amount: "$200",
      category: "Pills",
      email: "jay@example.com",
      status: (
        <select
          name=""
          id=""
          className="p-[0.2rem] bg_gradient rounded-md text-[#fff] outline-none border"
        >
          <option value="pending" className="text-[#000]">
            Pending
          </option>
          <option value="Cancelled" className="text-[#000]">
            Cancelled
          </option>
        </select>
      ),
    },
  ];

  // Mapping over your data to change the structure if needed
  const formattedData = rawData.map((item) => ({
    id: item._id,
    name: item.name,
    product: item.product,
    amount: item.amount,
    category: item.category,
    email: item.email,
    status: item.status,
    onclick: () => router.push(`/order-list/${item._id}`),
  }));

  return (
    <StoreLayout>
      <div className="bg-white rounded-xl box_shadow_pri h-full overflow-auto">
        <div className="flex items-center justify-between p-5">
          <div className="p-2 px-5 pt-3">
            <h4 className="font-semibold text-3xl text-primary-color">
              {" "}
              Order List{" "}
            </h4>
            <p className="text-[#6E7191]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="mt-5">
          <SimpleTable
            tableHeadNames={tableHeadNames}
            tableData={formattedData}
            filterClassName={"my-0 hidden"}
          />
        </div>
      </div>
    </StoreLayout>
  );
};

export default Page;
