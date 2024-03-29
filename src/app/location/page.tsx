"use client";
import { Card } from "@/components/Card";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingPage from "../loading";

export default function LocationPage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    if (search) {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${search}`
      )
        .then((response) => response.json())
        .then((json) => {
          setLoading(false);
          setData(json);
        });
    }
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return <Card data={data} />;
}
