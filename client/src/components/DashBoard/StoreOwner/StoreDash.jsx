"use client"
import { SimpleTable } from '@/components/table/simpleTable';
import { Card, CardContent } from '@/components/ui/card';
import React, { useEffect, useState } from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const CustomLegend = () => (
    <div className="absolute top-2 right-2 p-2 bg-transparent max-xl:border-none rounded flex items-center gap-4">
        <div className="flex items-center gap-3">
            <div className="mb--2 max-xl:hidden  flex items-center">
                <span
                    className="inline-block max-sm:w-2 max-sm:h-2 w-3 h-3 mr-2 rounded-full"
                    style={{ backgroundColor: "#0E45B7" }}
                ></span>{" "}
                Orders
            </div>
            <div className="mb--2 max-xl:hidden  flex items-center">
                <span
                    className="inline-block max-sm:w-2 max-sm:h-2 w-3 h-3 mr-2 rounded-full"
                    style={{ backgroundColor: "#3FBDF1" }}
                ></span>{" "}
                Sales
            </div>
            <div className="max-xl:hidden  flex items-center">
                <span
                    className="inline-block max-sm:w-2 max-sm:h-2 w-3 h-3 mr-2 rounded-full"
                    style={{ backgroundColor: "#71DDB1" }}
                ></span>{" "}
                Clients
            </div>
        </div>
        <input
            type="date"
            className="p-[0.2rem] bg_gradient rounded-md text-[#fff] outline-none border-none px-2"
        />
    </div>
);

const StoreDash = () => {
    const [isMobile, setIsMobile] = useState(false);

    const data = [
        { name: "Jan", Sales: 4000, Orders: 2400, Clients: 2400 },
        { name: "Feb", Sales: 3000, Orders: 1398, Clients: 2210 },
        { name: "Mar", Sales: 2000, Orders: 9800, Clients: 2290 },
        { name: "Apr", Sales: 2780, Orders: 3908, Clients: 2000 },
        { name: "May", Sales: 1890, Orders: 4800, Clients: 2181 },
        { name: "Jun", Sales: 2390, Orders: 3800, Clients: 2500 },
        { name: "Jul", Sales: 3490, Orders: 4300, Clients: 2100 },
    ];

    const tableHeadNames = ["ID", "Name", "Product", "Amount", "Status"];

    const rawData = [
        {
            _id: 1,
            name: "John",
            product: "Medicine A",
            amount: "$10",
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
            _id: 2,
            name: "Jane",
            product: "Medicine B",
            amount: "$20",
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
        // Add more data as needed
    ];

    // Mapping over your data to change the structure if needed
    const formattedData = rawData.map((item) => ({
        id: item._id,
        name: item.name,
        product: item.product,
        amount: item.amount,
        status: item.status,
    }));

    const columnClasses = [
        "text-[#344767] w-[5rem] text-sm text-left pl-5",
        "w-[10rem] text-[#344767] text-left text-sm font-medium",
        "text-[#344767] text-sm font-medium",
        "text-[#344767] text-sm font-medium",
        "text-[#344767] text-sm font-medium",
        "text-[#344767] text-sm font-medium",
    ];


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Second Table Data

    const queryTableHead = ["ID", "Name", "Product", "Quantity", "Amount"]

    const queryRawData = [
        {
            _id: 1,
            name: <div className="flex justify-start items-center gap-3"> <img src="images/team-2.png" alt="img" className="w-[3rem] h-[3rem]" /> John </div>,
            product: "Nike Air",
            quantity: "47.00kg",
            amount: "$200",
        },
    ];

    // Mapping over your data to change the structure if needed
    const queryFormattedData = queryRawData.map((item) => ({
        id: item._id,
        name: item.name,
        product: item.product,
        quantity: item.quantity,
        amount: item.amount,
    }));

    const queryColumnClasses = [
        "hidden",
        "text-[#344767] text-left text-sm font-medium pl-5",
        "text-[#344767] text-sm font-medium",
        "text-[#344767] text-sm font-medium",
        "text-[#344767] text-sm font-medium",
        "text-[#344767] text-sm font-medium",
    ];
    return (
        <>
            <div className="w-full ">
                <div className="grid gap-4 md:grid-cols-2 md:gap--8 lg:grid-cols-5">
                    <Card
                        x-chunk="dashboard-01-chunk-0"
                        className="w-full box_shadow_pri blur_effect flex justify-center items-center  p-5"
                    >
                        <CardContent className="w-fit flex items-center p-0 py-5">
                            <img
                                src="/images/icon_1.png"
                                alt="img.png"
                                className="me-2 w-[3rem] h-[3rem]"
                            />
                            <div>
                                <h4 className="text-xl font-bold max-xl:text-sm">202</h4>
                                <p className="text-base text-muted-foreground font-medium max-xl:text-sm">
                                    Total Orders
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card
                        x-chunk="dashboard-01-chunk-0"
                        className="w-full box_shadow_pri blur_effect flex justify-center items-center  p-5"
                    >
                        <CardContent className="w-fit flex items-center p-0 py-5">
                            <img
                                src="/images/icon_1.png"
                                alt="img.png"
                                className="me-2 w-[3rem] h-[3rem]"
                            />
                            <div>
                                <h4 className="text-xl font-bold max-xl:text-sm">202</h4>
                                <p className="text-base text-muted-foreground font-medium max-xl:text-sm">
                                    Total Orders
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card
                        x-chunk="dashboard-01-chunk-0"
                        className="w-full box_shadow_pri blur_effect flex justify-center items-center  p-5"
                    >
                        <CardContent className="w-fit flex items-center p-0 py-5">
                            <img
                                src="/images/icon_1.png"
                                alt="img.png"
                                className="me-2 w-[3rem] h-[3rem]"
                            />
                            <div>
                                <h4 className="text-xl font-bold max-xl:text-sm">202</h4>
                                <p className="text-base text-muted-foreground font-medium max-xl:text-sm">
                                    Total Orders
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card
                        x-chunk="dashboard-01-chunk-0"
                        className="w-full box_shadow_pri blur_effect flex justify-center items-center  p-5"
                    >
                        <CardContent className="w-fit flex items-center p-0 py-5">
                            <img
                                src="/images/icon_1.png"
                                alt="img.png"
                                className="me-2 w-[3rem] h-[3rem]"
                            />
                            <div>
                                <h4 className="text-xl font-bold max-xl:text-sm">202</h4>
                                <p className="text-base text-muted-foreground font-medium max-xl:text-sm">
                                    Total Orders
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card
                        x-chunk="dashboard-01-chunk-0"
                        className="w-full box_shadow_pri blur_effect flex justify-center items-center  p-5"
                    >
                        <CardContent className="w-fit flex items-center p-0 py-5">
                            <img
                                src="/images/icon_1.png"
                                alt="img.png"
                                className="me-2 w-[3rem] h-[3rem]"
                            />
                            <div>
                                <h4 className="text-xl font-bold max-xl:text-sm">202</h4>
                                <p className="text-base text-muted-foreground font-medium max-xl:text-sm">
                                    Total Orders
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-8">
                <div className="blur_effect box_shadow_pri col-span-full max-lg:h-[19.5rem] lg:col-span-4 xl:col-span-5 relative p-1">
                    <h4 className="p-2 px-5 pt-3 pb-3 font-semibold text-xl">
                        {" "}
                        Analytics Charts{" "}
                    </h4>
                    <ResponsiveContainer width="100%" height="" className={"h-[80%] lg:h-[90%]"}>
                        <BarChart
                            data={data}
                            margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <XAxis dataKey="name" className="max-sm:w-full" />
                            {!isMobile && <YAxis />}
                            <Tooltip />
                            <Bar
                                dataKey="Orders"
                                fill="#0E45B7"
                                radius={[10, 10, 10, 10]}
                                barSize={10}
                            />
                            <Bar
                                dataKey="Sales"
                                fill="#3FBDF1"
                                radius={[10, 10, 10, 10]}
                                barSize={10}
                            />
                            <Bar
                                dataKey="Clients"
                                fill="#71DDB1"
                                radius={[10, 10, 10, 10]}
                                barSize={10}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                    <CustomLegend />
                </div>

                <div className="col-span-full lg:col-span-4 xl:col-span-3 rounded-xl">
                    <div className="blur_effect box_shadow_pri h-[19.5rem] overflow-auto mb-5">
                        <h4 className="p-2 px-5 pt-3 font-semibold text-xl text-[#344767]">
                            {" "}
                            Order List{" "}
                        </h4>

                        <SimpleTable
                            tableHeadNames={tableHeadNames}
                            filterClassName={"hidden"}
                            tableData={formattedData}
                            columnClasses={columnClasses}
                        />
                    </div>

                    <div className="blur_effect box_shadow_pri h-[19.5rem] overflow-auto">
                        <h4 className="p-2 px-5 pt-3 font-semibold text-xl text-[#344767]"> Queries </h4>

                        <SimpleTable
                            tableHeadNames={queryTableHead}
                            filterClassName={"hidden"}
                            tableData={queryFormattedData}
                            columnClasses={queryColumnClasses}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoreDash
