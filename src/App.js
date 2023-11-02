import "./App.css";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Logo></Logo>
    {/* <ImageLinkForm></ImageLinkForm>
    <FaceRecognition></FaceRecognition> */}
    </div>
  );
}

export default App;
