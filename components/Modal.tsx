"use client"

import {FormEvent, Fragment, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { addUserEmailToProduct } from '@/lib/actions'

interface Props{
    productId:string
}
const Modal = ({productId}:Props) => {
    let [isOpen, setIsOpen] = useState(true);
    const [isSubmitting, setisSubmitting] = useState(false);
    const [email, setEmail] = useState('');
    const handleSubmit=async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setisSubmitting(true);
        await addUserEmailToProduct(productId,email);
        setisSubmitting(false);
        setEmail('');
        closeModal();
    }
    const openModal=()=> setIsOpen(true);
    const closeModal=()=> setIsOpen(false);
  return (
    <>
    <button className="btn" type='button' onClick={openModal}>Track</button>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div"  onClose= {closeModal} className="dialog-container">
        <div className="min-h-screen px-4 text-center">
            <Transition.Child
             as={Fragment}
             enter='ease-out duration-300'
             enterFrom='opacity-0'
             enterTo='opacity-100'
             leave='ease-in duration-200'
             leaveFrom='opacity-100'
             leaveTo='opacity-0'>
            
                <Dialog.Overlay className="fixed inset-0"/>
            </Transition.Child>
            <span className="inline-block h-screen align-middle" aria-hidden="true"/>
            <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'>
                <div className="dialog-content">
                    <div className="flex-col flex">
                        <div className="justify-between flex">
                            <div className="border border-gray-200 p-3 rounded-10">
                                <Image
                                src="/assets/icons/logo.svg"
                                alt='logo'
                                width={28}
                                height={28}/>
                            </div>
                            <Image
                            src="/assets/icons/x-close.svg"
                            alt='close'
                            width={24}
                            height={24}
                            className='cursor-pointer'
                            onClick={closeModal}
                            />
                        </div>
                        <h4 className='dialog-head_text'>Stay updated with product pricing alerts right in your inbox!</h4>
                        <p className='text-sm text-gray-600 mt-2'>Never miss a bargain again with our timely alerts!</p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col mt-5">
                        <label htmlFor="email" className='text-sm font-medium text-gray-700'>Email Address</label>
                        <div className="dialog-input_container">
                            <Image 
                            src="/assets/icons/mail.svg"
                            alt='mail'
                            width={18}
                            height={18}
                            />
                            <input type="email" required id='email'placeholder='Enter your email address' className='dailog-input' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <button type='submit' className='dialog-btn'>{isSubmitting? 'Tracking' :'Track'}</button>
                    </form>
                </div>
            </Transition.Child>
        </div>
        </Dialog>
    </Transition>
    
    </>
  )
}

export default Modal