import News from './components/News';
import Sidebar from './components/Sidebar';

function App() {
    let pageSize = 6;
  // apiKey = process.env.NEWS_API;
  const apiKey = "20379a088b7043b591992ae0b89f7981";
  return (
    <div className="App">
      <Sidebar/>
      <News key="general" pageSize={pageSize} country={"in"} apiKey={apiKey} category={"general"}/>
    </div>
  );
}

export default App;
