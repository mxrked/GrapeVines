import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AOSMain() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "mobile",
    });
  }, []);

  return "";
}

export default AOSMain;
