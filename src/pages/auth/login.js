/* eslint-disable react/no-unescaped-entities */
import Forms from '@/components/Forms/Forms';
import FormsInput from '@/components/Forms/FormsInput';
import RootLayouts from '@/components/Layouts/RootLayouts';
import Link from 'next/link';
import { BiSolidCommentError } from "react-icons/bi"

const LoginPage = () => {
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <div className='max-w-[400px] mx-auto mt-16 mb-24'>
                <div className='bg-red-100 py-4 px-3  rounded-md mb-4 flex  items-center'>
                    <span className='text-[23px] pr-3 text-[red]'> <BiSolidCommentError /> </span>
                    <span className='font-thin font-serif leading-none'>Warning: No match for Phone Number and/or Password.</span>
                </div>
                <h1 className='font-serif font-bold text-[20px]'>Account Login</h1>
                <form >
                    <div>
                        <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 block'>Phone / E-Mail</label>
                        <input className='block rounded-md px-5 w-full font-serif py-2 outline-none focus:border-[#5252ff] border-[#ddd] border-[1px] rounded-' type="text" placeholder='Phone / E-Mail' />
                    </div>
                    <div>
                        <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                            <span>  Password</span>
                            <span className='text-red-600 hover:underline cursor-pointer'> Forgotten Password?</span>
                        </label>
                        <input className='block rounded-md px-5 w-full font-serif py-2 outline-none focus:border-[#5252ff] border-[#ddd] border-[1px] rounded-' type="text" placeholder='Password' />
                    </div>

                    <div className='mt-5'>
                        <button className='btn w-full pt-4 block' type='submit'> Login</button>

                    </div>


                    <p className="w-full mt-5 mb-2"><span >Don't have an account?</span></p>


                    <Link href="/auth/register" className='btn st-outline w-full'>Create Your Account</Link>
                </form>
            </div>



            <div  className='max-w-[400px] mx-auto mt-16 mb-24'>
                <div className='bg-red-100 py-4 px-3  rounded-md mb-4 flex  items-center'>
                    <span className='text-[23px] pr-3 text-[red]'> <BiSolidCommentError /> </span>
                    <span className='font-thin font-serif leading-none'>Warning: No match for Phone Number and/or Password.</span>
                </div>
                <h1 className='font-serif font-bold text-[20px]'>Account Login</h1>
                <Forms submitHandler={onSubmit}>
                    <div>
                        <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 block'>Phone / E-Mail</label>
                        <FormsInput
                            name={"email"}

                            type="email"
                         
                            placeholder='Phone / E-Mail'
                        // value="" id="" validation= ""
                        //  className='block rounded-md px-5 w-full font-serif py-2 outline-none focus:border-[#5252ff] border-[#ddd] border-[1px] rounded-' 
                        />
                    </div>
                    <div>
                        <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                            <span>  Password</span>
                            <span className='text-red-600 hover:underline cursor-pointer'> Forgotten Password?</span>
                        </label>
                        <input className='block rounded-md px-5 w-full font-serif py-2 outline-none focus:border-[#5252ff] border-[#ddd] border-[1px] rounded-' type="text" placeholder='Password' />
                    </div>

                    <div className='mt-5'>
                        <button className='btn w-full pt-4 block' type='submit'> Login</button>

                    </div>


                    <p className="w-full mt-5 mb-2"><span >Don't have an account?</span></p>


                    <Link href="/auth/register" className='btn st-outline w-full'>Create Your Account</Link>
                </Forms>
            </div>
        </>
    );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
    return (
        <RootLayouts>
            {page}
        </RootLayouts>
    );
}