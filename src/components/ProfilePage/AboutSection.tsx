// import { UserData } from "@/lib/definations";
// import { aboutIcons } from "@/lib/utils";
// import dayjs from "dayjs";
// import Image from "next/image";
// import React from "react";

// const AboutSection = ({ userInfo }: { userInfo: UserData | null }) => {
//   // const {skills,address,workExprience,education,createdAt} = userInfo as UserData

//   console.log(userInfo)

//   function getAddress(userInfo: UserData): string {
//     let result;
//     if (userInfo?.address?.length) {
//       userInfo?.address?.map((item) => {
//         let add = Object.values(item);

//         add.shift();

//         result = add.join(", ");
//       });
//     }

//     return result || "Not Available";
//   }

//   function getWork(userInfo: UserData): string {
//     let result;
//     if (userInfo?.workExperience?.length) {
//       userInfo?.workExperience?.map((item) => {

//         console.log(item);

//         result = `${item.designation} at ${item.companyName}, ${item.location}`;
//       });
//     }
//     return result || "Not Available";
//   }

//   function getEducation(userInfo: UserData): string {
//     let result;
//     if (userInfo?.education?.length) {
//       userInfo?.education?.map((item) => {
//         result = `${item.degree} from ${item.schoolName}`;
//       });
//     }
//     return result || "Not Available";
//   }

//   return (
//     <div className="p-4 space-y-2">
//       {userInfo && (
//         <>
//           <div className="grid grid-col-12 ">
//             <span className="col-start-1 col-end-3 ">
//               <Image
//                 src={aboutIcons.skills}
//                 width={20}
//                 height={20}
//                 alt="skills"
//                 className="inline mx-2"
//               />{" "}
//               <span className="font-semibold  text-neutral-700 dark:text-primary-dark pr-1">
//                 Skills:
//               </span>
//             </span>
//             <span className=" col-start-3  col-end-12 text-neutral-500 dark:text-neutral-400 font-medium ">
//               {!!userInfo?.skills?.length
//                 ? userInfo?.skills.join(", ")
//                 : "Not available"}
//             </span>
//           </div>
//           <div className="grid grid-col-12 ">
//             <span className="col-start-1 col-end-3 ">
//               <Image
//                 src={aboutIcons.address}
//                 width={20}
//                 height={20}
//                 alt="address"
//                 className="inline mx-2"
//               />{" "}
//               <span className="font-semibold text-neutral-700 dark:text-primary-dark pr-1">
//                 Address:
//               </span>
//             </span>
//             <span className=" col-start-3  col-end-12 text-neutral-500 dark:text-neutral-400 font-medium ">
//               {getAddress(userInfo as UserData)}
//             </span>
//           </div>
//           <div className="grid grid-col-12 ">
//             <span className="col-start-1 col-end-3 ">
//               <Image
//                 src={aboutIcons.work}
//                 width={20}
//                 height={20}
//                 alt="skills"
//                 className="inline mx-2"
//               />{" "}
//               <span className="font-semibold text-neutral-700 dark:text-primary-dark pr-1">
//                 Work:
//               </span>
//             </span>
//             <span className=" col-start-3  col-end-12 text-neutral-500 dark:text-neutral-400 font-medium ">
//               {getWork(userInfo as UserData)}
//             </span>
//           </div>
//           <div className="grid grid-col-12 ">
//             <span className="col-start-1 col-end-3 ">
//               <Image
//                 src={aboutIcons.education}
//                 width={20}
//                 height={20}
//                 alt="skills"
//                 className="inline mx-2"
//               />{" "}
//               <span className="font-semibold text-neutral-700 dark:text-primary-dark pr-1 ">
//                 Education:
//               </span>
//             </span>
//             <span className=" col-start-3  col-end-12 text-neutral-500 dark:text-neutral-400 font-medium ">
//               {getEducation(userInfo as UserData)}
//             </span>
//           </div>
//           <div className="grid grid-col-12 ">
//             <span className="col-start-1 col-end-3 ">
//               <Image
//                 src={aboutIcons.joined}
//                 width={20}
//                 height={20}
//                 alt="skills"
//                 className="inline mx-2"
//               />{" "}
//               <span className="font-semibold text-neutral-700 dark:text-primary-dark pr-1">
//                 Joined On:
//               </span>
//             </span>
//             <span className=" col-start-3  col-end-12 text-neutral-500 dark:text-neutral-400 font-medium ">
//               {dayjs(userInfo?.createdAt).format("DD-MMM-YYYY")}
//             </span>
//           </div>
//           <div className="grid grid-col-12 ">
//             <span className="col-start-1 col-end-3 ">
//               <Image
//                 src={aboutIcons.email}
//                 width={20}
//                 height={20}
//                 alt="skills"
//                 className="inline mx-2"
//               />{" "}
//               <span className="font-semibold text-neutral-700 dark:text-primary-dark pr-1">
//                 Email:
//               </span>
//             </span>
//             <span className="text-left col-start-3  col-end-12 text-neutral-500 dark:text-neutral-400 font-medium ">
//               {userInfo?.email}
//             </span>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default AboutSection;

import { UserData } from "@/lib/definations";
import { Tabs } from "antd";
import React from "react";
import { MdEmail, MdWork } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import { aboutIcons } from "@/lib/utils";
const AboutSection = ({ userInfo }: { userInfo: UserData | null }) => {
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
    <section className="p-4 text-neutral-700 dark:text-primary-dark">
      <Tabs
        tabPosition="left"
        items={[
          {
            label: (
              <h3 className="font-medium  hover:text-blue-500 text-neutral-700 dark:text-primary-dark ">
                Overview
              </h3>
            ),
            key: "1",
            children: (
              <ul className=" font-medium px-4 space-y-2 text-neutral-700 dark:text-primary-dark ">
                <li>
                  {userInfo?.email && (
                    <>
                      <MdEmail className="inline mx-1" size={20} />
                      {userInfo?.email}
                    </>
                  )}
                </li>
                <li>
                  {userInfo?.phone && (
                    <>
                      <FaPhoneAlt className="inline mx-1" size={20} />
                      {userInfo?.phone}
                    </>
                  )}
                </li>
                <li className="capitalize ">
                  {userInfo?.gender && (
                    <>
                      <FaUser className="inline mx-1" size={20} />
                      {userInfo?.gender}
                    </>
                  )}
                </li>
              </ul>
            ),
          },
          {
            label: (
              <h3 className="font-medium hover:text-blue-500 text-neutral-700 dark:text-primary-dark">
                Work and Education
              </h3>
            ),
            key: "2",
            children: (
              <ul className=" px-4 text-base font-medium space-y-2 text-neutral-700 dark:text-primary-dark">
                <li className="pl-4  text-sm">
                  {" "}
                  <MdWork className="inline mx-1" size={20} />{" "}
                  {getWork(userInfo as UserData)}
                </li>

                <li className="pl-4  text-sm">
                  <IoIosSchool className="inline mx-1" size={20} />
                  {getEducation(userInfo as UserData)}
                </li>
              </ul>
            ),
          },
          {
            label: (
              <h3 className="font-medium hover:text-blue-500 text-neutral-700 dark:text-primary-dark">
                Address
              </h3>
            ),
            key: "3",
            children: (
              <ul className=" px-4 text-base font-medium space-y-2   ">
                <li className="pl-4  text-sm">
                  <FaLocationDot className="inline mx-1" size={20} />{" "}
                  {getAddress(userInfo as UserData)}
                </li>
              </ul>
            ),
          },
          {
            label: (
              <h3 className="font-medium hover:text-blue-500 text-neutral-700 dark:text-primary-dark">
                Skills and Hobbies
              </h3>
            ),
            key: "4",
            children: (
              <ul className=" px-4 text-base font-medium space-y-2   ">
                <li className="pl-4  text-sm">
                  <Image
                    src={aboutIcons.skills}
                    width={20}
                    height={20}
                    alt="skills"
                    className="inline mx-2"
                  />
                  {!!userInfo?.skills?.length
                    ? userInfo?.skills.join(", ")
                    : "Not available"}
                </li>
              </ul>
            ),
          },
        ]}
      />
    </section>
  );
};

export default AboutSection;
