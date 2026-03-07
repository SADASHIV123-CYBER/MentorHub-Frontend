import React, { useContext } from "react"
import Button from "../../components/Button/Button"
import Slider from "../../components/Slider/Slider"
import HowItWorks from "../../components/HowItWorks/HowItWorks"
import Pricing from "../../components/Pricing/Pricing"
import About from "../../components/About/About"
import Footer from "../../components/Footer/Footer"
import Mentors from "../../components/Mentor/Mentor"
import { AuthContext } from "../../context/context"
import { ModalContext } from "../../context/context"
import { Navigate } from "react-router-dom"


function Home() {

  const {user} = useContext(AuthContext);
  const {openLogin, setView} = useContext(ModalContext);

  const getStartHandle = () => {
    openLogin()
    setView("signIn")
  }

  if(user) {
    if(user.role === "Student") {
      return <Navigate to="/Student" replace />
    } else if(user.role === "Mentor") {
      return <Navigate to="/Mentor" replace /> 
    } else {
      return <Navigate to="/Admin" replace /> 
    }

  }
  return(
    <main id="home">
      <div className="relative flex flex-col min-h-[80vh] items-center justify-center overflow-hidden px-4 text-center " >
        <h1 className="mb-6 text-4xl text-white font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl w-180 " > Unlock Your Future with the Right Mentor </h1>

        <p className="text-[#87b1d3] mx-auto mb-8 max-w-xl text-lg text-muted-foreground ">Discover opportunities, get expert help with essays and learning, and connect with mentors for 1-on-1 sessions. </p>

        <div >
          <Button styleType="btn-1" onClickHandler={getStartHandle} text="Get Start" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 text-base" />
        </div>
      </div>

      <section id="features" className="py-20 px-6 scroll-mt-20">
        <div className="mx-auto max-w-7xl">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Everything you need to grow
            </h2>

            <p className="mt-4 text-lg text-[#87b1d3]">
              Tools and resources to help you reach your full potential.
            </p>
          </div>

      <div className="bg-[#002244] h-[420px] flex items-center justify-center rounded-xl">
         <Slider />
      </div>

        </div>
      </section>

      {/* <section className="py-20 px-6 scroll-mt-20 bg-muted/50" >
        <div className="mx-auto max-w-7xl" >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-white" >How MentorHub Works</h2>
            <p className="mt-4 text-lg text-muted-foreground text-[#87b1d3] ">Get started in three simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
            <div className="text-center" >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold" >
                1
              </div>

              <h3 className="text-lg font-semibold text-foreground" >Create Your Profile</h3>
              <p className="mt-2 text-sm text-muted-foreground">Sign up and tell us about your interests, goals, and what kind of mentor you're looking for.</p>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 px-6 scroll-mt-20 bg-muted/50">
      <div className="mx-auto max-w-7xl">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            How MentorHub Works
          </h2>

          <p className="mt-4 text-lg text-[#87b1d3]">
            Get started in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-white text-lg font-bold">
              1
            </div>

            <h3 className="text-lg font-semibold text-white">
              Create Your Profile
            </h3>

            <p className="mt-2 text-sm text-[#87b1d3]">
              Sign up and tell us about your interests, goals, and what kind of mentor you're looking for.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-white text-lg font-bold">
              2
            </div>

            <h3 className="text-lg font-semibold text-white">
              Get Matched
            </h3>

            <p className="mt-2 text-sm text-[#87b1d3]">
              Our smart matching system connects you with mentors who match your skills, goals, and learning style.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-white text-lg font-bold">
              3
            </div>

            <h3 className="text-lg font-semibold text-white">
              Start Growing
            </h3>

            <p className="mt-2 text-sm text-[#87b1d3]">
              Book mentorship sessions, receive guidance, and improve your skills with expert feedback.
            </p>
          </div>

        </div>
      </div>
      </section> */}

      <HowItWorks />

      <Mentors />


      <Pricing />

      <About />

      <Footer />


    </main>

    
  )
}

export default Home