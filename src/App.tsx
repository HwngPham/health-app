import { Route } from "wouter";
import { HomePage } from "./pages/homePage/HomePage";
import { RecordPage } from "./pages/recordPage/RecordPage";
import { ColumnPage } from "./pages/columnPage/ColumnPage";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Route path="/" component={HomePage} />
      <Route path="/records" component={RecordPage} />
      <Route path="/columns" component={ColumnPage} />
    </Layout>
  );
}

export default App;
