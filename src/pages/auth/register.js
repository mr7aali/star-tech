/* eslint-disable react/no-unescaped-entities */
import RootLayouts from '@/components/Layouts/RootLayouts';
import { BiSolidCommentError } from "react-icons/bi"

const RegisterPage = () => {
    return (
        <div className='max-w-[400px] mx-auto mt-16 mb-24'>
            <div className='bg-red-100 py-4 px-3  rounded-md mb-4 flex  items-center'>
                <span className='text-[23px] pr-3 text-[red]'> <BiSolidCommentError /> </span>
                <span className='font-thin font-serif leading-none'>Warning: No match for Phone Number and/or Password.</span>
            </div>
            <h1 className='font-serif font-bold text-[20px]'>Register Account</h1>
            <form >
                <div className='grid grid-cols-2 gap-4'>
                    <div >
                        <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 block'>
                            First Name
                        </label>
                        <input className='block rounded-md px-5 w-full font-serif py-2 outline-none focus:border-[#5252ff] border-[#ddd] border-[1px] rounded-' type="text" placeholder='Phone / E-Mail' />
                    </div>
                    <div>
                        <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                            Last Name
                        </label>
                        <input className='block rounded-md px-5 w-full font-serif py-2 outline-none focus:border-[#5252ff] border-[#ddd] border-[1px] rounded-' type="text" placeholder='Password' />
                    </div>
                </div>
                <div>
                    <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 block'>E-Mail</label>
                    <input className='block rounded-md px-5 w-full font-serif py-2 outline-none focus:border-[#5252ff] border-[#ddd] border-[1px] rounded-' type="text" placeholder='Phone / E-Mail' />
                </div>
                <div>
                    <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                    Telephone
                     
                    </label>
                    <input className='block rounded-md px-5 w-full font-serif py-2 outline-none focus:border-[#5252ff] border-[#ddd] border-[1px] rounded-' type="text" placeholder='Password' />
                </div>
                <div className='mt-5'>
                    <button className='btn w-full pt-4 block' type='submit'> Continue</button>

                </div>


                <p className="w-full mt-5 mb-2"><span >Already have an account?</span></p>


                <a href="" className='btn st-outline w-full'>login page</a>
            </form>
        </div>
    );
};

export default RegisterPage;

RegisterPage.getLayout = function getLayout(page) {
    return (
        <RootLayouts>
            {page}
        </RootLayouts>
    );
}