import { FC, useState, useEffect } from "react";
import { Textarea } from "@mantine/core";

interface Props {
  questionStorageName: string;
  questionHeader: string;
}

export const TextAreaQuestion: FC<Props> = ({
  questionStorageName,
  questionHeader,
}) => {
  const [value, setValue] = useState<string | null>("");

  useEffect(() => {
    const storedData = localStorage.getItem(questionStorageName);
    if (storedData === null || storedData === "null") {
      setValue(null);
    } else {
      setValue(storedData);
    }
  }, [questionStorageName]);

  useEffect(() => {
    if (value !== null) {
      localStorage.setItem(questionStorageName, value);
    } else {
      localStorage.setItem(questionStorageName, "null");
    }
  }, [value, questionStorageName]);

  return (
    <>
      <h4>{questionHeader}</h4>
      <Textarea
        placeholder="Написать ответ"
        value={value || ""}
        w={400}
        size="sm"
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </>
  );
};

export default TextAreaQuestion;
