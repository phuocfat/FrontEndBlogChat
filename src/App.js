import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/index";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout;
            return (
              <Route key={index} path={route.path} element={<Layout />}></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
