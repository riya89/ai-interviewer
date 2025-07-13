import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'
const Page = () => {
  return (
    <>
    <section className='card-cta'>
      <div className='flex flex-col gap-6 max-w-lg'>
        <h2>Get Interview ready with AI-Powered practice and feedback</h2>
      <p className='text-lg'>
        Practice on real interview questions, get AI-generated feedback, and improve your skills with PrepWise.
      </p>
      <Button asChild className='btn-primary max-sm:w-full'>
        <Link href="/interview">Start and interview</Link>

      </Button>
      </div>

      <Image src="/robot.png" alt="robot-dude" width={400} height={400} className="max-sm:hidden"></Image>
    </section>
    <section className='flex flex-col gap-6 mt-8'>
      <h2>Your interviews</h2>

      <div className="interviews-section">
        {dummyInterviews.map((interview) => (
          <InterviewCard {...interview} key={interview.id}/>
        ))}
        {/* <p>You havent taken any interview yet</p> */}
      </div>
    </section>
    <section className='flex flex-col gap-6 mt-8'>
      <h2>take an interview</h2>
      <div className='interview-section'>
        {dummyInterviews.map((interview) => (
          <InterviewCard {...interview} key={interview.id}/>
        ))}
      </div>
    </section>
    </>
  )
}
export default Page

