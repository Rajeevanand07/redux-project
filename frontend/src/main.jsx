import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/Store.jsx";
import { ToastContainer} from "react-toastify"

createRoot(document.getElementById("root")).render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        progressClassName = "bg-purple-600"
        theme="" toastClassName="bg-gray-700 text-white rounded-lg" />
    </BrowserRouter>
  </Provider>
);
