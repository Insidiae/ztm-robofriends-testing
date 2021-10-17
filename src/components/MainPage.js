import React from "react";

import Header from "./Header";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import CardList from "./CardList";

function MainPage({ onSearchChange, searchfield, robots, error, isPending }) {
  const filteredRobots = robots.length
    ? robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
    : [];

  return (
    <div className="tc">
      <Header />
      {/* <button onClick={() => setCount(count + 1)}>Click Me!</button> */}
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        {error ? (
          <>
            <h1>Something went wrong.</h1>
            <p>Error: {error.message}</p>
          </>
        ) : isPending ? (
          <h1>Loading</h1>
        ) : (
          <CardList robots={filteredRobots} />
        )}
      </Scroll>
    </div>
  );
}

export default MainPage;
