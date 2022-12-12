import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ListItem,
  UnorderedList,
  Button,
  Text,
} from "@chakra-ui/react";

import React from "react";

const ModalComponent = () => {
  return (
    <Modal isOpen={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text textAlign="center" fontSize="2xl">
            製作完成
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody py={4}>
          <Text>
            已根據您的填寫製作了表單，您可以針對需求點選下方三個按鈕：
          </Text>
          <UnorderedList>
            <ListItem>
              「下載」：下載 JSON 檔，在您目前使用的專案中引用
            </ListItem>
            <ListItem>「觀看結果」：前往觀看此次表單建立後的樣式</ListItem>
            <ListItem>「返回修改」：如想修改表單內容，請點選此按鈕</ListItem>
          </UnorderedList>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
