"use client"
import { Avatar, Divider } from "@nextui-org/react"
import { Send } from "lucide-react"
import Box from "./Box"

export default function ContactBox() {
  return (
    <Box className="w-96 max-w-full space-y-4 p-4">
      <div className="flex items-center space-x-2 text-primary">
        <Send />
        <p className="text-xl font-semibold">Contact</p>
      </div>
      <Divider />
      <div className="text-sm">
        <p className="font-medium">e@squaremilelabs.com</p>
        <p className="font-medium">973-699-5864</p>
        <p>5 Marine View Plaza, Suite 402</p>
        <p>Hoboken, NJ 07030</p>
      </div>
      <Divider />
      <p className="text-sm">
        I&apos;m best reached via email or text message. Looking forward to connecting!
      </p>
    </Box>
  )
}
