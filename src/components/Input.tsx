import { BsSearch } from "react-icons/bs";

export function Input() {
  return (
    <form className="flex items-center justify-center h-screen">
      <div className="flex w-full items-start justify-center">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="search-box" className="md:text-lg">
            Search for a Location
          </label>
          <div className="bg-slate-600 md:w-96 rounded-md flex items-center">
            <input
              type="text"
              id="search-box"
              placeholder="e.g. New York"
              className="bg-transparent w-full border-0 outline-none px-4 py-2"
            />
            <button type="submit" className="pr-3 text-xl">
              <BsSearch />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
