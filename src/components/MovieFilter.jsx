// import React, { useState } from 'react';

// export const MovieFilter = ({movies, genres, setFilteredMovies}) => {
//   const [valueInput, setValueInput] = useState("");
//   const [valueSelect, setValueSelect] = useState("");

//   const getFilteredMovie = (valueInput, valueSelect) => {
//     return movies.reduce((acc, item) => {
//       if (
//         valueInput && valueSelect &&
//         item.genre && item.genre.length &&
//         item.genre.some(elem => elem.trim() === valueSelect) && 
//         item.title.toLowerCase().includes(valueInput.toLowerCase())
//       ) {
//         acc.push(item);
//       } else if (
//         valueInput && !valueSelect &&
//         item.title.toLowerCase().includes(valueInput.toLowerCase())
//       ) {
//         acc.push(item);
//       } else if (
//         !valueInput && valueSelect &&
//         item.genre && item.genre.length &&
//         item.genre.some(elem => elem.trim() === valueSelect)
//       ) {
//         acc.push(item);
//       } else if (
//         valueSelect === "0" && valueInput 
//       ) {
//         acc.push(item);
//       } 
//       return acc;
//     }, []);
//   };

//   const handleChangeInput = (event) => {
//     const { value } = event.target;
//     setValueInput(value);
//     setFilteredMovies(getFilteredMovie(value, valueSelect));
//   }

//   const handleChangeSelect = (event) => {
//     const { value } = event.target;
//     setValueSelect(value)
//     setFilteredMovies(getFilteredMovie(valueInput, value));
//   };

//   return (
//     <>
//       <div className="filter">
//         <h3>Filter</h3>
//         <select value={valueSelect} onChange={handleChangeSelect}>
//           <option value="0">Выберите жанр</option>
//           {genres.map((item, i) => <option key={i} value={item}> {item} </option>)}
//         </select>
//         <input
//           type="text"
//           name="filter"
//           onChange={handleChangeInput}
//           value={valueInput}
//           placeholder="Введите название фильма"/>
          
//       </div>
//     </>
//   )
// }