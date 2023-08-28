import Link from "next/link";
import { BiCurrentLocation } from "react-icons/bi";
import { ImLocation } from "react-icons/im";

interface CardProps {
  data: any;
}

export function Card({ data }: CardProps) {
  return (
    <div className="sm:flex sm:items-center sm:justify-center h-full">
      <div className="flex flex-col gap-y-8 items-center justify-center p-8 sm:flex-row">
        {/* left section */}
        <div className="bg-gradient-to-tl from-slate-900 to-slate-500 rounded-xl sm:translate-x-4">
          <div className="min-w-[18rem] sm:w-96 flex flex-col justify-between gap-y-8 p-6">
            <div className="flex flex-col gap-y-2">
              <h2 className="font-semibold text-3xl">Sunday</h2>
              <span className="text-lg">22 march</span>
              <span className="flex items-center gap-x-1 text-lg">
                <BiCurrentLocation />
                <span>Iran</span>
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span>icon</span>
              <span className="font-bold text-2xl">29 c</span>
              <span className="font-bold text-2xl">sunny</span>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className="bg-[#222831] text-white rounded-xl min-w-[18rem] p-6 flex flex-col justify-between gap-y-8 sm:px-10 sm:py-8 sm:w-96">
          {/* detail section */}
          <div className="text-xl font-semibold flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
              <h2>PRECIPITATION</h2>
              <span>0%</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>HUMIDITY</h2>
              <span>42%</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>WIND</h2>
              <span>3 km/h</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>MAX TEMP</h2>
              <span>3 km/h</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>MIN TEMP</h2>
              <span>3 km/h</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>SUNRISE</h2>
              <span>3 km/h</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>SUNSET</h2>
              <span>3 km/h</span>
            </div>
          </div>
          {/* button */}
          <Link
            href="/"
            className="text-center w-full bg-gray-600 p-2 rounded-md flex items-center justify-center gap-x-2"
          >
            <span>
              <ImLocation className={"text-xl"} />
            </span>
            Change Location
          </Link>
        </div>
      </div>
    </div>
  );
}
