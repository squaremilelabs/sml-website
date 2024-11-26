import { Avatar, Button, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react"
import { ClassNameValue, twMerge } from "tailwind-merge"
import GreetingBox from "./GreetingBox"

export default function GreetingButtonModal({ className }: { className?: ClassNameValue }) {
  const { isOpen, onOpenChange, onOpen } = useDisclosure()
  return (
    <>
      <Button
        className={twMerge(
          "min-h-0 w-fit border-1 border-default-200 bg-background/80 px-4 py-2 font-medium text-foreground backdrop-blur-sm",
          className
        )}
        onPress={onOpen}
        disableRipple
        endContent={<Avatar size="sm" alt="E" src="/e-headshot.png" className="h-5 w-5" />}
      >
        ... Sincerely, E
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        scrollBehavior="inside"
        placement="top-center"
      >
        <ModalContent className="h-full bg-background p-0">
          {() => (
            <>
              {/* <ModalHeader /> */}
              <ModalBody className="h-full shrink-0 grow px-0 py-0">
                <GreetingBox className="h-full bg-background shadow-none" />
              </ModalBody>
              {/* <ModalFooter /> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
