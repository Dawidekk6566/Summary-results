import './globals.css'

export default function Home() {
  return (
   <main className=''>
      <section className='grid h-screen place-items-center'>
          <section className='flex justify-center items w-[400px] h-[500px] rounded-xl bg-gradient-to-t from-blue-800 via-blue-800 to-purple-800'>
              <p className='absolute py-5 font-semibold text-gray-300'>Your Result</p>
              <div className='flex-col flex justify-center items-center my-20 leading-loose h-48 w-48 bg-blue-900 rounded-full py-16'>
                <h1 className='text-5xl font-bold'>76</h1>
                <p className='text-gray-300'>of 100</p>
              </div>
              <p className='absolute my-80 text-3xl'>Great</p>
              <p className='absolute my-96 w-1/4 text-center md:w-1/5'>You scored higher than 65% of the people who have taken this text.</p>
          </section>
      </section>
   </main>
  )
}
