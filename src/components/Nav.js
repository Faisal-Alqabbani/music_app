import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
function Nav({ libraryStatus, setLibraryStatus }) {
  return (
    <nav>
      <h1>Relax</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Librar
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}

export default Nav;
