import { BsSearch } from "react-icons/bs";

function App() {
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto lg:max-w-screen-xl">
        <div className="h-screen flex items-center justify-center p-4 sm:p-0">
          <div className="bg-white w-96 p-4 rounded-md">
            <div className="flex items-center justify-between">
              <input
                type="text"
                placeholder="Enter Your Location"
                className="flex-1 border-b p-1 border-gray-300 focus:outline-none"
              />
              <button>
                <BsSearch className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
