import Search from "./components/Search";
import "./index.css";
const App = () => {
  return (
    <>
      <div className="bg-slate-800 h-full p-10 text-center">
        <h1 className=" text-white text-3xl ">
          GitHub User Search Application
        </h1>
        <p className="py-5 text-white ">Search for GitHub profiles here!</p>
        <Search />
      </div>
    </>
  );
};

export default App;
