import { getUserInfo } from '@/service/auth.service';
import dynamic from 'next/dynamic';
const AccountLayouts = dynamic(() => import('@/components/Layouts/AccountLayouts'));
const ProfileNavbar = dynamic(() => import('@/components/AccountPages/AccountProfileNavbar'));
const FormsInput = dynamic(() => import('@/components/Forms/FormsInput'));
const Forms = dynamic(() => import('@/components/Forms/Forms'));

const EditPage = () => {



    const onSubmit = () => {

    }
    return (
        <>
            <ProfileNavbar />
            <div className='max-w-[970px] mx-auto pb-10 px-5 lg:px-0'>
                <h1 className='text-[#3749bb] text-2xl font-semibold font-sans'>
                    My Account Information
                </h1>
                <Forms submitHandler={onSubmit} defaultValues={getUserInfo()}>

                    <div className='grid md:grid-cols-2'>

                        <div>



                            <div className='grid grid-cols-2 gap-4'>
                                <div >
                                    <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 block'>
                                        First Name
                                    </label>
                                    <FormsInput
                                        name="first_name"
                                        type="text"
                                        // placeholder='Phone / E-Mail' 
                                        // value="ali"
                                        // defaultValues="ali"
                                        placeholder={"First name"}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                                        Last Name
                                    </label>
                                    <FormsInput name={"last_name"} type="text" placeholder='Last name' />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 block'>E-Mail</label>
                                <FormsInput name={"email"} type="email" placeholder='E-Mail' />
                            </div>
                            <div>
                                <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                                    Telephone

                                </label>
                                <FormsInput name={"phone"} type="text" placeholder='Phone' />
                            </div>
                            <div>
                                <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                                    Fax

                                </label>
                                <FormsInput name={"fax"} type="text" placeholder='Fax' />
                            </div>

                            <div className='mt-5'>
                                <button type='submit' className='btn '>Continue</button>
                            </div>

                        </div>
                    </div>








                </Forms>
            </div >
        </>
    );
};

export default EditPage;

EditPage.getLayout = function getLayout(page) {
    return (
        <AccountLayouts>
            {page}
        </AccountLayouts>
    );
}