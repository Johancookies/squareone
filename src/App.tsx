import { Route, Switch } from "wouter";

import { ProductListPage } from "./pages/ProductListPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";

function App() {
  return (
    <Switch>
      <Route path="/" component={ProductListPage} />
      <Route path="/:id" component={ProductDetailPage} />
    </Switch>
  );
}

export default App;
