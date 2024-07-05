import { Avatar, Card, CardBody, Image, Link, ScrollShadow } from "@nextui-org/react"
import { ClassNameValue, twMerge } from "tailwind-merge"
import Box from "./Box"

export default function GreetingBox({ className }: { className?: ClassNameValue }) {
  return (
    <Box className={twMerge("flex h-full w-full flex-col items-stretch p-0", className)}>
      <ScrollShadow className="w-full grow space-y-4 p-6">
        <p>Hello Hoboken!</p>
        <p>
          I am a software engineer, managerial accountant, data wizard, and productivity guru
          providing services exclusivley for our small but mighty city.
        </p>
        <p>
          Before starting SML, I co-founded another Hoboken business (
          <Link target="_blank" href="https://fureyfs.com">
            Furey
          </Link>
          ) to bring technology to the accounting function for startups across the country.
        </p>
        <p>
          Now, I&apos;m hyperfocused on helping Hoboken become a beacon of innovation & operational
          excellence — outshining that noisy city across the Hudson.
        </p>
        <p>
          Whether you&apos;re a staple of Washington Street, a cozy cafe on 14th, a global franchise with
          offices on River, or a unicorn-in-progress born in a Stevens dormroom — I am eager to
          become an asset to your team.
        </p>
        <p>Let&apos;s build together!</p>
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
