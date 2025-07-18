import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { use } from 'react'
import Image from 'next/image'
import { signOut } from '@/lib/actions/auth.action'
import { LogOut } from 'lucide-react' 
import InterviewCard from '@/components/InterviewCard'
import { getCurrentUser } from '@/lib/actions/auth.action'
import { getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/general.action'
const Page = async () => {
  const user = await getCurrentUser();
  const [userInterviews, latestInterviews] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! })
  ]);
  
  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = latestInterviews?.length! > 0;
  return (
    <>
    <section className='card-cta'>
      <form action={signOut} className="absolute top-4 right-4">
        <button
  type="submit"
  title="Sign Out"
  className="flex items-center gap-2 hover:opacity-80"
>
  Log Out
  <LogOut className="w-5 h-5 text-gray-200" />
</button>
      </form>
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
        
        {hasPastInterviews ? (
          userInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id}/>
          ))
        ) : (
          <p>You haven't taken any interviews yet.</p>
        )}
        {/* <p>You havent taken any interview yet</p> */}
      </div>
    </section>
    <section className='flex flex-col gap-6 mt-8'>
      <h2>Take an interview</h2>
      <div className='interviews-section'>
        {hasUpcomingInterviews ? (
          latestInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id}/>
          ))
        ) : (
          <p>There are no new interviews available.</p>
        )}
      </div>
    </section>
    </>
  )
}
export default Page

