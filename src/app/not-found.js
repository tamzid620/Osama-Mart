import Link from 'next/link'
import Image from 'next/image'
import errorImage from '@/assests/images/404.png'
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: ["400", "700"],
  style: ["normal"],
});

export default function NotFound() {
  return (
    <div className='w-full h-screen'>
      <div className='flex justify-center items-center'>
      <Image className='max-w-3xl' src={errorImage} alt=''/>
      </div>
      <Link href="/" className='flex justify-center mt-10'>
        <button 
        className={` ${kanit.className}  bg-transparent hover:bg-[#F26626]
         border-2 border-[#F26626] hover:border-white
         px-4 py-2 rounded-sm`}> Back To Home</button>
      </Link >
    </div>
  )
}