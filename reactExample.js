import ReactDOM from "react-dom";

const students = {
  name: "max",
  age: 17
};

function printStudent(students) {
  return students.age + " " + students.name;
}

const element = <p> this is {printStudent(students)}</p>;

ReactDOM.render(element, document.getElementById("root"));

export default renderStudent;
