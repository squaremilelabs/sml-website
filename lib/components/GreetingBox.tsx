import { Avatar, Card, CardBody, Image, Link, ScrollShadow } from "@nextui-org/react"
import { ClassNameValue, twMerge } from "tailwind-merge"
import NextLink from "next/link"
import Box from "./Box"

export default function GreetingBox({ className }: { className?: ClassNameValue }) {
  return (
    <Box className={twMerge("flex h-full w-full flex-col items-stretch p-0", className)}>
      <ScrollShadow className="w-full grow space-y-4 p-6">
        <p className="font-semibold">Hello Hoboken!</p>
        <p>
          I am a software engineer, managerial accountant, data wizard, and productivity guru
          providing services exclusivley for our small but mighty city.
        </p>
        <p>
          Before starting SML, I co-founded a tech-forward accounting firm (
          <Link target="_blank" href="https://fureyfs.com" className="font-semibold">
            Furey
          </Link>
          ; also in Hoboken), and consulted for high-growth startups across the country.
        </p>
        <p>
          Now, I&apos;m hyperfocused on helping Hoboken become a beacon of innovation & operational
          excellence — outshining that noisy city across the Hudson.
        </p>
        <p>
          Whether you&apos;re a staple of Washington Street, a cozy cafe on 14th, a global franchise
          with offices on River, or a unicorn-in-progress born in a Stevens dormroom — I am eager to
          become an extension of your team.
        </p>
        <p>
          The{" "}
          <Link as={NextLink} href="/#services" className="font-semibold">
            services
          </Link>{" "}
          I provide are based on the knowledge, skills, and passions I&apos;ve accumulated from
          prior projects & consulting engagements performed with high success. Whether you&apos;re
          looking for a one-time project or a long-term business partner, I&apos;m at your service!
        </p>
      </ScrollShadow>
      <div className="flex items-center space-x-2 p-4">
        <Avatar src="/e-headshot.png" />
        <div>
          <p className="text-sm">Sincerely,</p>
          <Link
            href="https://www.linkedin.com/in/eleazareramos/"
            target="_blank"
            className="cursor-pointer font-medium text-foreground"
          >
            <p>
              Eleazar <span className="text-primary">&ldquo;E&rdquo;</span> Ramos
            </p>
          </Link>
        </div>
      </div>
    </Box>
  )
}
