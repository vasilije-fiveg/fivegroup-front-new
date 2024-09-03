import { useContext } from "react";
import MyContext from "../context/myContext";
export const showTranslated = (original, english) => {
  const { lang } = useContext(MyContext); // Access lang from context

  if (lang === "en") {
    return english;
  } else {
    return original;
  }
};
