import { Image } from "@nextui-org/react"
import { ClassNameValue, twMerge } from "tailwind-merge"
import Box from "./Box"

export default function LogoBox({ className }: { className?: ClassNameValue }) {
  return (
    <Box className={twMerge("flex flex-row items-center space-x-4 p-4", className)}>
      <Image
        alt="Square Mile Labs"
        src="/sml-gold-logo.png"
        className="w-10 rounded-none lg:w-12"
      />
      <div>
        <h1 className="text-2xl font-semibold lg:text-3xl">Square Mile Labs</h1>
        <h2 className="text-balance text-xs lg:text-sm">Tech/Ops Consulting & Development</h2>
      </div>
    </Box>
  )
}
