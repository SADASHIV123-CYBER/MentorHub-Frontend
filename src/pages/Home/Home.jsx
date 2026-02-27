import React from "react"
import Button from "../../components/Button/Button"

function Home() {
  return(
    <main>
      <div className="relative flex flex-col min-h-[80vh] items-center justify-center overflow-hidden px-4 text-center " >
        <h1 className="mb-6 text-4xl text-white font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl w-180 " > Unlock Your Future with the Right Mentor </h1>

        <p className="text-[#87b1d3] mx-auto mb-8 max-w-xl text-lg text-muted-foreground ">Discover opportunities, get expert help with essays and learning, and connect with mentors for 1-on-1 sessions. </p>

        <div >
          <Button styleType="btn-1" text="Get Start" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 text-base" />
        </div>
      </div>
    </main>
  )
}

export default Home