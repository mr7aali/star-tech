import React from 'react';
import FormsInput from '../Forms/FormsInput';
import Forms from '../Forms/Forms';
import { countries } from './constant';

const AddAdressFroms = () => {
    const onSubmit = (data) => {
        console.log(data)
    }
   



    
    return (
        <div className='max-w-[970px] mx-auto pb-10 px-5 lg:px-0'>
            <h1 className='text-[#3749bb] text-2xl font-semibold font-sans'> Add New Address</h1>
            <p className='my-3 text-[18px] font-sans opacity-70'>Please enter the required details to add a new address.</p>

            <Forms submitHandler={onSubmit} >
                <div className='grid md:grid-cols-2'>
                    <div>



                        <div className='grid grid-cols-2 gap-2'>
                            <div>
                                <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                                    <span>  First Name</span>

                                </label>
                                <FormsInput
                                    name="first_name"
                                    type="text"
                                    placeholder='First Name'
                                />
                            </div>
                            <div>
                                <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                                    <span> Last Name</span>

                                </label>
                                <FormsInput
                                    name={"last_name"}
                                    type="text"
                                    placeholder='Last Name'
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                                <span> Company</span>

                            </label>
                            <FormsInput
                                name={"company"}
                                type="text"
                                placeholder='Company'

                            />
                        </div>
                        <div>
                            <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                                <span> Company</span>

                            </label>
                            <FormsInput
                                name={"address_1"}
                                type="text"
                                placeholder='Address 1'
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                                <span> Company</span>

                            </label>
                            <FormsInput
                                name={"address_2"}
                                type="text"
                                placeholder='Address 2'
                            />
                        </div>

                        <div className='grid grid-cols-2 gap-2'>
                            <div>
                                <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                                    <span>  City</span>

                                </label>
                                <FormsInput
                                    name="city"
                                    type="text"
                                    placeholder='City'
                                />
                            </div>
                            <div>
                                <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                                    <span> Post Code</span>

                                </label>
                                <FormsInput
                                    name={"last_name"}
                                    type="text"
                                    placeholder='Post Code'
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <div>
                                <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                                    <span>Country</span>

                                </label>
                                <FormsInput
                                    name="country"
                                    type="select"
                                    options={countries}
                                    placeholder='Country'
                                />
                            </div>
                            <div>
                                <label htmlFor="" className='font-serif text-[14px] mt-5 mb-2 flex justify-between'>
                                    <span>Region / State</span>

                                </label>
                                <FormsInput
                                    name={"region_state"}
                                    type="text"
                                    placeholder='Region / State'
                                />
                            </div>
                        </div>


                        <div className='mt-5'>
                            <button type='submit' className='btn '>Continue</button>
                        </div>


                    </div>
                </div>
            </Forms>
        </div>
    );
};

export default AddAdressFroms;