import {
  Avatar,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
  useDisclosure,
} from "@nextui-org/react"
import { ClassNameValue, twMerge } from "tailwind-merge"
import GreetingBox from "./GreetingBox"

export default function GreetingButtonModal({ className }: { className?: ClassNameValue }) {
  const { isOpen, onOpenChange, onOpen } = useDisclosure()
  return (
    <>
      <Button
        className={twMerge(
          "min-h-0 w-fit bg-background/80 px-4 py-2 font-medium text-foreground shadow-small backdrop-blur-sm",
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
        <ModalContent className="h-full bg-background">
          {() => (
            <>
              <ModalHeader />
              <ModalBody className="h-full shrink-0 grow">
                <GreetingBox className="h-full bg-background shadow-none" />
              </ModalBody>
              <ModalFooter />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
