import { useContext, useReducer } from "react";
import styles from "./style.module.scss";
import { UserContext } from "../../contexts/user";

const initialState = {
  name: "",
  text: "",
  rating: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_TEXT":
      return { ...state, text: action.payload };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export const ReviewForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [{ user }] = useContext(UserContext); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", state.name);
    console.log("Text:", state.text);
    console.log("Rating:", state.rating);
  };

  return (
    <>  
    {user ? ( <form className={styles.form} onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input
      type="text"
      name="name"
      id="name"
      value={user}
      onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
    />

    <label htmlFor="text">Text</label>
    <textarea
      type="text"
      name="text"
      id="text"
      value={state.text}
      onChange={(e) => dispatch({ type: "SET_TEXT", payload: e.target.value })}
    />

    <label htmlFor="rating">Rating</label>
    <input
      type="number"
      min={1}
      max={5}
      name="rating"
      id="rating"
      value={state.rating}
      onChange={(e) => dispatch({ type: "SET_RATING", payload: e.target.value })}
    />

    <button type="submit">Submit</button>
  </form>): ( <div>Please Log In</div> )}
   
  </>
  
  );
};
