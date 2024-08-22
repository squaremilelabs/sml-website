"use client"
import GreetingBox from "lib/components/GreetingBox"
import LogoBox from "lib/components/LogoBox"
import ScrollToButton from "lib/components/ScrollToButton"
import ServicesSection from "lib/components/ServicesSection"
import ContactBox from "lib/components/ContactBox"
import GreetingButtonModal from "lib/components/GreetingButtonModal"
import Box from "lib/components/Box"

export default function Page() {
  return (
    <main className="flex h-full w-full snap-y snap-mandatory flex-col space-y-4 overflow-auto transition-all lg:flex-row lg:space-x-8 lg:space-y-0">
      {/* LOGO & GREETING BOX */}
      <section className="sticky top-0 z-50 flex h-fit max-h-screen w-full shrink-0 flex-col space-y-2 self-center p-4 lg:h-full lg:w-[500px] lg:space-y-4 lg:p-8 lg:pr-0">
        <LogoBox />
        <GreetingBox className="hidden max-h-full grow overflow-auto lg:flex" />
        <GreetingButtonModal className="flex lg:hidden" />
      </section>
      {/*  */}
      <section className="grow">
        {/* Scroll down hint */}
        <div className="flex h-screen snap-start flex-col items-end justify-end">
          <ScrollToButton scrollToId="services" label="Services" />
        </div>
        <div
          id="services"
          className="flex h-screen w-full snap-start flex-col p-0 pt-[160px] lg:pt-0"
        >
          <ServicesSection />
          <ScrollToButton scrollToId="projects" label="Projects" />
        </div>
        <div
          id="projects"
          className="flex h-screen w-full snap-start flex-col items-center p-0 pt-[160px] lg:pt-0"
        >
          <div className="item-center flex h-full w-full flex-col items-start justify-start px-4 py-8">
            <Box>
              <p className="max-w-96">
                🥷 SML&apos;s{" "}
                <span className="font-semibold text-primary">open source projects</span> are
                (ironically) in stealth mode as of August 2024.
              </p>
              <br />
              <p className="text-sm">Please reach out with your curiosity.</p>
            </Box>
          </div>
          <ScrollToButton scrollToId="contact" label="Contact" />
        </div>
        <div
          id="contact"
          className="flex h-screen snap-start flex-col items-start justify-start p-4 pt-[180px] lg:items-start lg:p-8 lg:pt-8"
        >
          <ContactBox />
        </div>
      </section>
    </main>
  )
}
