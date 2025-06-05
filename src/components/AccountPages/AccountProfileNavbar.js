import { ProfileNavItems } from "./constant";

const AccountProfileNavbar = ({ setComponentName }) => {
  return (
    <div className="max-w-[970px] hidden lg:block mx-auto py-5 font-serif">
      <div className="flex">
        {ProfileNavItems.map((item) => (
          <div
            key={item.title}
            onClick={() => setComponentName(item.path)}
            className="flex py-5 pr-3 cursor-pointer hover:text-[#ef4a23] justify-center border-b-[3px] items-center hover:border-red-500 hover:border-b-[3px]"
          >
            <span className="text-xl text-[#666]">
              <item.Icon />
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
