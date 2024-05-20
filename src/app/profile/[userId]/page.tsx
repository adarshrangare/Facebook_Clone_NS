"use client";
import CoverImage from "@/components/ProfilePage/CoverImage";
import ProfileArea from "@/components/ProfilePage/ProfileArea";
import ProfileTabs from "@/components/ProfilePage/ProfileTabs";
import UsersPosts from "@/components/ProfilePage/UsersPosts";
import ProfileLoader from "@/components/Skeletons/ProfileLoader";
import { UserData } from "@/lib/definations";
import { Skeleton } from "antd";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Profile() {
  const params = useParams();
  const { userId } = params;
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useState<UserData | null>(null);

  const [loading, setLoading] = useState(true);

  async function getUserInfo() {
    try {
      const res = await fetch(
        `https://academics.newtonschool.co/api/v1/facebook/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${session?.token}`,
            projectID: process.env.PROJECT_ID as string,
          },
        }
      );
      const data = await res.json();
      if (data?.message) {
        toast.error(data?.message);
      }
      if (data?.status !== "success") {
        toast.error("Unable to fetch Profile");
        setLoading(true);
        // return;
      }
      setUserInfo(data?.data);
      setLoading(false);
    } catch (error: any) {
      toast.error(error?.message);
      setLoading(true);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <CoverImage
        profileImage={userInfo?.profileImage as string}
        className="mx-auto w-full max-w-screen-2xl relative"
      />
      {!loading ? (
        <ProfileArea
          userInfo={userInfo}
          className="bg-primary-light dark:bg-primary-dark mx-auto  md:w-9/12 lg:w-8/12 p-4 w-full min-h-32 md:min-h-48 flex justify-between gap-2 flex-wrap pl-36 md:pl-48  "
        />
      ) : (
        <ProfileLoader />
      )}
      {!loading ? (
        <ProfileTabs
          userInfo={userInfo}
          className="mx-auto md:w-9/12 lg:w-8/12  w-full bg-primary-light dark:bg-primary-dark"
        />
      ) : (
        <Skeleton />
      )}
    </>
  );
}

export default Profile;
