import { useState } from "react";
import { Form, Link } from "react-router-dom";
import classes from "./home.module.css";
const images = [
  "https://images.pexels.com/photos/6998859/pexels-photo-6998859.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://media.istockphoto.com/id/1265055071/vector/video-call-vector-illustration-with-young-man-student-and-woman-teacher-communicating-online.jpg?s=1024x1024&w=is&k=20&c=K4hpKw-Z7GCkqmXPggsjGiunRIGkzQ2u_SgkM-o0fxs=",
];
const HomePage = () => {
  const [input, setinput] = useState("");
  const inputHandler = (e) => {
    setinput(e.target.value);
  };
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.title}>ankhan</h1>
        <h2 className={classes.intro}>
          <span>Premium </span>
          <span> video calls </span>
          <span> are free now</span>
        </h2>
        <p className={classes.description}>
          Experience seamless and personalized video calls with our one-to-one
          video calling app. Connect with your loved ones like never before!
        </p>
        <div>
          <div className={classes.newRoom}>
            <h3>Create a new Meeting</h3>
          <Link to={`${Date.now()}`}>
            <button className={classes.create}>Create Room</button>
          </Link>
          </div>
          <Form className={classes.form}>
            <h3>Join in an Existing Meeting</h3>
            <label>Enter Room Id:</label>
            <input
              type="text"
              placeholder="enter room id"
              onChange={inputHandler}
            />
            <Link to={input}>
              <button>Join Room</button>
            </Link>
          </Form>
        </div>
      </div>
      <div className={classes.images}>
        <img src={images[1]} alt="ankhan"></img>
      </div>
    </div>
  );
};
export default HomePage;