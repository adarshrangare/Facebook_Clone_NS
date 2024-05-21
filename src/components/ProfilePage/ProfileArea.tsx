import React, { useState } from "react";
import { UserData } from "@/lib/definations";
import { useSession } from "next-auth/react";
import { IoPersonAdd } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa6";
import { followUser } from "@/lib/actions";
import toast from "react-hot-toast";
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

  async function handleFollow() {
    const res: any = await followUser(
      session?.token as string,
      userInfo?._id as string,
      "POST"
    );

    if (res?.status === "success") {
      toast.success("You are following this User Now");
      setFollowed(true);
    } else {
      toast.error("Something went wrong \n " + res?.message);
    }
  }

  async function handleUnfollow() {
    const res: any = await followUser(
      session?.token as string,
      userInfo?._id as string,
      "DELETE"
    );

    if (res?.status === "success") {
      toast.success("You have unfollowed this User");
      setFollowed(false);
    } else {
      toast.error("Something went wrong \n " + res?.message);
      
    }
  }

  return (
    <div className={className}>
      <h1 className="text-4xl font-bold  p-4 ">{userInfo?.name}</h1>
      {loggedUser?.id !== userInfo?._id && (
        <button
          onClick={() => {
            
              if (followed) {
                handleUnfollow();
              } else {
                handleFollow();
              }
              
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
