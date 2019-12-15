import React from "react";
import "./App.css";
// import PersonList from "./components/PersonList";
const App = () => {
  return <PersonList />;
};

const PersonList = () => {
  const people = [
    {
      name: "steve job",
      age: 64,
      job: "founder"
    },
    {
      name: "mazk",
      age: 36,
      job: "coder"
    },
    {
      name: "peter thiel",
      age: 'unknown',
      job: "investor"
    }
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]} />
      <Person person={people[2]}>something about peter thiel</Person>
    </section>
  );
};

const Person = props => {
  const { name, job, age } = props.person;
  const { children } = props;
  const url =
    "data:image/jpeg;base64,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";
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>name : {name}</h4>
        <h4>job : {job}</h4>
        <h4>age : {age}</h4>
        {children}
      </div>
    </div>
  );
};
export default App;