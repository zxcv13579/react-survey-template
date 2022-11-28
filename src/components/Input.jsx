import React from "react";

export const Input = () => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "cards",
    rules: { required: "至少新增一個問題" },
  });

  return <div>Input</div>;
};
