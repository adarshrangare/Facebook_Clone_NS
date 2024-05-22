"use client";
import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputBox from "../Basic Components/InputBox";
import { logos } from "@/lib/utils";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { createAPage } from "@/lib/actions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface CreatePageFormValues {
  name: string;
  category: string;
  description: string;
}

const CreatePageSchema = Yup.object().shape({
  name: Yup.string().required("Page name is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
});

const CreatePageForm: React.FC = () => {
  const initialValues: CreatePageFormValues = {
    name: "",
    category: "",
    description: "",
  };
  const [images, setImages] = useState<any[] | []>([]);
  const imagesInput = useRef(null);
  const router = useRouter();
  const { data: session } = useSession();

  const handleSubmit = async (
    values: CreatePageFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    console.log(values);
    if (images?.length === 0) {
      toast.error("Please select an Image");
    }

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);

    if (images.length > 0) {
      images.forEach((img) => formData.append("image", img));
    }

    console.log(formData.get("image"));

    const res = await createAPage(session?.token as string, formData);

    if (res?.status === "success") {
      toast.success("Page is Created successfully");
      router.push(`/page/${res?.data?._id}`);
    } else {
      toast.error(res?.message);
    }

    setSubmitting(false);
  };

  function imagesBtnHandler(e: any) {
    setImages([...e.target.files]);
  }

  function handleRemoveFile(index: number) {
    const newFiles = [...images];
    newFiles.splice(index, 1);
    setImages(newFiles);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CreatePageSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="mx-auto flex-col justify-between h-full shadow-custom-upper">
          <div className="mx-auto space-y-4">
            <h1 className="w-11/12 mx-auto text-xl font-semibold">
              Create a Page
            </h1>

            <p className="w-11/12 mx-auto">
              Your Page is where people go to learn more about you. Make sure
              yours has all the information they may need.
            </p>

            <div className="w-11/12 mx-auto">
              <Field
                as={InputBox}
                name="name"
                placeholder="Page name (required)"
                className="dark:invert dark:text-primary-light text-primary-dark"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-xs px-2"
              />
              <div className="text-xs px-2">
                Use the name of your business, brand or organization, or a name
                that helps explain your Page.
              </div>
            </div>

            <div className="w-11/12 mx-auto">
              <Field
                as={InputBox}
                name="category"
                placeholder="Category (required)"
                className="dark:invert dark:text-primary-light text-primary-dark"
              />
              <ErrorMessage
                name="category"
                component="div"
                className="text-red-500 text-xs px-2"
              />
              <div className="text-xs px-2">
                Enter a category that best describes you
              </div>
            </div>

            <div className="w-11/12 mx-auto">
              <Field
                as="textarea"
                name="description"
                placeholder="Description (required)"
                className="p-3 bg-compo-light outline-none w-full rounded-lg border-2 focus:border-blue-500 box-border dark:invert dark:text-primary-light text-primary-dark min-h-28 resize-none"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-xs px-2"
              />
              <div className="text-xs px-2">
                Tell people a little about what you do.
              </div>
            </div>
            <div className="w-11/12 mx-auto">
              <div className="flex items-center w-full pt-2 ">
                {/* add overflow-y-scroll to dive below if want to add multiple images */}
                <div className="flex gap-4 flex-wrap max-h-[80px] w-full ">
                  {images?.length > 0 &&
                    images.map((file: any, index: number) => {
                      return (
                        <div
                          key={file.lastModified}
                          className="flex gap-1 relative dark:invert"
                        >
                          <div className="relative w-10 sm:w-14 h-10">
                            <Image
                              src={URL.createObjectURL(file)}
                              alt="upload"
                              fill
                              sizes="48px"
                              className="aspect-square object-cover "
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(index)}
                            className="absolute -top-2 -right-2  bg-white dark:invert  rounded-2xl shadow bg-opacity-70"
                          >
                            <IoCloseOutline size={18} />
                          </button>
                        </div>
                      );
                    })}
                </div>
                <label className="relative cursor-pointer w-72 space-x-1  text-sm  ">
                  <input
                    ref={imagesInput}
                    type="file"
                    className="absolute w-0 h-0"
                    multiple
                    name="images"
                    accept="image/*"
                    onChange={imagesBtnHandler}
                  />
                  <span className="inline  cursor-pointer px-6 mr-1 py-2  rounded-lg  bg-compo-light dark:bg-[#0f0d0a] dark:border-[#0f0d0a] outline-none w-full  border-2 focus:border-blue-500 box-border  text-neutral-400 font-medium">{images?.length > 0 ? "Selected" : "Select" }</span>
                  <Image
                    width={24}
                    height={24}
                    src={logos.photos}
                    alt="Photos"
                    className="inline-block"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="w-full bg-primary-light dark:bg-compo-dark h-fit mx-auto p-2 mt-10 shadow-custom-upper">
            <button
              type="submit"
              className="mx-4 mt-6 mb-2 w-11/12 bg-[#2176ff] px-3 py-2 rounded-md text-base text-white font-medium disabled:bg-zinc-300 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              Create a Page
            </button>
            <div className="text-xs mx-auto text-center w-10/12">
              By creating a Page, you agree to the Pages, Groups and Events
              Policies
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePageForm;
