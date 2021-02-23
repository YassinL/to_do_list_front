import React, { useState } from "react";

export default function OpenDiv() {
  const [showResults, setShowResults] = useState(false);
  const [open, setOpen] = useState(false);

  const onClick = () => setShowResults(true);
  return (
    <div>
      <input type="submit" value="Search" onClick={onClick} />
      {showResults ? <Results /> : null}
    </div>
  );
}

const Results = () => (
  <div id="results" className="search-results">
    Some Results
  </div>
);
