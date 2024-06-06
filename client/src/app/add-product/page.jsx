"use client";
import Button from "@/components/button/Button";
import Field from "@/components/inputFIeld/Field";
import StoreLayout from "@/layout/StoreLayout";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useGetPopulatedCategoryQuery } from "@/redux/CategorySlice/CategorySlice";
import { getCookie } from "cookies-next";
import ToggleBtn from "@/components/toggleBtn/ToggleBtn";
import { useCreateProductMutation } from "@/redux/ProductSlice/productslice";
import ResponseToast from "@/components/toast/Toast";

// React Icons
import { GrGallery } from "react-icons/gr";
import { RiGalleryFill } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

function page() {
  // For Enable Variation Fields
  const [isVariableCondition, setIsVariableCondition] = useState(false);

  // For Visible Categories
  const [isCategory, setIsCategory] = useState(false);

  // Get Data from Jodit
  const [JoditEditor, setJoditEditor] = useState(null);

  // For Visible Variation Fields
  const [addVariableToggler, setAddVariableToggler] = useState(false);

  // To Get Product Data
  const [productData, setProductData] = useState({
    title: "",
    desc: "",
    slug: "",
    isVariable: isVariableCondition,
    discountPrice: "",
    price: "",
    category: "",
    stock: "",
    productImage: "",
    galleryImages: [],
    variations: [],
  });


  const [variationsData, setVariationsData] = useState({
    price: "",
    minQty: "",
    maxQty: "",
  });

  const productDescEditor = useRef(null);
  const router = useRouter();

  const { price: varPrice, minQty, maxQty } = variationsData;

  const handleVariations = (e) => {
    e.preventDefault();
    setVariationsData({
      ...variationsData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const pushVariations = () => {
    setProductData((prevState) => ({
      ...prevState,
      variations: [...prevState.variations, variationsData],
    }));
    setVariationsData({
      price: "",
      minQty: "",
      maxQty: "",
    });
  };

  const removeVariation = (index) => {
    setProductData((prevState) => ({
      ...prevState,
      variations: prevState.variations.filter((_, i) => i !== index),
    }));
  };

  // Handle Get Product Data
  const { title, desc, slug, isVariable, discountPrice, price, category, stock, productImage, galleryImages, variations } = productData;


  const FieldHandler = (e) => {
    e.preventDefault();
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Get Product Single Image
  const handleProductImage = (e, name) => {
    if (name === "singleImg") {
      setProductData({ ...productData, productImage: e.target.files[0] });
    } else if (name === "slider") {
      const files = Array.from(e.target.files);
      setProductData({ ...productData, galleryImages: files });
    }
  };

  // Handle Get category with filter
  const handleCategoryChange = (e, id) => {
    if (e.target.checked) {
      setProductData(prevData => ({
        ...prevData,
        category: [...prevData.category, id]
      }));
    } else {
      setProductData(prevData => ({
        ...prevData,
        category: prevData.category.filter(item => item !== id)
      }));
    }
  };

  const getCookieData = getCookie("biosphereearth") ? JSON?.parse(getCookie("biosphereearth")) : getCookie("biosphereearth");
  const storeID = getCookieData?._id;

  useEffect(() => {
    import("jodit-react").then((module) => {
      setJoditEditor(module.default);
    });
  }, []);

  const getCategories = useGetPopulatedCategoryQuery();

  // Handle Create Product API
  const [createProductAPI, { isLoading }] = useCreateProductMutation()

  // Handle Create Product 
  const handleCreateProduct = async () => {
    try {
      const formData = new FormData()

      if (productImage === "" || galleryImages.length == 0) {
        return ResponseToast({ message: "Please Select Images First" })
      }

      if (isVariableCondition === false) {
        if (title === "" || desc === "" || slug === "" || price === "" || category === "" || category.length <= 0 || stock === "") {
          return ResponseToast({ message: "All Fields Required" })
        }

        formData.append("title", title)
        formData.append("desc", desc)
        formData.append("slug", slug)
        formData.append("isVariable", isVariable)
        formData.append("discountPrice", discountPrice)
        formData.append("price", price)
        formData.append("stock", stock)
        formData.append("productImage", productImage)
        for (const cat of category) {
          formData.append("category", cat)
        }
        for (const slider of galleryImages) {
          formData.append("galleryImages", slider)
        }
        for (const vari of variations) {
          formData.append("variations", vari)
        }
      } else {

        if (title === "" || desc === "" || slug === "" || category === "" || category.length <= 0 || variations.length <= 0) {
          return ResponseToast({ message: "All Fields Required" })
        }

        formData.append("title", title)
        formData.append("desc", desc)
        formData.append("slug", slug)
        formData.append("isVariable", isVariable)
        formData.append("productImage", productImage)
        for (const cat of category) {
          formData.append("category", cat)
        }
        for (const slider of galleryImages) {
          formData.append("galleryImages", slider)
        }
        for (const vari of variations) {
          formData.append("variations", JSON.stringify(vari))
        }
      }

      const res = await createProductAPI({ storeID: storeID, data: formData })

      ResponseToast({ res })
      if (!res.error) {
        setProductData({
          title: "",
          desc: "",
          slug: "",
          isVariable: isVariableCondition,
          discountPrice: "",
          price: "",
          category: "",
          stock: "",
          productImage: "",
          galleryImages: [],
          variations: [],
        })
        setVariationsData({
          price: "",
          minQty: "",
          maxQty: "",
        })
        setIsCategory(false)
      }

    } catch (error) {
      ResponseToast({ message: "Error creating product" })
    }
  }

  // Function For Display Categories
  const renderCategory = (category, level) => {
    return (
      <div key={category._id} style={{ marginLeft: `${level * 4}px` }}>
        <div className="flex  items-center gap-2" title={category.name}>
          {category?.parent?.length !== 0 &&
            <div className="w-4 h-1 bg-[#374D99]"></div>
          }
          <Field type="checkbox" customClass={`${category?.parent?.length === 0 ? 'mt-2 w-fit' : "w-fit"}`} onChange={(e) => handleCategoryChange(e, category._id)} />
          <div className={`${category?.parent?.length === 0 ? 'font-extrabold text-[#6E7191] mt-2 w-[10rem] truncate' : " text-[#6E7191] w-[10rem] truncate"}`} >{category.name}</div>
        </div>
        {category.children && category.children.map(child => (
          renderCategory(child, level + 1)
        ))}
      </div>
    );
  };

  // Hanlde Variable
  const handleVar = () => {
    setIsVariableCondition(!isVariableCondition)
  }

  useEffect(() => {
    setProductData({ ...productData, isVariable: isVariableCondition })
  }, [isVariableCondition])

  return (
    <StoreLayout>
      <div className="flex justify-center flex-row relative">
        <div className={` flex justify-center items--center h-full z-50 ${isCategory ? "translate-x-[-10%] transition-all duration-500" : "translate-x-[0%] transition-all duration-500"}`}>
          <div className="w-[45rem] gap-3 p-5 h-fit blur_effect flex flex-col items-center">
            <h4 className="text-primary-color text-[1.5rem] xl:text-[2rem] text-center font-semibold">
              Add Product{" "}
            </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="w-full">
              <div className="flex flex-col justify--center items--center gap-5">
                <div className="flex justify-center gap-4">
                  <span>
                    <input type="file" id="thumbnail" className="hidden" name="productImage" onChange={(e) => handleProductImage(e, "singleImg")} accept="image/*" />
                    <label htmlFor="thumbnail" >
                      <span className="flex items-center justify-center gap-3 border-2 border-primary-foreground w-fit p-3 rounded-lg text-primary-color cursor-pointer">
                        <RiGalleryFill />
                        <p>
                          Product Thumbnail
                        </p>
                      </span>
                    </label>
                  </span>
                  <span>
                    <input type="file" id="gallery" className="hidden" name="galleryImages" multiple onChange={(e) => handleProductImage(e, "slider")} accept="image/*" />
                    <label htmlFor="gallery" className="">
                      <span className="flex items-center justify-center gap-3 border-2 border-primary-foreground w-fit p-3 rounded-lg text-primary-color cursor-pointer">
                        <GrGallery />
                        <p>
                          Additional Images
                        </p>
                      </span>
                    </label>
                  </span>
                </div>

                <Field
                  customClass={"border-2 p-3 rounded-lg w-[100%] outline-none"}
                  placeHolder={"Product Title"}
                  name={"title"}
                  value={title}
                  onChange={FieldHandler}
                />
                <Field
                  customClass={"border-2 p-3 rounded-lg w-[100%] outline-none"}
                  placeHolder={"Product Slug"}
                  name={"slug"}
                  value={slug}
                  onChange={FieldHandler}
                />

                <div className="flex gap-4 items-center w-full" >
                  Add Category
                  <IoMdAddCircle
                    role="button"
                    className="text-2xl text-primary-color"
                    onClick={() => setIsCategory(!isCategory)}
                  />
                </div>

                {JoditEditor && (
                  <JoditEditor
                    ref={productDescEditor}
                    value={desc}
                    onChange={(newContent) =>
                      setProductData({ ...productData, desc: newContent })
                    }
                    className="text-black"
                  />
                )}
                <div className="flex items-center gap-5 w-[100%]">
                  <h3>Variable Product</h3>
                  <ToggleBtn
                    isChecked={isVariableCondition}
                    onToggle={handleVar}
                  />
                </div>

                {isVariableCondition ? (
                  <>
                    <div className="flex gap-4 items-center w-full">
                      Add Variations{" "}
                      <IoMdAddCircle
                        role="button"
                        onClick={() => setAddVariableToggler(!addVariableToggler)}
                        className="text-2xl text-primary-color"
                      />
                    </div>
                    {addVariableToggler ? (
                      <>
                        {" "}
                        <div className={`flex flex-col w-[100%] gap-3 `}>
                          <div className="grid sm:grid-cols-3 gap-3">
                            <div className="flex flex-col gap-2 w-full">
                              <label htmlFor=""> Product Price</label>
                              <Field
                                type="number"
                                customClass={"border-2 p-3 rounded-lg outline-none"}
                                placeHolder={"Product Price"}
                                name={"price"}
                                value={varPrice}
                                onChange={handleVariations}
                              />
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                              <label htmlFor=""> Min Quantity</label>
                              <Field
                                type="number"
                                customClass={"border-2 p-3 rounded-lg outline-none"}
                                placeHolder={"Min Quantity"}
                                name={"minQty"}
                                value={minQty}
                                onChange={handleVariations}
                              />
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                              <label htmlFor=""> Max Quantity</label>
                              <Field
                                type="number"
                                customClass={"border-2 p-3 rounded-lg outline-none"}
                                placeHolder={"Max Quantity"}
                                name={"maxQty"}
                                value={maxQty}
                                onChange={handleVariations}
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-end">
                            <Button
                              name={"Add"}
                              mainClass={
                                "w-fit px--3 rounded-lg text-white p-5 py-2"
                              }
                              onClick={() => pushVariations(variationsData)}
                              bgcolor={"bg_gradient"}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col w-[100%] gap-3">
                          {variations?.map((item, i) => (
                            <div key={i + 1} className={`flex w-[100%] gap-3 `}>
                              <div className="flex justify-between items-center w-full">
                                <div className="flex flex-col w-[10rem] bg-white rounded-md blur_effect items-center py-3">
                                  <label className="font-semibold" htmlFor=""> Product Price</label>
                                  <span className="text-primary-color">{item?.price}</span>
                                </div>

                                <div className="flex flex-col w-[10rem] bg-white rounded-md blur_effect items-center py-3">
                                  <label className="font-semibold" htmlFor=""> Min Quantity</label>
                                  <span className="text-primary-color">{item?.minQty}</span>
                                </div>

                                <div className="flex flex-col w-[10rem] bg-white rounded-md blur_effect items-center py-3">
                                  <label className="font-semibold" htmlFor=""> Max Quantity</label>
                                  <span className="text-primary-color">{item?.maxQty}</span>
                                </div>
                                <div className="flex items-center justify-center">
                                  <MdCancel color="#374D99" size={32} onClick={() => removeVariation(i)} />

                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  <div className="flex w-[100%] gap-3">
                    <Field
                      type="number"
                      customClass={"border-2 p-3 rounded-lg w-[100%] outline-none"}
                      placeHolder={"Product Price"}
                      name={"price"}
                      value={price}
                      onChange={(e) => setProductData({ ...productData, price: Number(e.target.value) })}
                    />
                    <Field
                      type="number"
                      customClass={"border-2 p-3 rounded-lg w-[100%] outline-none"}
                      placeHolder={"Product Quantity"}
                      name={"stock"}
                      value={stock}
                      onChange={(e) => setProductData({ ...productData, stock: Number(e.target.value) })}
                    />
                  </div>
                )}
                <div className="flex justify-center">
                  <Button
                    name={"Create Product"}
                    mainClass={"w-fit p-4 rounded-lg text-white"}
                    bgcolor={"bg_gradient"}
                    isLoading={isLoading}
                    onClick={handleCreateProduct}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`bg-white px-12 py-4 z-40 absolute right-[8%] blur_effect flex flex-col gap-4 ${isCategory ? "opacity-100 transition-all duration-500" : "opacity-0 transition-all duration-500"}`}>
          <h4 className="text-primary-color text-[1.5rem] xl:text-[2rem] text-center font-semibold">
            Add Product
          </h4>
          <div>
            {getCategories?.data?.categories?.map(category => (
              renderCategory(category, 0)
            ))}
          </div>
        </div>
      </div>
    </StoreLayout>
  );
}

export default page;
