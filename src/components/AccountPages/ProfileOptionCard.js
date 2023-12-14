

const ProfileOptionCard = ({ Icon, title }) => {
    return (
        <div  style={{ boxShadow: "4px 4px 4px rgba(0,0,0,.05)" }} href="#" className=' py-[40px] px-[20px] flex flex-col justify-center items-center rounded-md cursor-pointer border border-[#eee] hover:border-[#3749bb] hover:shadow-inner'>
            <span className='bg-[rgba(55,75,190,.1)] p-4 rounded-full text-[#3749bb] text-xl'> <Icon /></span>
            <p className='pt-3 text-sm font-semibold'>{title}</p>
        </div>
    );
};

export default ProfileOptionCard;