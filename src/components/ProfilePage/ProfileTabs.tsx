import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import UsersPosts from "./UsersPosts";
import { UserData } from "@/lib/definations";
import AboutSection from "./AboutSection";
const onChange = (key: string) => {
  // console.log(key);
};

const ProfileTabs = ({
  className,
  userInfo,
}: {
  className: string;
  userInfo: UserData | null;
}) => {

 

  return (
    <Tabs
      className={`${className} mb-4 rounded-b`}
      animated={{ tabPane: true, inkBar: true }}
      defaultActiveKey="1"
      items={[
        {
          key: "1",
          label: (
            <h1 className="font-semibold px-4  dark:text-primary-dark">About</h1>
          ),
          children: <AboutSection userInfo={userInfo} />,
        },
        {
          key: "2",
          label: (
            <h1 className="font-semibold px-4  dark:text-primary-dark ">Posts</h1>
          ),
          children: <UsersPosts userInfo={userInfo} />,
        },
        {
          key: "3",
          label: (
            <h1 className="font-semibold px-4  dark:text-primary-dark ">Followers</h1>
          ),
          disabled:true,
          children: <h1 className="w-full text-center font-bold text-2xl p-4">Coming Soon</h1>,
        },
        {
          key: "4",
          label: (
            <h1 className="font-semibold px-4  dark:text-primary-dark ">Photos</h1>
          ),
          disabled:true,
          children: <h1 className="w-full text-center font-bold text-2xl p-4">Coming Soon</h1>,
        },
        {
          key: "5",
          label: (
            <h1 className="font-semibold px-4  dark:text-primary-dark ">More</h1>
          ),
          disabled:true,
          children: <h1 className="w-full text-center font-bold text-2xl p-4">Coming Soon</h1>,
        },
      ]}
      onChange={onChange}
    />
  );
};

export default ProfileTabs;
