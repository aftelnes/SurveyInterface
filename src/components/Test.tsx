import { FC, useState } from "react";
import { Stepper, Button, Group, Notification } from "@mantine/core";

import styles from "./Test.module.css";

import SingleRadioQuestion from "./questions/radio/SingleRadioQuestion";
import MultiCheckboxQuestion from "./questions/radio/MultiCheckboxQuestion";
import SingleSelect from "./questions/singleselect/SingleSelect";
import TextAreaQuestion from "./questions/textarea/TextAreaQuestion";

import questionsData from "../questionsData/questionsData";
import emptyLocalStorage from "../tools/emptyLocalStorage";

const Test: FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const nextStep = () =>
    setActiveStep((current) => (current < 6 ? current + 1 : current));
  const prevStep = () =>
    setActiveStep((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <div className={styles.test}>
        <Stepper
          active={activeStep}
          onStepClick={setActiveStep}
          allowNextStepsSelect={false}
        >
          <Stepper.Step>
            <div className={styles.step}>
              <MultiCheckboxQuestion
                questionHeader="Какие из предложенных языков являются интерпретируемыми?"
                questionStorageName="first"
              />
            </div>
          </Stepper.Step>
          <Stepper.Step>
            <div className={styles.step}>
              <SingleRadioQuestion
                questionHeader="В каком году вышел ES6?"
                questionStorageName="second"
              />
            </div>
          </Stepper.Step>
          <Stepper.Step>
            <div className={styles.step}>
              <SingleRadioQuestion
                questionHeader="Какого принципа нет в SOLID?"
                questionStorageName="third"
              />
            </div>
          </Stepper.Step>
          <Stepper.Step>
            <div className={styles.step}>
              <SingleSelect
                questionHeader="Что самое важное в программисте?"
                questionStorageName="fourth"
                questionData={questionsData.fourthQuestion}
              />
            </div>
          </Stepper.Step>
          <Stepper.Step>
            <div className={styles.step}>
              <SingleSelect
                questionHeader="Какого hook нет по умолчанию в react?"
                questionStorageName="fifth"
                questionData={questionsData.fifthQuestion}
              />
            </div>
          </Stepper.Step>
          <Stepper.Step>
            <div className={styles.step}>
              <TextAreaQuestion
                questionHeader="Почему вы решили выбрать именно нашу компанию?"
                questionStorageName="sixth"
              />
            </div>
          </Stepper.Step>
          <Stepper.Completed>
            <div className={styles.step}>
              <h4>Нажимай "Отправить", если уже на всё ответил!</h4>
            </div>
          </Stepper.Completed>
        </Stepper>

        <Group justify="left" mt="xl">
          {activeStep !== 0 && (
            <Button variant="default" onClick={prevStep}>
              Назад
            </Button>
          )}
          {activeStep !== 6 && <Button onClick={nextStep}>Далее</Button>}
          {activeStep === 6 && (
            <Button
              color="green"
              onClick={(event) => setShowNotification(!showNotification)}
            >
              Отправить
            </Button>
          )}
          {activeStep === 6 && (
            <Button color="yellow" onClick={() => emptyLocalStorage()}>
              Заново
            </Button>
          )}
        </Group>
      </div>
      {showNotification && (
        <Notification
          title="Спасибо, что прошли опрос!"
          withCloseButton={false}
        >
          Его результаты будут отправлены вам на почту
        </Notification>
      )}
    </>
  );
};

export default Test;
