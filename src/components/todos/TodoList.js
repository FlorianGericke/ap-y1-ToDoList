import React, {useEffect} from 'react';
import axios from 'axios';



const TodoList = () => {

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks =  () => {
        // Send GET request to 'books/all' endpoint
        axios
            .get('http://localhost:4001/todo/all')
            .then(response => {
                // Update the books state
                console.log(response.data);
            })
            .catch(error => console.error(`There was an error retrieving the book list: ${error}`));
    };



    return(
        <ul>
            <li>test</li>
        </ul>
    );
};

export default TodoList;
