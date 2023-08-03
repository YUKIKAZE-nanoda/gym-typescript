import Navbar from "@/scenes/navbar";
import 
function App() {
  const [selectedPage,setSelectedPage] = useState("home");
  return (
    <div className='app bg-gray-20'>
      <Navbar  selectedPage={selectedPage} />
    </div>
  );
}

export default App
