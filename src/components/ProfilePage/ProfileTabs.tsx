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
      ]}
      onChange={onChange}
    />
  );
};

export default ProfileTabs;
