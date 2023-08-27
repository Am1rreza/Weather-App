"use client";
import { Input } from "@/components/Input";
import { useState } from "react";

export default function Home() {
  const [formValue, setFormValue] = useState("");

  return <Input formValue={formValue} setFormValue={setFormValue} />;
}
