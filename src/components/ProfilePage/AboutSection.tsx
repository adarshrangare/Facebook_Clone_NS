import { UserData } from "@/lib/definations";
import { aboutIcons } from "@/lib/utils";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";

const AboutSection = ({ userInfo }: { userInfo: UserData | null }) => {
  // const {skills,address,workExprience,education,createdAt} = userInfo as UserData

  console.log(userInfo)

  function getAddress(userInfo: UserData): string {
    let result;
    if (userInfo?.address?.length) {
      userInfo?.address?.map((item) => {
        let add = Object.values(item);

        add.shift();

        result = add.join(", ");
      });
    }

    return result || "Not Available";
  }

  function getWork(userInfo: UserData): string {
    let result;
    if (userInfo?.workExperience?.length) {
      userInfo?.workExperience?.map((item) => {

        console.log(item);

        result = `${item.designation} at ${item.companyName}, ${item.location}`;
      });
    }
    return result || "Not Available";
  }

  function getEducation(userInfo: UserData): string {
    let result;
    if (userInfo?.education?.length) {
      userInfo?.education?.map((item) => {
        result = `${item.degree} from ${item.schoolName}`;
      });
    }
    return result || "Not Available";
  }

  return (
    <div className="p-4 space-y-2">
      {userInfo && (
        <>
          <div className="grid grid-col-12 ">
            <span className="col-start-1 col-end-3 ">
              <Image
                src={aboutIcons.skills}
                width={20}
                height={20}
                alt="skills"
                className="inline mx-2"
              />{" "}
              <span className="font-semibold  text-primary-light dark:text-primary-dark pr-1">
                Skills:
              </span>
            </span>
            <span className=" col-start-3  col-end-12 text-neutral-500 dark:text-neutral-400 font-medium ">
              {!!userInfo?.skills?.length
                ? userInfo?.skills.join(", ")
                : "Not available"}
            </span>
          </div>
          <div className="grid grid-col-12 ">
            <span className="col-start-1 col-end-3 ">
              <Image
                src={aboutIcons.address}
                width={20}
                height={20}
                alt="address"
                className="inline mx-2"
              />{" "}
              <span className="font-semibold text-primary-light dark:text-primary-dark pr-1">
                Address:
              </span>
            </span>
            <span className=" col-start-3  col-end-12 text-neutral-500 dark:text-neutral-400 font-medium ">
              {getAddress(userInfo as UserData)}
            </span>
          </div>
          <div className="grid grid-col-12 ">
            <span className="col-start-1 col-end-3 ">
              <Image
                src={aboutIcons.work}
                width={20}
                height={20}
                alt="skills"
                className="inline mx-2"
              />{" "}
              <span className="font-semibold text-primary-light dark:text-primary-dark pr-1">
                Work:
              </span>
            </span>
            <span className=" col-start-3  col-end-12 text-neutral-500 dark:text-neutral-400 font-medium ">
              {getWork(userInfo as UserData)}
            </span>
          </div>
          <div className="grid grid-col-12 ">
            <span className="col-start-1 col-end-3 ">
              <Image
                src={aboutIcons.education}
                width={20}
                height={20}
                alt="skills"
                className="inline mx-2"
              />{" "}
              <span className="font-semibold text-primary-light dark:text-primary-dark pr-1 ">
                Education:
              </span>
            </span>
            <span className=" col-start-3  col-end-12 text-neutral-500 dark:text-neutral-400 font-medium ">
              {getEducation(userInfo as UserData)}
            </span>
          </div>
          <div className="grid grid-col-12 ">
            <span className="col-start-1 col-end-3 ">
              <Image
                src={aboutIcons.joined}
                width={20}
                height={20}
                alt="skills"
                className="inline mx-2"
              />{" "}
              <span className="font-semibold text-primary-light dark:text-primary-dark pr-1">
                Joined On:
              </span>
            </span>
            <span className=" col-start-3  col-end-12 text-neutral-500 dark:text-neutral-400 font-medium ">
              {dayjs(userInfo?.createdAt).format("DD-MMM-YYYY")}
            </span>
          </div>
          <div className="grid grid-col-12 ">
            <span className="col-start-1 col-end-3 ">
              <Image
                src={aboutIcons.email}
                width={20}
                height={20}
                alt="skills"
                className="inline mx-2"
              />{" "}
              <span className="font-semibold text-primary-light dark:text-primary-dark pr-1">
                Email:
              </span>
            </span>
            <span className="text-left col-start-3  col-end-12 text-neutral-500 dark:text-neutral-400 font-medium ">
              {userInfo?.email}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutSection;
