"use client";

import Image from "next/image";
import Link from "next/link";
// import { useUser } from "@/context/UserContext"; // Assumed context
import { FaStar, FaWallet } from "react-icons/fa";

const ProfileHeader = () => {
  //   const { user } = useUser() || {};

  const profilePhotoSrc =
    "https://www.gravatar.com/avatar/ec0e7bb5ba35678645248631e8e9f41c?s=70&d=mp&r=g";
  const userName = "Sheikh Mohammed";
  const starPoints = 0;
  const storeCredit = 0;

  return (
    <header
      className="w-full max-w-[970px] mx-auto px-4 py-4 sm:py-6 bg-[rgba(55,73,187,0.1)] rounded-lg shadow-sm"
      style={{ backgroundColor: "rgba(55, 73, 187, 0.1)" }}
    >
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
        {/* Profile Section */}
        <Link
          href="/profile"
          className="flex items-center gap-3 sm:gap-4 group hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-[#ef4a23] rounded-lg"
          aria-label="View profile"
        >
          <div className="relative">
            <Image
              width={48}
              height={48}
              className="sm:w-20 sm:h-20 rounded-full aspect-square object-cover ring-2 ring-[#3749bb] group-hover:ring-[#ef4a23] transition-all duration-200"
              src={profilePhotoSrc}
              alt="Profile photo"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ef4a23]/20 to-[#3749bb]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </div>
          <div className="text-center sm:text-left">
            <p
              className="text-sm font-medium sm:text-xl"
              style={{ color: "#666" }}
            >
              Hello,
            </p>
            <h3
              className="text-base font-semibold sm:text-2xl"
              style={{ color: "#3749bb" }}
            >
              {userName}
            </h3>
          </div>
        </Link>

        {/* Metrics Section */}
        <div className="flex flex-col w-full gap-4 sm:flex-row sm:gap-6 sm:w-auto">
          {/* Star Points */}
          <div
            className="flex-1 sm:flex-none px-4 sm:px-6 py-3 rounded-md bg-gradient-to-r from-[#ef4a23]/10 to-[#3749bb]/10 hover:bg-gradient-to-r hover:from-[#ef4a23]/20 hover:to-[#3749bb]/20 transition-all duration-200 shadow-sm hover:shadow-md group"
            style={{ borderLeft: "1px solid #ddd" }}
          >
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <FaStar className="text-[#ef4a23] text-sm sm:text-base group-hover:scale-110 transition-transform duration-200" />
              <p
                className="text-xs sm:text-[14px] opacity-80"
                style={{ color: "#666" }}
              >
                Star Points
              </p>
            </div>
            <h2
              className="text-center text-lg sm:text-[25px] font-serif font-bold"
              style={{ color: "#ef4a23" }}
            >
              {starPoints}
            </h2>
          </div>

          {/* Store Credit */}
          <div
            className="flex-1 sm:flex-none px-4 sm:px-6 py-3 rounded-md bg-gradient-to-r from-[#ef4a23]/10 to-[#3749bb]/10 hover:bg-gradient-to-r hover:from-[#ef4a23]/20 hover:to-[#3749bb]/20 transition-all duration-200 shadow-sm hover:shadow-md group"
            style={{ borderLeft: "1px solid #ddd" }}
          >
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <FaWallet className="text-[#ef4a23] text-sm sm:text-base group-hover:scale-110 transition-transform duration-200" />
              <p
                className="text-xs sm:text-[14px] opacity-80"
                style={{ color: "#666" }}
              >
                Store Credit
              </p>
            </div>
            <h2
              className="text-center text-lg sm:text-[25px] font-serif font-bold"
              style={{ color: "#ef4a23" }}
            >
              {storeCredit}
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
