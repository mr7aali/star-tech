/* eslint-disable react/no-unescaped-entities */
import Forms from '@/components/Forms/Forms';
import FormsInput from '@/components/Forms/FormsInput';
import RootLayouts from '@/components/Layouts/RootLayouts';
import HeadTag from '@/components/sheared/HeaderTag';
import Link from 'next/link';
import { BiSolidCommentError } from "react-icons/bi"

const RegisterPage = () => {
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <section className='p-2'>
            <HeadTag descriptionContent={"Star Tech Register page"} title={"Register Account"} />
            <div className='max-w-[400px] mx-auto mt-16 mb-24'>

                <div className='bg-red-100 py-4 px-3  rounded-md mb-4 flex  items-center'>
                    <span className='text-[23px] pr-3 text-[red]'> <BiSolidCommentError /> </span>
                    <span className='font-thin font-serif text-[14px] sm:text-[15px] leading-none'>Warning: No match for Phone Number and/or Password.</span>
                </div>
                <h1 className='font-serif font-bold text-[20px]'>Register Account</h1>
                <Forms submitHandler={onSubmit} >
                    <div className='grid grid-cols-2 gap-4'>
                        <div >
                            <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 block'>
                                First Name
                            </label>
                            <FormsInput
                                name="firstName"
                                type="text"
                                // placeholder='Phone / E-Mail' 
                                placeholder={"First name"}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                                Last Name
                            </label>
                            <FormsInput name={"lastName"} type="text" placeholder='Last name' />
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
                            Passwoard

                        </label>
                        <FormsInput name={"password"} type="passwoard" placeholder='passwoard' />
                    </div>
                    <div className='mt-5'>
                        <button className='btn w-full pt-4 block' type='submit'> Continue</button>
                    </div>

                    <p className="w-full mt-5 mb-2"><span >Already have an account?</span></p>

                    <Link href="/auth/login" className='btn st-outline w-full'>login page</Link>
                </Forms>
            </div>
        </section>
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