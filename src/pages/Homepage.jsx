import { useState, useRef, useEffect, useContext } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import QuestionBlock from "../components/QuestionBlock";
import { useNavigate } from "react-router-dom";
import { Button, HStack, Input, Stack, Container } from "@chakra-ui/react";
import _cloneDeep from "lodash/cloneDeep";
import { SurveyContext } from "../context/SurveyContext";
import useCustomToast from "../hooks/useCustomToast";
import ErrorText from "../components/ErrorText";

function Homepage() {
  const [showDownloadBtn, setShowDownloadBtn] = useState(false);
  const { setData } = useContext(SurveyContext);
  const toast = useCustomToast();
  const navigate = useNavigate();
  const downloadRef = useRef();
  const {
    setValue,
    watch,
    register,
    getValues,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      elements: [
        {
          title: "",
          type: "radiogroup",
          name: "q1",
          isRequired: true,
          choices: [{}],
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "elements",
    control,
  });

  useEffect(() => {
    fields.forEach((field, index) => {
      setValue(`elements.[${index}].name`, `q${index + 1}`);
    });
  }, [watch("elements")]);

  return (
    <div
      className="App"
      style={{
        width: "100%",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <HStack spacing="16px" p={5}>
        <a
          ref={downloadRef}
          style={{ display: showDownloadBtn ? "block" : "none" }}
        >
          下載
        </a>
        <Button
          onClick={handleSubmit((data) => {
            setShowDownloadBtn(true);
            const cloneData = _cloneDeep(data);
            cloneData.elements.forEach((d) => {
              if (d.type === "text") {
                const { text: placeHolder } = d.choices[0];

                delete d.choices;
                d.placeHolder = placeHolder;
              }
            });
            setData(cloneData);
            // console.log(cloneData);
            navigate("/result");

            // var dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
            //   JSON.stringify(data)
            // )}`;
            // downloadRef.current.setAttribute("href", dataStr);
            // downloadRef.current.setAttribute("download", "surveyData.json");
          })}
        >
          製作
        </Button>
        <Button
          onClick={() => {
            append({
              title: "",
              type: "radiogroup",
              name: "",
              isRequired: true,
              choices: [{}],
            });
            toast.success("新增題目成功");
          }}
        >
          新增題目
        </Button>
      </HStack>
      <Container variant="primary" mb="40px">
        <Input
          {...register("title", { required: "請輸入此表單名稱" })}
          placeholder="未命名表單"
          variant="flushed"
          fontSize="32px"
        />
        <ErrorText message={errors?.title?.message} />
      </Container>
      <Stack spacing={10}>
        {fields.map((field, idx) => (
          <Controller
            key={field.id}
            control={control}
            name={`elements.${idx}`}
            render={({ field, fieldState: { error } }) => (
              <QuestionBlock
                err={error}
                key={field.id}
                idx={idx}
                register={register}
                setValue={setValue}
                getValues={getValues}
                control={control}
                removeBlock={() => remove(idx)}
                {...field}
              />
            )}
          />
        ))}
      </Stack>
    </div>
  );
}

export default Homepage;
