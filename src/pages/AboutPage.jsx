import React, { useContext } from "react";
import VideoBox from "../components/About/VideoBox";
import Supporting from "../components/About/Supporting";
import { showTranslated } from "../utils/showTranslated";
import MyContext from "../context/myContext";
const AboutPage = () => {
  return (
    <div className="lg:w-[1200px] mx-auto">
      <VideoBox />
      <div className="mt-8 flex flex-col lg:flex-row justify-between gap-4">
        {/* Card 1 */}
        <div className="bg-[hsl(238,13%,37%)] p-5 shadow-md rounded-2xl w-full lg:w-[48%]">
          <div className="bg-[#28242a] p-5 rounded-2xl">
            <h2 className="text-2xl uppercase text-[#CAD1E9] font-semibold mb-4">
              {showTranslated("O nama", "About Us")}
            </h2>
            <p className="text-[#CAD1E9]">
              {showTranslated(
                "Five Grupa je specijalizovana za pružanje naprednih tehnoloških rešenja u različitim sferama poput korporativnog, akademskog i bezbjednosog sektora. Naša misija je da svojim klijentima omogućimo pristup efikasnim i inovativnim tehnologijama koje unapređuju njihove operacije i pomažu im da ostvare svoje ciljeve.",
                "Five Group is specialized in providing advanced technological solutions in various sectors such as corporate, academic, and security. Our mission is to provide our clients with access to efficient and innovative technologies that enhance their operations and help them achieve their goals."
              )}
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[hsl(238,13%,37%)] p-5 shadow-md rounded-2xl w-full lg:w-[48%]">
          <div className="bg-[#28242a] p-5 rounded-2xl">
            <h2 className="text-2xl uppercase text-[#CAD1E9] font-semibold mb-4">
              {showTranslated("VIZIJA", "VISION")}
            </h2>
            <p className="text-[#CAD1E9]">
              {showTranslated(
                "Naša vizija je da budemo prepoznati kao lider u oblasti tehnoloških inovacija, sa posebnim fokusom na stvaranje i razvoj mladih kadrova. Verujemo da su mladi stručnjaci ključ za budući napredak i uspjeh. U skladu sa time se trudimo da im pružimo sve potrebne alate i podršku za profesionalni razvoj.",
                "Our vision is to be recognized as a leader in technological innovation, with a particular focus on the creation and development of young talents. We believe that young professionals are key to future progress and success. Accordingly, we strive to provide them with all the necessary tools and support for professional development."
              )}
            </p>
          </div>
        </div>
      </div>
      <Supporting />
    </div>
  );
};

export default AboutPage;
