const demo = {
  title: "範例表單",
  elements: [
    {
      type: "text",
      name: "name",
      title: "姓名",
      isRequired: true,
      placeHolder: "請輸入姓名",
    },
    {
      type: "text",
      name: "phone",
      title: "手機",
      isRequired: true,
      placeHolder: "請輸入手機",
    },
    {
      type: "text",
      name: "email",
      title: "信箱",
      isRequired: true,
      placeHolder: "請輸入電子信箱",
    },
    {
      type: "radiogroup",
      name: "firstTimeCome",
      title: "請問你是第一次造訪我們網站嗎？",
      isRequired: false,
      choices: [
        {
          value: "Y",
          text: "是",
        },
        {
          value: "N",
          text: "否",
        },
      ],
    },
    {
      type: "checkbox",
      name: "improve",
      title: "請問有哪些地方需要改進呢？",
      isRequired: false,
      choices: [
        {
          value: "1",
          text: "動線不明",
        },
        {
          value: "2",
          text: "標示不清楚",
        },
        {
          value: "3",
          text: "現場服務人員嚴重不足",
        },
        {
          value: "4",
          text: "無",
        },
      ],
    },
  ],
};

export default demo;
