import { useState, FC, useEffect } from "react";
import { Checkbox } from "@mantine/core";

import styles from "./RadioQuestions.module.css";
import { IRadioQuestion } from "../../../questionsData/questionDataInterface";

interface Props {
  questionStorageName: string;
  questionHeader: string;
}

const MultiCheckboxQuestion: FC<Props> = ({
  questionStorageName,
  questionHeader,
}) => {
  const [data, setData] = useState<IRadioQuestion[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem(questionStorageName);
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, [questionStorageName]);

  useEffect(() => {
    localStorage.setItem(questionStorageName, JSON.stringify(data));
  }, [data]);

  const handleClick = (index: number) => {
    const updatedData = data.map((item, i) => {
      if (i === index) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <>
      <h4>{questionHeader}</h4>
      {data.map((item, index) => (
        <Checkbox
          className={styles.radio}
          checked={item.selected}
          label={item.label}
          onClick={() => handleClick(index)}
        />
      ))}
    </>
  );
};

export default MultiCheckboxQuestion;
