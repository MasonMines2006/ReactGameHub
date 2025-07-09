import React from "react";

const Aside = () => {
  const genres: string[] = ["Action", "Adventure", "Indie", "RPG", "Strategy"];

  const genre_items = genres.map((genre) => (
    <li className="nav-item" key={genre}>
      <div className="display-flex flex-row">
        <a className="logo" href="#">
          <img
            src={"src/assets/" + genre + ".jpg"}
            alt={genre}
            width="40"
            height="30"
          />
        </a>
        <a className="nav-link active" aria-current="page" href="#">
          {genre}
        </a>
      </div>
    </li>
  ));
  const getMessage = () => genre_items;

  return (
    <div>
      <h1>Genres</h1>
      <ul className="nav flex-column">{getMessage()}</ul>
    </div>
  );
};

export default Aside;
