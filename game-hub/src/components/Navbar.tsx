import { useState } from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/GameHub Logo.webp";

interface Navbar {
  searchContent: string;
  check: Boolean;
}

const Navbar = () => {
  const handleSubmit = () => {
    console.log("submitted!");
  };

  const [searchInfo, setSearchInfo] = useState("");
  const [check, setCheck] = useState(true);

  return (
    <div>
      <HStack>
        <Image src={logo} boxSize="60px"></Image>
        <Text> NavBar</Text>
      </HStack>
      {/*
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="logo" href="#">
            <img
              src="src/assets/GameHub Logo.webp"
              alt="logo"
              width="50"
              height="50"
            />
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              onClick={handleSubmit}
              type="submit"
            >
              Search
            </button>
          </form>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              DarkMode
            </label>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;
