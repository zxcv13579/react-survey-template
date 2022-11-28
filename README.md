```javascript
{
  blocks: [
    {
      // 問卷題目
      questionTitle: "",
      // 問卷類型
      questionType: "", // radio | radioGroup | text
      // 問卷選項
      options: [
        {
          // 該選項的 name，用於之後為 input name
          name: "",
          // 該選項的文字敘述
          text: "",
        },
      ],
    },
  ];
}
```

操作流程

1. 選擇該題目的類型：單選、複選、純文字框
