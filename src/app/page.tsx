import Header from "@/components/Header";
import Image from "next/image";
import CarsList from "./Cars/page";

export default function Home() {
  return (
    <div>
      <Header/>
      <CarsList/>
    </div>
  );
}
