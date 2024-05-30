import { Route, Routes, useLocation } from "react-router-dom";
import Root from "./pages/root";
import Layout from "./containers/layout";
import Modal from "./containers/modal";

const App = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Root />} />
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/recipe/:id" element={<Modal />} />
        </Routes>
      )}
    </>
  );
};

export default App;
