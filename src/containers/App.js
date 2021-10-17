import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

import { requestRobots, setSearchField } from "../actions";

function App() {
  // const [robots, setRobots] = useState([]);
  // const [searchfield, setSearchfield] = useState("");
  // const [count, setCount] = useState(0); // for demo purposes

  const searchfield = useSelector((state) => state.searchRobots.searchField);
  const robots = useSelector((state) => state.requestRobots.robots);
  const isPending = useSelector((state) => state.requestRobots.isPending);
  const error = useSelector((state) => state.requestRobots.error);

  const dispatch = useDispatch();

  useEffect(() => {
    onRequestRobots(dispatch);
    // console.log(count)
  }, [dispatch]); // if you add count, only run if count changes.

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  const onRequestRobots = (dispatch) => dispatch(requestRobots());

  const filteredRobots = robots.length
    ? robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
    : [];

  return isPending ? (
    <h1>Loading</h1>
  ) : (
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
        ) : (
          <CardList robots={filteredRobots} />
        )}
      </Scroll>
    </div>
  );
}

export default App;
