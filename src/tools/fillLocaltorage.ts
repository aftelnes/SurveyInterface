import questionsData from "../questionsData/questionsData";

//В случае использования radio опросников, нужно обновлять это функцию таким же образом, как уже написано
const fillLocalStorage = () => {
  if (localStorage.getItem("first") == null) {
    localStorage.setItem("first", JSON.stringify(questionsData.firstQuestion));
  }
  if (localStorage.getItem("second") == null) {
    localStorage.setItem(
      "second",
      JSON.stringify(questionsData.secondQuestion)
    );
  }
  if (localStorage.getItem("third") == null) {
    localStorage.setItem("third", JSON.stringify(questionsData.thirdQuestion));
  }
};

export default fillLocalStorage;
