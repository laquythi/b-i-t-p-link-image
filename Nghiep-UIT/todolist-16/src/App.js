import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false
    };
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks
      });
    }
  }
  onGenerateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: "hoc lap trinh",
        status: true
      },
      {
        id: this.generateID(),
        name: "choi game",
        status: false
      },
      {
        id: this.generateID(),
        name: "code ReactJS",
        status: true
      },
      {
        id: this.generateID(),
        name: "code visual basic",
        status: false
      },
      {
        id: this.generateID(),
        name: "code ReactJS",
        status: true
      }
    ];
    this.setState({
      tasks: tasks
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  generateID() {
    return (
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4()
    );
  }
  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  };
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false 
    });
  };
  onSubmit = (data) => {
    var { tasks } = this.state;
    data.id = this.generateID();
    tasks.push(data);
    this.setState({
      tasks : tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
  };
  render() {
    var { tasks, isDisplayForm } = this.state; // var tasks = this.state.tasks; var isDisplayForm = this.state.isDisplayForm;
    var elmTaskForm = isDisplayForm ? (
      <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm} />
    ) : (
      ""
    ); //isDisplayForm === true ? <TaskForm/> : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={
              isDisplayForm === true
                ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                : ""
            }
          >
            {elmTaskForm}
          </div>
          <div
            className={
              isDisplayForm === true
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary ml-5"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-5">Thêm Công Việc</span>
            </button>
            <button
              type="button"
              className="btn btn-warning ml-5"
              onClick={this.onGenerateData}
            >
              <span className="fa fa-plus mr-5">Generate Data</span>
            </button>
            <div className="row mt-15">
              <Control />
            </div>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks={tasks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
