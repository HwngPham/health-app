import { Route } from "wouter";
import { HomePage } from "./pages/homePage/HomePage";
import { RecordPage } from "./pages/recordPage/RecordPage";
import { ColumnPage } from "./pages/columnPage/ColumnPage";

function App() {
  return (
    <>
      <Route path="/" component={HomePage} />
      <Route path="/records" component={RecordPage} />
      <Route path="/columns" component={ColumnPage} />
    </>
  );
}

export default App;
