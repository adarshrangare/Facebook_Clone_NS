"use client";
import React from "react";
import { InputBox } from "@/components";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { sign } from "crypto";
interface FormValues {
  email: string;
  password: string;
}

const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (!values.password.trim()) {
    errors.password = "Password must not be start with whitespace";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  return errors;
};

const LoginForm: React.FC = () => {
  const router = useRouter();
  async function handleLogin(values: FormValues) {
    
    const res = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
    });
    // const data = await res.json();
    console.log(res);

    // toast.loading(JSON.stringify(values,null,2))

    if (!res?.error) {
      router.push("/");
      router.refresh();
      toast.success("Account is Logged In Successfully")
      return;
    }
    if (res?.status === 401) {
      toast.error("Incorrect EmailId or Password");
    } else {
      toast.error("OOPS! Some error occured. Please try again later.");
    }
  }

  // formik

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
    //   alert(JSON.stringify(values, null, 2));
      await handleLogin(values);
    },
  });



  return (
    <>
      <form className="flex flex-col gap-2 pt-2">
        <InputBox
          id="email"
          placeholder="Enter your Email address"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email ? (
          <div className="text-red-500 text-xs">{formik.errors.email}</div>
        ) : null}
        <InputBox
          id="password"
          type="password"
          placeholder="Enter your Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password ? (
          <div className="text-red-500 text-xs">{formik.errors.password}</div>
        ) : null}
        <button
          type="submit"
          className="select-none my-2 text-xl rounded-md px-4 w-full bg-blue-600 text-white font-semibold leading-[3rem] hover:bg-blue-500"
          onClick={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          Log in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
