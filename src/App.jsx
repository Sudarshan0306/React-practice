import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import LocalStorageHookTest from "./components/LocalStorageHookTest";
import UserList from "./components/UserList";
import WithAuth from "./components/WithAuth";
import CounterProvider from "./contexts/counterContext";
import { useEffect } from "react";
import Toggle from "./components/Toggle";
import ExpensiveComponent from "./components/ExpensiveComp";
import CallbackExample from "./components/CallbackExample";
import { useCallback } from "react";
import { lazy } from "react";
import { Suspense } from "react";
import TableWithPagination from "./components/TableWithPagination";
// import About from "./components/About";

const About = lazy(() => import("./components/About"));

const sampleData = [
  { id: 1, name: "John", age: 28, role: "Developer" },
  { id: 2, name: "Jane", age: 32, role: "Designer" },
  { id: 3, name: "Tom", age: 25, role: "Tester" },
  { id: 4, name: "Emma", age: 40, role: "Manager" },
  { id: 5, name: "Max", age: 35, role: "Developer" },
  { id: 6, name: "Alex", age: 30, role: "Developer" },
];

const columns = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Age", accessor: "age" },
  { header: "Role", accessor: "role" },
];
const UserListWithLoading = WithAuth(UserList);
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [count, setCount] = useState(0);

  const [text, setText] = useState("");

  const handleSubmit = useCallback(() => {
    console.log("Submitted:", text);
  }, [text]);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setUsers(["Alice", "Bob", "Charlie"]);
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className="App">
        <LocalStorageHookTest />
        <CounterProvider>
          <Counter />
        </CounterProvider>
        <UserListWithLoading isLoading={loading} users={users} />
        <Toggle>
          {({ on, handleToggle }) => (
            <div>
              <button onClick={handleToggle}>
                {on ? "Hide" : "Show"} Message
              </button>
              {on && <p>Hello, this is a toggleable message!</p>}
            </div>
          )}
        </Toggle>
        <ExpensiveComponent />

        <div>
          <h2>Count: {count}</h2>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <CallbackExample handleClick={handleClick} />
        </div>
        <div className="">
          <h3>Callback with dependency</h3>
          <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <h1>Lazy Loading Example</h1>
          <About />
        </Suspense>
        <TableWithPagination
          data={sampleData}
          columns={columns}
          rowsPerPage={3}
        />
      </div>
    </>
  );
}

export default App;
