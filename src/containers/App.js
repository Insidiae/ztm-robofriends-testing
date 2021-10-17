import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainPage from "../components/MainPage";
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

  return (
    <MainPage
      onSearchChange={onSearchChange}
      searchfield={searchfield}
      robots={robots}
      isPending={isPending}
      error={error}
    />
  );
}

export default App;
