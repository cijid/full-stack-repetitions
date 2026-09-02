import { useState, useEffect } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
      });
  }, []);

  return (
    <>
      <div className="page-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Movie Title</th>
              <th>Main Character</th>
              <th>Year Released</th>
            </tr>
          </thead>
          <tbody className="reports-table-body">
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.main_character}</td>
                <td>{movie.year_released}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
