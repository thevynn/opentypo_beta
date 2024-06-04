import { Instrument_Serif } from "next/font/google";
import NavigationBar from "@/components/navigation-bar";
import styles from "./page.module.css";
import Landing from "@/components/landing";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Landing />
    </>
  );
}
