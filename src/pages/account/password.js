import dynamic from 'next/dynamic';
const FormsInput = dynamic(() => import('@/components/Forms/FormsInput'));
const Forms = dynamic(() => import('@/components/Forms/Forms'));
const AccountLayouts = dynamic(() => import('@/components/Layouts/AccountLayouts'));
const AccountProfileNavbar = dynamic(() => import('@/components/AccountPages/AccountProfileNavbar'));


const PasswordPage = () => {
    const onSubmit = (data) => {

    }
    return (
        <>
            <AccountProfileNavbar />
            <div className='max-w-[970px] mx-auto pb-10 px-5 lg:px-0'>
                <h1 className='text-[#3749bb] text-2xl font-semibold font-sans'>
                    Change Password</h1>
                <p className='my-3 text-[18px] font-sans opacity-70'>Please type and confirm to change your current password.
                </p>

                <Forms submitHandler={onSubmit} >
                    <div className='grid md:grid-cols-2'>
                        <div>

                            <div>
                                <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                                    <span>Old Password</span>

                                </label>
                                <FormsInput
                                    name="old_password"
                                    type="text"
                                    placeholder='Old Password'

                                />
                            </div>
                            <div>
                                <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                                    <span>New Password</span>

                                </label>
                                <FormsInput
                                    name="new_password"
                                    type="text"
                                    placeholder='New Password'
                                />
                            </div>
                            <div>
                                <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                                    <span>Password Confirm</span>

                                </label>
                                <FormsInput
                                    name="confirm_password"
                                    type="text"
                                    placeholder='Password Confirm'
                                />
                            </div>

                            <div className='mt-5'>
                                <button type='submit' className='btn '>Continue</button>
                            </div>


                        </div>
                    </div>
                </Forms>
            </div>
        </>
    );
};

export default PasswordPage;

PasswordPage.getLayout = function getLayout(page) {
    return (
        <AccountLayouts>
            {page}
        </AccountLayouts>
    );
}
