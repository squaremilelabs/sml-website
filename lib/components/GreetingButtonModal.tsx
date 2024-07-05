import {
  Avatar,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
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
        size="full"
        classNames={{ base: "bg-background/30 backdrop-blur-sm" }}
        backdrop="transparent"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader />
              <ModalBody>
                <GreetingBox className="bg-background" />
              </ModalBody>
              <ModalFooter />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
