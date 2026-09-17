import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { useState } from "react";

function Todos() {
    const [todos, setTodos] = useState(null);
    const todoCollRef = collection(db, 'todos');
   
    return (
        <>
            <button onClick={async () => {
                const collData = await getDocs(todoCollRef);
                const todosArray = collData.docs.map(doc => ({id: doc.id, title: doc.data().title}));
                setTodos(todosArray);
                console.log(collData.docs);
            }}> Get Todos </button>
            {todos == null ? <p>Loading...</p> :
                todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
        </>
    );
}

export default Todos;
