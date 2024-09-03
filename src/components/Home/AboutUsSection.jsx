import React from "react";
import CuttedCard from "./CuttedCard";
import eng from "../../../public/eng.json";
import { showTranslated } from "../../utils/showTranslated";
const AboutUsSection = ({ lang }) => {
  return (
    <div className="w-full">
      <h1 className="text-4xl text-center text-[#CAD1E9] mt-20">
        {lang !== "en" ? "O NAMA" : eng.aboutUsUppercase}
      </h1>
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-2 gap-4 p-4 ">
          <CuttedCard
            title={showTranslated("Vojna industrija", eng.militaryIndustry)}
            text={showTranslated(
              "Five Grupa se izdvaja kroz pružanje naprednih tehnoloških rješenja koja značajno unapređuju operativne kapacitete i bezbjednost. Naša ekspertiza obuhvata razvoj i implementaciju sofisticiranih sistema simulacija za vojne vježbe i zaštitu kritične infrastrukture, sa fokusom na najviši nivo sigurnosti i efikasnosti.",
              eng.militaryIndustryDescription
            )}
          />
          <CuttedCard
            title={showTranslated(
              "Informacione Tehnologije (IT)",
              eng.informationTechnology
            )}
            text={showTranslated(
              "U oblasti informacionih tehnologija, naša grupa vodi put u digitalnoj transformaciji poslovanja, pružajući napredna rješenja za optimizaciju poslovnih procesa, razvoj softvera i infrastrukture koja podržava moderno poslovanje.",
              eng.informationTechnologyDescription
            )}
          />
          <CuttedCard
            title={showTranslated(
              "Vještačka Inteligencija (AI)",
              eng.artificialIntelligence
            )}
            text={showTranslated(
              "Vještačka inteligencija i mašinsko učenje koje predstavljaju srž naših tehnoloških napora, uz sve veće mogućnosti, naši timovi koriste i razvijaju sisteme koji unapređuju svakodnevni život, od autonomnih vozila do personalizovanih i komercijalnih rješenja u sferi različitih biznisa.",
              eng.artificialIntelligenceDescription
            )}
          />
          <CuttedCard
            title={showTranslated("3D Design/Gaming", eng["3dDesignGaming"])}
            text={showTranslated(
              "U gejmingu, centar smo zabave i inovacija. Naši timovi kreiraju vrhunske igre koje preobražavaju svijet virtuelne zabave, pružajući iskustva koja inspirišu i angažuju igrače širom svijeta.",
              eng["3dDesignGamingDescription"]
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
