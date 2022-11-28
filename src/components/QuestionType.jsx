import { useRadioGroup, chakra, useRadio, Box, Text } from "@chakra-ui/react";

const QuestionTypeOperator = ({ description, ...props }) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <chakra.label
      _first={{
        "& .operator-btn": {
          borderTopLeftRadius: "4px",
          borderBottomLeftRadius: "4px",
          borderRight: "none",
          _checked: {
            borderRight: "2px",
          },
        },
      }}
      _last={{
        "& .operator-btn": {
          borderTopRightRadius: "4px",
          borderBottomRightRadius: "4px",
          borderLeft: "none",
          _checked: {
            borderLeft: "2px",
          },
        },
      }}
    >
      <input {...input} />
      <Box
        {...checkbox}
        className="operator-btn"
        display="inline-block"
        cursor="pointer"
        border="2px solid"
        borderColor="primary.700"
        bgColor="white"
        color="primary.700"
        px="10px"
        py="6px"
        _checked={{
          color: "primary.1000",
          bgColor: "primary.300",
          borderColor: "primary.1000",
          boxShadow: "0 3px 4px 0 rgba(0, 0, 0, 0.16)",
        }}
      >
        <Text>{description}</Text>
      </Box>
    </chakra.label>
  );
};

const QuestionType = ({ typeOnChange, typeValue }) => {
  const { getRootProps: typeRootProps, getRadioProps: typeRadioProps } =
    useRadioGroup({
      defaultValue: typeValue,
      onChange: typeOnChange,
    });

  return (
    <Box {...typeRootProps()}>
      <QuestionTypeOperator
        {...typeRadioProps({ value: "radiogroup" })}
        description="單選"
      />
      <QuestionTypeOperator
        {...typeRadioProps({ value: "checkbox" })}
        description="複選"
      />
      <QuestionTypeOperator
        {...typeRadioProps({ value: "text" })}
        description="文字輸入框"
      />
    </Box>
  );
};

export default QuestionType;
