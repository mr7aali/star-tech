import { ProfileNavItems } from "./constant";

const AccountProfileNavbar = ({ setComponentName, componentName }) => {
  return (
    <div
      className="max-w-[970px] hidden lg:block mx-auto  font-serif "
      // style={{ border: "1px solid red" }}
    >
      <div className="flex">
        {ProfileNavItems.map((item) => (
          <div
            key={item.title}
            onClick={() => setComponentName(item.path)}
            className={`flex py-5 pr-3 cursor-pointer hover:text-[#ef4a23] justify-center border-b-[3px] ${
              componentName === item.path ? "border-red-500 text-[#ef4a23]" : ""
            } items-center hover:border-red-500 hover:border-b-[3px]`}
          >
            {/* <span className="text-xl transition-all duration-200 group-hover:text-[#ef4a23]"> */}

            <span
              className={`text-xl ${
                componentName === item.path ? "text-red-500" : "text-[#666] "
              }  `}
            >
              <item.Icon className="group-hover:text-[#ef4a23]" />
            </span>
            <small className="ml-2 text-sm">{item.title}</small>
          </div>
        ))}
        <div className="flex-1 border-b-[3px]"></div>
      </div>
    </div>
  );
};

export default AccountProfileNavbar;
