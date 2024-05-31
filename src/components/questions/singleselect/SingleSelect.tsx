import { FC, useEffect, useState } from "react";
import { Select } from "@mantine/core";

interface Props {
  questionStorageName: string;
  questionHeader: string;
  questionData: string[];
}

const SingleSelect: FC<Props> = ({
  questionStorageName,
  questionHeader,
  questionData,
}) => {
  const [value, setValue] = useState<string | null>("");

  useEffect(() => {
    setValue("");
    const storedData = localStorage.getItem(questionStorageName);
    if (storedData === null) {
      setValue(null);
    } else {
      setValue(JSON.parse(storedData));
    }
  }, [questionStorageName]);

  useEffect(() => {
    if (value !== null) {
      localStorage.setItem(questionStorageName, JSON.stringify(value));
    }
  }, [value, questionStorageName]);

  return (
    <>
      <h4>{questionHeader}</h4>
      <Select
        data={questionData}
        w={300}
        placeholder="Выбрать"
        value={value}
        onChange={setValue}
      />
    </>
  );
};

export default SingleSelect;
