import React, { useState } from "react";
import { UserData } from "@/lib/definations";
import { useSession } from "next-auth/react";
import { IoPersonAdd } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa6";
const ProfileArea = ({
  userInfo,
  className,
}: {
  userInfo: UserData | null;
  className: string;
}) => {
  const { data: session } = useSession();

  const loggedUser: UserData = session?.user as UserData;

  const [followed, setFollowed] = useState<boolean | undefined>(
    userInfo?.isFollowed
  );

  return (
    <div className={className}>
      <h1 className="text-4xl font-bold  p-4 ">{userInfo?.name}</h1>
      {loggedUser?.id !== userInfo?._id && (
        <button
          onClick={() => {
            setFollowed((prev) => !prev);
          }}
          className={` mr-24 origin-center outline-none   rounded-md px-6 font-semibold   py-2  h-fit self-center flex items-center gap-2 ${
            followed
              ? "text-white bg-[#0866FF] hover:bg-[#0861f2]  "
              : "bg-[#E4E6EB] text-slate-800 hover:bg-neutral-300 dark:bg-neutral-300 dark:hover:bg-neutral-400"
          } `}
        >
          {followed ? (
            <>
              <FaUserCheck className="" size={16} /> <span>Following</span>
            </>
          ) : (
            <>
              {" "}
              <IoPersonAdd className="" size={16} /> <span> Follow</span>
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default ProfileArea;
