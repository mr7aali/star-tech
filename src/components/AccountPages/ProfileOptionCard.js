const ProfileOptionCard = ({ Icon, title }) => {
  return (
    <div
      className="py-6 xs:py-8 px-4 xs:px-6 flex flex-col justify-center items-center rounded-lg cursor-pointer border border-[#eee] bg-white group-hover:border-[#3749bb] group-hover:bg-gradient-to-r group-hover:from-[#ef4a23]/5 group-hover:to-[#3749bb]/5 group-hover:shadow-md group-hover:scale-105 transition-all duration-200"
      style={{ boxShadow: "4px 4px 8px rgba(0,0,0,0.05)" }}
    >
      <span
        className="bg-[rgba(55,75,190,0.1)] p-3 xs:p-4 rounded-full text-[#3749bb] text-lg xs:text-xl group-hover:text-[#ef4a23] group-hover:scale-110 transition-all duration-200"
        style={{ backgroundColor: "rgba(55, 75, 190, 0.1)" }}
      >
        <Icon />
      </span>
      <p
        className="pt-2 xs:pt-3 text-xs xs:text-sm font-semibold text-[#666] group-hover:text-[#3749bb]"
        style={{ color: "#666" }}
      >
        {title}
      </p>
    </div>
  );
};

export default ProfileOptionCard;
