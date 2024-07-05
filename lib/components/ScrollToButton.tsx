"use client"

import { mdiArrowDown } from "@mdi/js"
import Icon from "@mdi/react"
import { Button } from "@nextui-org/react"
import { useCallback, useMemo } from "react"

export default function ScrollToButton({
  label,
  scrollToId,
}: {
  label: string
  scrollToId: string
}) {
  const documentMounted = typeof document !== "undefined"
  const scrollToElement = useMemo(() => {
    if (documentMounted) {
      return document.getElementById(scrollToId)
    }
    return null
  }, [documentMounted, scrollToId])
  const handleScroll = useCallback(() => {
    scrollToElement?.scrollIntoView({ behavior: "smooth" })
  }, [scrollToElement])

  return (
    <Button
      className="sticky bottom-4 right-4 w-32 justify-between self-end bg-background font-bold text-foreground shadow-md lg:bottom-8 lg:right-8"
      disableRipple
      onPress={handleScroll}
      endContent={<Icon path={mdiArrowDown} className="w-4 animate-pulse" />}
    >
      {label}
    </Button>
  )
}
