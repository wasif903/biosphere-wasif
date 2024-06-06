import { Button } from "@/components/ui/button"
import Button_ from "@/components/button/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "../ui/card"
import Field from "../inputFIeld/Field"
import { useEffect, useRef, useState } from "react";
import ResponseToast from "../toast/Toast"
import { useUpdatePlanMutation } from "@/redux/PlanSlice/PlanSlice";

export function PlanDialogBox({icon, name, btnClass, title_, objectModal}) {

  const [plan, setPlan] = useState({
    role: '',
    title: '',
    price: '',
    description: '',
    discountedPrice: '',
  });

  useEffect(()=>{
    setPlan({
      role: objectModal?.role,
      title: objectModal.title,
      price: objectModal.price,
      description: objectModal.description,
      discountedPrice: objectModal.discountedPrice,
    })
  },[objectModal])

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

  
  //  update plane api
  const objectId = objectModal?._id;
  const [updatePlan, { isLoading }] = useUpdatePlanMutation();
  const handelSubmit = async () => {
    try {
      const res = await updatePlan({data:plan, id:objectId});
      console.log(res);
      if (!res?.error) {
        ResponseToast({ res });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(plan);


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={`${btnClass}`}>{icon}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90%]">
        <DialogHeader>
          <DialogTitle>{title_}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

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
          <Button_
            name={"Update"}
            mainClass={"w-fit px--3 rounded-lg text-white p-5 py-2"}
            onClick={handelSubmit}
            bgcolor={"bg_gradient"}
            isLoading={isLoading}
          />
        </div>
      </Card>
      </DialogContent>
    </Dialog>
  )
}
