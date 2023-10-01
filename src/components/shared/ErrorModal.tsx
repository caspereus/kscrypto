import { Modal, ModalBackdrop, ModalContent, ModalBody, Button, ButtonText, VStack, Text } from "@gluestack-ui/themed";

export type ErrorModalProps = React.ComponentPropsWithoutRef<typeof Modal> & {
  onPressRefresh: () => void;
}

export default function ErrorModal(props: ErrorModalProps) {
  return (
    <Modal {...props}>
      <ModalBackdrop />
      <ModalContent>
        <ModalBody width="$full">
          <VStack flex={1} padding="$2" paddingVertical="$4" space="lg">
            <VStack>
              <Text color="$black" size="lg" textAlign='center' bold>Something went wrong</Text>
              <Text color="$black" size="xs" textAlign='center'>Please check your connection and try again</Text>
            </VStack>
            <VStack space="sm">
              <Button onPress={props.onPressRefresh}>
                <ButtonText>Refresh</ButtonText>
              </Button>
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}