import Link from "next/link";
import { BiCurrentLocation } from "react-icons/bi";
import { ImLocation } from "react-icons/im";

interface CardProps {
  data: any;
}

export function Card({ data }: CardProps) {
  const date = new Date();
  const dayName = date.toLocaleString("en-US", { weekday: "long" });
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  });

  return (
    <div className="sm:flex sm:items-center sm:justify-center h-full">
      <div className="flex flex-col gap-y-8 items-center justify-center p-8 sm:flex-row">
        {/* left section */}
        <div className="bg-gradient-to-tl from-slate-900 to-slate-500 rounded-xl sm:translate-x-4">
          <div className="min-w-[18rem] sm:w-96 flex flex-col justify-between gap-y-8 p-6">
            <div className="flex flex-col gap-y-2">
              <h2 className="font-semibold text-3xl">{dayName}</h2>
              <span className="text-lg">{formattedDate}</span>
              <span className="flex items-center gap-x-1 text-lg">
                <BiCurrentLocation />
                <span>
                  {data.location.name}, {data.location.country}
                </span>
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="font-bold text-2xl">
                {data.current.temp_c} &#8451;
              </span>
              <span className="font-bold text-2xl">
                {data.current.condition.text}
              </span>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className="bg-[#222831] text-white rounded-xl min-w-[18rem] p-6 flex flex-col justify-between gap-y-8 sm:px-10 sm:py-8 sm:w-96">
          {/* detail section */}
          <div className="text-xl font-semibold flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
              <h2>VISIBILITY</h2>
              <span>{data.current.vis_km} KM</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>HUMIDITY</h2>
              <span>{data.current.humidity}%</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>MAX TEMP</h2>
              <span>{data.forecast.forecastday[0].day.maxtemp_c} &#8451;</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>MIN TEMP</h2>
              <span>{data.forecast.forecastday[0].day.mintemp_c} &#8451;</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>SUNRISE</h2>
              <span>{data.forecast.forecastday[0].astro.sunrise}</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>SUNSET</h2>
              <span>{data.forecast.forecastday[0].astro.sunset}</span>
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
