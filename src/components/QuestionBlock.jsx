import { forwardRef, useEffect } from "react";
import {
  Box,
  Container,
  Button,
  CloseButton,
  HStack,
  Input,
  Stack,
  Text,
  Switch,
  Tooltip,
  Divider,
} from "@chakra-ui/react";
import { Controller, useFieldArray, useWatch } from "react-hook-form";
import ShapeType from "./ShapeType";
import QuestionType from "./QuestionType";
import Icons from "./Icons";
import useCustomToast from "../hooks/useCustomToast";
import ErrorText from "./ErrorText";

const CustomToolTip = forwardRef(({ children, ...res }, ref) => {
  return (
    <Box ref={ref} {...res}>
      {children}
    </Box>
  );
});

export const QuestionBlock = forwardRef(
  (
    { id, control, register, name, setValue, getValues, removeBlock, err },
    ref
  ) => {
    const toast = useCustomToast();
    const {
      fields: optionsFields,
      append,
      remove,
    } = useFieldArray({
      control,
      name: `${name}.choices`,
      rules: { required: "至少新增一個選項" },
    });
    // radiogroup 類型
    const questionType = useWatch({
      control,
      name: `${name}.type`,
    });
    useEffect(() => {
      // radiogroup 類型為 text，移除其他選項，只留第一個
      if (questionType === "text") {
        const getChoicesFirstField = getValues(`${name}.choices.0`);
        setValue(`${name}.choices`, [getChoicesFirstField]);
      }
    }, [questionType]);
    useEffect(() => {
      // 選項刪除時，更新每個 input 的 name
      optionsFields.forEach((optionsField, optionsFieldIndex) => {
        setValue(
          `${name}.choices.${optionsFieldIndex}.value`,
          // 暫時以 1、2、3 作為 value
          optionsFieldIndex + 1
        );
      });
    }, [optionsFields]);

    return (
      <Container key={id} w={"100%"} variant="primary">
        <Stack spacing="20px">
          <HStack spacing="20px">
            <Box flex={1}>
              <Input
                placeholder="請輸入題目名稱"
                variant="flushed"
                px="10px"
                backgroundColor="#f8f9fa"
                borderRadius="0"
                {...register(`${name}.title`, { required: "請勿空白" })}
              />
              <ErrorText message={err?.title?.message} />
            </Box>
            <Box alignSelf="flex-start">
              <Controller
                name={`${name}.type`}
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <QuestionType typeOnChange={onChange} typeValue={value} />
                )}
              />
            </Box>
          </HStack>
          <Stack spacing="20px">
            {optionsFields.map((optionsField, idx) => (
              <HStack key={optionsField.id} justifyContent="space-between">
                <ShapeType type={questionType} />
                <Input
                  {...register(`${name}.choices.${idx}.text`)}
                  placeholder={
                    questionType === "text"
                      ? "此輸入框的文字，將作為提示文字"
                      : `選項${idx + 1}`
                  }
                />
                {questionType === "text" && (
                  <Tooltip label="此輸入框的文字，將作為提示文字">
                    <CustomToolTip>
                      <Icons.QuestionMark />
                    </CustomToolTip>
                  </Tooltip>
                )}
                {optionsFields.length > 1 && (
                  <CloseButton
                    onClick={() => {
                      toast.success(
                        `刪除選項${idx + 1}`,
                        `${getValues(`${name}.choices.${idx}.text`)}`
                      );
                      remove(idx);
                    }}
                    size="md"
                  />
                )}
              </HStack>
            ))}
          </Stack>
        </Stack>

        <Box w="100%" my="30px" h="2px" bgColor="primary.300" flex={1} />
        <HStack justifyContent="space-between">
          {optionsFields.length >= 1 && questionType !== "text" && (
            <Button
              onClick={() => {
                append({ value: "", text: "" });
                toast.success("新增選項成功");
              }}
              w="100px"
            >
              新增選項
            </Button>
          )}
          <Controller
            control={control}
            name={`${name}.isRequired`}
            render={({ field: { onChange, value } }) => (
              <HStack marginLeft="auto">
                <Icons.BsTrash
                  fontSize="20px"
                  cursor="pointer"
                  onClick={() => {
                    if (optionsFields.length > 1) {
                      removeBlock();
                      toast.success("刪除選項成功");
                      return;
                    }
                    toast.error("至少有一道題目");
                  }}
                />
                <Divider
                  orientation="vertical"
                  height="25px"
                  borderColor="primary.300"
                />
                <HStack>
                  <Text>必填</Text>
                  <Switch size="md" onChange={onChange} isChecked={value} />
                </HStack>
              </HStack>
            )}
          />
        </HStack>
      </Container>
    );
  }
);

export default QuestionBlock;
