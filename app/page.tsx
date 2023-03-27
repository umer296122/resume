import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsTelephoneInbound } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container'>
      {/* personal information section */}
      <div className='my-2 font-bold text-stone-900 text-2xl	'>PERSONAL INFORMATION</div>
      <div className='grid grid-cols-[20%,80%]'>
        <div className='pb-6'>
          <Image src={"/next.svg"} alt="profile image" width={50} height={50} />
        </div>
        <div className='pb-6'>
          <h3 className='font-bold text-xl'>Umer Iftikhar</h3>
          <div className='flex justify-between max-w-md mt-2 flex-col'>
            <div className='flex items-center'>
              <HiOutlineLocationMarker className='mr-2' />
              <span>Canal Colony, Sialkot, Punjab, Pakistan. </span>
            </div>
            <div className='flex items-center'>
              <BsTelephoneInbound className='mr-2' />
              <span>+923320398614</span>
            </div>
            <div className='flex items-center'>
              <HiOutlineMail className='mr-2' />
              <span className=''>muhammad.omer051@gmail.com</span>
            </div>
          </div>


        </div>
      </div>
      {/* personal information section */}
      {/* education & traing section */}
      <div className='my-2 font-bold text-stone-900 text-2xl	'>EDUCATION AND TRAINING</div>
     
      <div className='grid grid-cols-[20%,80%] '>
        <div className='text-end mr-3'>2022-2023</div>
        <div className='ml-2 pl-2'>Blockchain Computing Course (BCC)</div>
        <div className='text-end mr-3'>Institution</div>
        <div className='ml-2 pl-2'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</div>
        <div className='text-end mr-3'>Percentile Score
        </div>
        <div className='ml-2 pl-2'>78 % in first quarter  (result awaitng for 2nd quarter)  </div>
        <div className='text-end mr-3'>Learning Outcomes
        </div>
        <div className='ml-2 pl-2'><p>The course consisted of four semesters. In first quarter, we learned extensively about theory of blockchain and its applications in various fields. Second semester involved practical training of programming languages used for blockchain applications e.g. (Javascript, Solidity, HTML, and CSS) and introduction of Git, Advance Git and Repositories. In third semester we are learning the concepts and training of Web 3.0 and react.</p></div>
        <div className=''></div>
        <div className='border-b-2 my-3'></div>
        <div className='text-end mr-3'>2017-2021
</div>
        <div className='ml-2 pl-2'>Bachelor of Science (BS) in Information Technology (IT)</div>
        <div className='text-end mr-3'>Institution</div>
        <div className='ml-2 pl-2'>University of Gujrat, Punjab, Pakistan </div>
        <div className='text-end mr-3'>CGPA
        </div>
        <div className='ml-2 pl-2'>3.52 out of 4.0</div>
        <div className='text-end mr-3'>Final Year Project (FYP)
        </div>
        <div className='ml-2 pl-2'>Live Tour Tracking Application (Hybrid App)</div>
        <div className='text-end mr-3'>Project  Abstract
        </div>
        <div className='ml-2 pl-2'><p>The Live Tour Tracking application is a React Native tool for travelers to track locations, friends, and family. It allows users to share their live location with others using the app, providing assistance in case of problems while traveling in unfamiliar areas. The goal of the project is to provide travelers with resources to coordinate during their trips. The cross-platform approach is chosen to improve productivity and provide a feasible solution to the problem.</p></div>
      </div>
       {/* education & traing section */}
        {/*work experence*/}
        
        <div className='my-2 font-bold text-stone-900 text-2xl	'>WORK EXPERIENCE</div>
        <div className='grid grid-cols-[20%,80%] '>
        <div className='text-end mr-3'>Designation</div>
        <div className='ml-2 pl-2'>Blockchain Computing Course (BCC)</div>
        <div className='text-end mr-3'>Timeline</div>
        <div className='ml-2 pl-2'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</div>
        <div className='text-end mr-3'>Organization
        </div>
        <div className='ml-2 pl-2'>78 % in first quarter  (result awaitng for 2nd quarter)  </div>
        <div className='text-end mr-3'>Projects
        </div>
        <div className='ml-2 pl-2'><p>The course consisted of four semesters. In first quarter, we learned extensively about theory of blockchain and its applications in various fields. Second semester involved practical training of programming languages used for blockchain applications e.g. (Javascript, Solidity, HTML, and CSS) and introduction of Git, Advance Git and Repositories. In third semester we are learning the concepts and training of Web 3.0 and react.</p></div>
        </div>
        {/*work experence*/}

    </div>
  )
}
