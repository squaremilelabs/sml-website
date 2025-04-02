import { Avatar, Link, ScrollShadow } from "@nextui-org/react"
import { ClassNameValue, twMerge } from "tailwind-merge"
import NextLink from "next/link"
import Box from "./Box"

export default function GreetingBox({ className }: { className?: ClassNameValue }) {
  return (
    <Box className={twMerge("flex h-full w-full flex-col items-stretch p-0", className)}>
      <ScrollShadow className="w-full grow space-y-4 p-6">
        <strong className="font-semibold">Hi there!</strong>
        <p>
          I am a software engineer, business accountant, data wizard, project executor and
          productivity hacker providing{" "}
          <span className="font-medium text-primary">fractional CXO services</span> for an intimate
          circle of founders, and developing{" "}
          <span className="font-medium text-primary">software projects</span> with & for the public.
        </p>
        <p>
          Before founding Square Mile Labs, I co-founded an accounting & technology firm (
          <Link
            target="_blank"
            href="https://fureyfs.com"
            className="font-medium text-default-500 underline"
          >
            Furey
          </Link>
          ), consulting for high-growth startups across the country, and developing internal
          software for our white-glove services.
        </p>
        <p>
          I&apos;ve since founded SML to become an essential resource for innovations and
          operational excellence — designing & developing tools, technologies, and processes which
          set a new standard for work.
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
