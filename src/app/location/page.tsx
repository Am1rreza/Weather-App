"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LocationPage() {
  const [data, setData] = useState({});
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    if (search) {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search}`
      )
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, []);

  return <></>;
}
