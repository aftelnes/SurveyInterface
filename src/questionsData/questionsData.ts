import { IRadioQuestion } from "./questionDataInterface";

const firstQuestion: IRadioQuestion[] = [
  { label: "C++", selected: false },
  { label: "Python", selected: false },
  { label: "Javascript", selected: false },
  { label: "C#", selected: false },
];

const secondQuestion: IRadioQuestion[] = [
  { label: "2016", selected: false },
  { label: "2015", selected: false },
  { label: "2014", selected: false },
];

const thirdQuestion: IRadioQuestion[] = [
  { label: "Open/Closed", selected: false },
  { label: "Don`t Repeat Yourself", selected: false },
  { label: "Liskov Substitution", selected: false },
  { label: "Interface Segregation", selected: false },
];

const fourthQuestion: string[] = [
  "Работоспособность",
  "Усердность",
  "Терппение",
  "Начитанность",
  "Доброта",
  "Честность",
];

const fifthQuestion: string[] = [
  "useEffect",
  "useState",
  "useCallback",
  "useChange",
  "useMemo",
  "useRef",
];

export default {
  firstQuestion,
  secondQuestion,
  thirdQuestion,
  fourthQuestion,
  fifthQuestion,
};
