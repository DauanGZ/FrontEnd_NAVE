import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CreatePost from "./routes/CreatePost";
import ListPosts from "./routes/ListPosts";
import UpdatePost from "./routes/UpdatePost";
import "react-toastify/dist/ReactToastify.css";
import "./styles/style.css";

const App = () => (
  <Router>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <div className="container">
      <Switch>
        <Route exact path="/" component={ListPosts} />
        <Route path="/create" component={CreatePost} />
        <Route path="/update" component={UpdatePost} />
      </Switch>
    </div>
  </Router>
);

export default App;
