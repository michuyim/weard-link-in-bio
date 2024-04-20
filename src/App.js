import PageContainer from "./Components/LandingPage";
import { GlobalStyles } from "./Styles/GlobalStyles";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="body">
        <PageContainer />
      </div>
    </>
  );
}

export default App;
