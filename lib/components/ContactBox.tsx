"use client"

import { Button, Divider, Input } from "@nextui-org/react"
import { useState } from "react"
import { z } from "zod"
import { useFormik } from "formik"
import Box from "./Box"

export default function ContactBox() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      const check = z.string().email().safeParse(values.email)
      if (!check.success) {
        return { email: "Please enter a valid email" }
      }
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <Box className="w-96 max-w-full space-y-4 p-4">
      <p className="text-xl font-semibold">Contact</p>
      <Divider />
      <div className="text-sm">
        <p className="font-medium">e@squaremilelabs.com</p>
        <p>5 Marine View Plaza, Suite 402</p>
        <p>Hoboken, NJ 07030</p>
      </div>
      <Divider />
      <form className="flex flex-col items-stretch space-y-2" onSubmit={formik.handleSubmit}>
        <p className="text-sm">Enter your email and I&apos;ll reach out</p>
        <Input
          type="email"
          label="Email"
          variant="bordered"
          classNames={{ inputWrapper: "bg-background" }}
          {...formik.getFieldProps("email")}
          isInvalid={!!formik.touched.email && !!formik.errors.email}
          errorMessage={formik.touched.email ? formik.errors.email : null}
        />
        <Button
          type="submit"
          color="primary"
          variant="flat"
          className="font-bold"
          isDisabled={!formik.isValid}
        >
          Submit
        </Button>
      </form>
    </Box>
  )
}
