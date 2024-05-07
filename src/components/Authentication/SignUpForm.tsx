import React from "react";
import toast from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputBox from "../Basic Components/InputBox";
import { userSignUp } from "@/lib/actions";
import { SignUpFormValues } from "@/lib/definations";

const errorMsgClass = `text-red-500 text-xs mx-auto text-left w-11/12`;

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter first name"),
  lastName: Yup.string().required("Please enter last name"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email address"),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number"
    )
    .required("Please enter password"),
  confirmPwd: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords are not matching")
    .required("Please confirm your password"),
  gender: Yup.string().required("Please select gender"),
});

const SignUp = ({ closeModal }: { closeModal: () => void }) => {
  // const { signUp } = useAuth();

  const handleSubmit = async (
    values: SignUpFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const body = {
      name: `${values.firstName} ${values.lastName}`,
      email: values.email,
      password: values.password,
      appType: "facebook",
    };

    const data = await userSignUp(body);

    if (data.status === "fail") {
      toast.error(data.message);
    } else {
      toast.success(
        "Acoount is created Succesfully,\n Please log in to to Your account"
      );
      closeModal();
    }
    setSubmitting(false);
  };

  return (
    <div className="flex flex-col gap-2 w-[110%]  relative -left-[5%]">
      <div className="heading  border-b flex-1 pb-2 px-4">
        <h1 className="text-2xl md:text-4xl font-semibold">Sign Up</h1>
        <p className="text-gray-500 text-lg mt-1">It&apos;s quick and easy.</p>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPwd: "",
          gender: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="px-2 flex flex-col gap-1">
            <Field
              as={InputBox}
              className="bg-compo-light text-base text-black"
              placeholder="Enter your first name"
              name="firstName"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className={errorMsgClass}
            />
            <Field
              as={InputBox}
              className="bg-gray-100 text-base text-black"
              placeholder="Enter your last name"
              name="lastName"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className={errorMsgClass}
            />
            <Field
              as={InputBox}
              className="bg-gray-100 text-base text-black"
              type="email"
              placeholder="Enter your Email address"
              name="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className={errorMsgClass}
            />
            <Field
              as={InputBox}
              className="bg-gray-100 text-base text-black"
              type="password"
              placeholder="Enter new Password"
              name="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={errorMsgClass}
            />
            <Field
              as={InputBox}
              className="bg-gray-100 text-base text-black"
              type="password"
              placeholder="Confirm Password"
              name="confirmPwd"
            />
            <ErrorMessage
              name="confirmPwd"
              component="div"
              className={errorMsgClass}
            />
            <div className="gender px-2">
              <label htmlFor="gender" className="font-medium text-sm">
                Gender
              </label>
              <div className="flex gap-2 mt-2">
                <label className="flex items-center justify-around  flex-1 border rounded-md px-4 py-2 bg-gray-100 cursor-pointer">
                  <Field type="radio" name="gender" value="male" className=" accent-blue-600  " />
                  <span>Male</span>
                </label>
                <label className="flex items-center justify-around  flex-1 border rounded-md px-4 py-2 bg-gray-100 cursor-pointer">
                  <Field type="radio" name="gender" value="female" className=" accent-blue-600  "/>
                  <span>Female</span>
                </label>
                <label className="flex items-center justify-around  flex-1 border rounded-md px-4 py-2 bg-gray-100 cursor-pointer">
                  <Field type="radio" name="gender" value="other" className=" accent-blue-600  "/>
                  <span>Other</span>
                </label>
              </div>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500 text-xs mx-auto text-center w-11/12"
              />
            </div>
            <div className="text-xs text-gray-600 px-2 pt-4">
              People who use our service may have uploaded your contact
              information to Facebook
            </div>
            <div className="text-xs text-gray-600 px-2">
              By clicking Sign Up, you agree to our Terms, Privacy Policy and
              Cookies Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </div>
            <button
              type="submit"
              className="mt-6 mx-auto text-nowrap mb-2 text-lg rounded-md px-12 max-w-full md:min-w-8/12 bg-[#00a400] hover:bg-green-600 text-white font-semibold flex items-center justify-center py-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
