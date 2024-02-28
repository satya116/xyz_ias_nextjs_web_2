import React from 'react'

const HeroBanner = () => {
    return (


        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right flex flex-col items-start justify-around	">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    Your Path to Success                    </h2>

                    <p className="hidden text-gray-500 md:mt-4 md:block">
                    Welcome to our UPSC coaching platform! Get ready to ace your exams with our expert guidance and resources. Explore courses, connect with fellow aspirants, and succeed together! Let's start your journey to success!                    </p>


                    <div className='flex justify-around items-center'>
                        <div className="mt-4 md:mt-8 pr-5">
                            <a
                                href="#"
                                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started
                            </a>
                        </div>
                        <div className="mt-4 md:mt-8 pr-5" >
                            <a
                                href="#"
                                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                View  Courses
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <img
                alt="Student"
                src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full object-cover sm:h-full"
            />
        </section>
    )
}

export default HeroBanner