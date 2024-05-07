"use client";
import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import { Modal } from "antd";
const SignUpModal = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const closeModal = ()=>{
    setOpenSignUpModal(false)
  }

  return (
    <>
      <button
        className="mt-6 text-nowrap mb-2 text-lg rounded-md px-4  max-w-full md:min-w-8/12 bg-[#42b72a] hover:bg-green-600 text-white font-semibold leading-[3rem]"
        onClick={(e) => {
          setOpenSignUpModal(true);
        }}
      >
        Create new account
      </button>
      {/* // Signup Modal */}
      <Modal
        zIndex={2}
        open={openSignUpModal}
        centered={true}
        okButtonProps={{
          style: {
            display: "none",
          },
        }}
        cancelButtonProps={{
          style: {
            display: "none",
          },
        }}
        onCancel={() => {
          setOpenSignUpModal(false);
        }}
        width={450}
      >
        <SignUpForm closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default SignUpModal;
