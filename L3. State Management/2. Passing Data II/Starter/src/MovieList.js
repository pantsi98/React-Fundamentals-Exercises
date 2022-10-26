import React from "react";
import ReactDOM from 'react-dom';

const MovieList = ({movies}) => {
    return (
        <ul>
            {movies.forEach(element => {
                return <li>{element.name}</li>
            })}
        </ul>
    )
}

export default MovieList;