import { useCallback, useContext } from "react";
import "survey-react/defaultV2.css";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import { SurveyContext } from "../context/SurveyContext";

Survey.StylesManager.applyTheme("defaultV2");

const surveyJson = {
  elements: [
    {
      name: "FirstName",
      title: "Enter your first name:",
      type: "text",
    },
    {
      name: "LastName",
      title: "Enter your last name:",
      type: "text",
    },
  ],
};

function Result() {
  const { data } = useContext(SurveyContext);

  const survey = new Survey.Model(data);
  survey.focusFirstQuestionAutomatic = false;

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey.Survey model={survey} />;
}

export default Result;
