import { useForm } from "react-hook-form";

const QuestionGenerator = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cards: [],
    },
  });
  return (
    <div>
      QuestionGenerator<test-component>dds</test-component>
    </div>
  );
};

export default QuestionGenerator;
