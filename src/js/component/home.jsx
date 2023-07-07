
import React, {useState} from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faTrash
} from "@fortawesome/free-solid-svg-icons";
//create your first component
const Home = () => {
    const [ inputValue , setInputValue ] = useState ("");
    const [ todos , setTodos ] = useState ([]);
    return (
        <div className="container">
            <h1>todos</h1>
            <ul>
                <li>
                    <input 
                    type="text" 
                    onChange={(e)=> setInputValue(e.target.value)}
                    value={inputValue} 
                    onKeyDown ={(e) => {
                        if (e.key === "Enter") {
                    setTodos([...todos,inputValue]);
                    setInputValue("");
                        }
                        }}
                    placeholder="What do you need to do?"></input>
                    </li>
                {todos.length ? todos.map ((item, index) => (
                <li>
                {item}{" "}
                <FontAwesomeIcon
              className="trashIcon" 
              onClick = {() => {
                let newTodos= todos.filter(
                    (item, currentIndex) =>
                    index != currentIndex)
                    console.log("new todos", newTodos)
                setTodos(newTodos)
                    }
                }
              icon={faTrash}
            ></FontAwesomeIcon>
                    </li>
                )): null}
            </ul>
            <div>{todos.length} Tasks</div>
        </div>
    );
};
export default Home;