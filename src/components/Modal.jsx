import { useContext, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Link,
  Text,
  Divider,
} from "@chakra-ui/react";
import { SurveyContext } from "../context/SurveyContext";
import { useEffect } from "react";

const ModalComponent = ({ goToResult, goBack, showModal }) => {
  const downloadRef = useRef();
  const { data } = useContext(SurveyContext);
  useEffect(() => {
    if (!downloadRef.current) return;
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    downloadRef.current.setAttribute("href", dataStr);
    downloadRef.current.setAttribute("download", "surveyData.json");
  });
  return (
    <Modal isOpen={showModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text textAlign="center" fontSize="2xl">
            製作完成
          </Text>
        </ModalHeader>
        <ModalBody py={4}>
          <Text>
            已根據您的填寫製作了表單，您可以針對需求點選下方三個按鈕：
          </Text>
          <Divider my={4} />
          <Text>
            <span style={{ fontSize: "1.125rem", fontWeight: "bold" }}>
              下載
            </span>
            ：下載 JSON 檔，在您目前使用的專案中引用
          </Text>
          <Text>
            <span style={{ fontSize: "1.125rem", fontWeight: "bold" }}>
              觀看結果：
            </span>
            前往觀看此次表單建立後的樣式
          </Text>
          <Text>
            <span style={{ fontSize: "1.125rem", fontWeight: "bold" }}>
              返回修改：
            </span>
            如想修改表單內容，請點選此按鈕
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button as="a" colorScheme="blue" mr={3} ref={downloadRef}>
            下載
          </Button>
          <Button mr={3} onClick={goToResult}>
            觀看結果
          </Button>
          <Button onClick={goBack}>返回修改</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
