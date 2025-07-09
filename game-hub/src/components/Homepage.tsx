import React from "react";

const Homepage = () => {
  const platforms: string[] = ["PC", "Playstation", "Xbox", "iOS"];
  const filters: string[] = ["Relevance", "Date Added", "Name", "Release Date"];

  const platforms_map = platforms.map((platform) => (
    <p>
      <li key={platform}>
        <a className="dropdown-item" href="#">
          {platform}
        </a>
      </li>
    </p>
  ));
  const filters_map = filters.map((platform) => (
    <p>
      <li key={platform}>
        <a className="dropdown-item" href="#">
          {platform}
        </a>
      </li>
    </p>
  ));

  const platformMessage = () => platforms_map;
  const sortMessage = () => filters_map;

  return (
    <div>
      <h1>Homepage</h1>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu">{platformMessage()}</ul>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu">{sortMessage()}</ul>
      </div>
    </div>
  );
};

export default Homepage;
