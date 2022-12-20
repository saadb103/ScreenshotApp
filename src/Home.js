import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = () => {
    // preventDefault();

    localStorage.setItem("title", title);
    localStorage.setItem("url", url);

    navigate('/report');
  };

//   useEffect(() => {
//     console.log(title, url, rememberMe);
//   })

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Title:{" "}
        <input
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Url:{" "}
        <input
          name="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
      </label>
      <label>
        <input
          name="rememberMe"
          checked={rememberMe}
          onChange={(event) => setRememberMe(event.target.checked)}
          type="checkbox"
        />{" "}
        Remember me
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Home;
