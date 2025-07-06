import './index.css';
 // This imports Tailwind
// If you added Tailwind in a different file, keep that import
import Navbar from "./components/Navbar";
import TextToImage from "./components/TextToImage";


function App() {
  const user = null; // or simulate: { name: "Varda" }

  const handleLoginClick = () => {
    alert("Open login/signup modal here");
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar user={user} onLoginClick={handleLoginClick} />
      <div className="p-6"><TextToImage /></div>
    </div>
  );
}



export default App;
