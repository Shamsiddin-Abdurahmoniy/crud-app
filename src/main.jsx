// style
import "./index.css";
// react and redux-toolkit
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
// components
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
