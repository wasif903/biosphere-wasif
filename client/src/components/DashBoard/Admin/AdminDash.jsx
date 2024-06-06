import { SimpleTable } from '@/components/table/simpleTable'
import { Card, CardContent } from '@/components/ui/card';
import React, { useEffect, useState } from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const dataTwo = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const CustomLegend = ({ isDate = true }) => (
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
        {isDate &&
            <input
                type="date"
                className="p-[0.2rem] bg_gradient rounded-md text-[#fff] outline-none border-none px-2"
            />
        }
    </div>
);

const AdminDash = () => {
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
                <div className="grid gap-4 md:grid-cols-2 md:gap--8 lg:grid-cols-4">
                    <Card
                        x-chunk="dashboard-01-chunk-0"
                        className="w-full box_shadow_pri blur_effect flex justify-center items-center  p-5"
                    >
                        <CardContent className="w-fit flex items-center p-0 py-5">
                            <img
                                src="/images/AdminDashCard/adminCard1.png"
                                alt="img.png"
                                className="me-2 w-[3rem] h-[3rem]"
                            />
                            <div>
                                <h4 className="text-xl font-bold max-xl:text-sm">202</h4>
                                <p className="text-base text-muted-foreground font-medium max-xl:text-sm">
                                    Total Stores
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
                                src="/images/AdminDashCard/adminCard2.png"
                                alt="img.png"
                                className="me-2 w-[3rem] h-[3rem]"
                            />
                            <div>
                                <h4 className="text-xl font-bold max-xl:text-sm">202</h4>
                                <p className="text-base text-muted-foreground font-medium max-xl:text-sm">
                                    Total Users
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
                                src="/images/AdminDashCard/adminCard3.png"
                                alt="img.png"
                                className="me-2 w-[3rem] h-[3rem]"
                            />
                            <div>
                                <h4 className="text-xl font-bold max-xl:text-sm">202</h4>
                                <p className="text-base text-muted-foreground font-medium max-xl:text-sm">
                                    Total Earning
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
                                src="/images/AdminDashCard/adminCard4.png"
                                alt="img.png"
                                className="me-2 w-[3rem] h-[3rem]"
                            />
                            <div>
                                <h4 className="text-xl font-bold max-xl:text-sm">202</h4>
                                <p className="text-base text-muted-foreground font-medium max-xl:text-sm">
                                    Client’s Queries
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
            <div className="grid grid-cols-1 gap-6  sm:grid-cols-2 lg:grid-cols-8">
                <div className="col-span-full lg:col-span-4 xl:col-span-5 rounded-xl  lg:h-[19.5rem] h-full gap-4">

                    <div className="blur_effect box_shadow_pri col-span-full lg:h-[100%] h-[19.5rem] relative p-1 ">
                        <h4 className="p-2 px-5 pt-3 pb-3 font-semibold text-xl">
                            {" "}
                            Store’s Analytics{" "}
                        </h4>
                        <ResponsiveContainer width="100%" height="" className={"h-[80%] lg:h-[80%] ml-4"}>
                            <AreaChart
                                width={500}
                                height={400}
                                data={dataTwo}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="100 1" />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stackId="1" stroke="#3FBDF1" fill="#3FBDF1" />
                                <Area type="monotone" dataKey="pv" stackId="1" stroke="#374D99" fill="#374D99" />
                                <Area type="monotone" dataKey="amt" stackId="1" stroke="#71DDB1" fill="#71DDB1" />
                            </AreaChart>
                        </ResponsiveContainer>
                        <CustomLegend isDate={false} />
                    </div>
                    <div className="blur_effect box_shadow_pri col-span-full lg:h-[100%] h-[19.5rem] relative p-1 mt-4">
                        <h4 className="p-2 px-5 pt-3 pb-3 font-semibold text-xl">
                            Sales Charts
                        </h4>
                        <ResponsiveContainer width="100%" height="" className={"h-[80%] lg:h-[85%]"}>
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
                </div>

                <div className="col-span-full lg:col-span-4 xl:col-span-3 rounded-xl">
                    <div className="blur_effect box_shadow_pri h-[19.5rem] overflow-auto mb-5">
                        <h4 className="p-2 px-5 pt-3 font-semibold text-xl text-[#344767]">
                            Store’s List
                        </h4>

                        <SimpleTable
                            tableHeadNames={tableHeadNames}
                            filterClassName={"hidden"}
                            tableData={formattedData}
                            columnClasses={columnClasses}
                        />
                    </div>

                    <div className="blur_effect box_shadow_pri h-[19.5rem] overflow-auto">
                        <h4 className="p-2 px-5 pt-3 font-semibold text-xl text-[#344767]"> Pending Stores </h4>

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

export default AdminDash
