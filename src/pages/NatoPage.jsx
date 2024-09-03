import React from "react";
import { showTranslated } from "../utils/showTranslated";
import nato from "../../public/assets/nato.png"; // Ensure the path is correct

const NatoPage = () => {
  return (
    <div className="lg:w-[1200px] mx-auto mt-20 ">
      {/* Title */}
      <h1 className="text-4xl text-center text-[#CAD1E9] mb-10">
        {showTranslated(
          "NATO NCAGE KOD – FIVE GRUPA",
          "NATO NCAGE CODE – FIVE GROUP"
        )}
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src={nato} // replace with your actual image path
          alt="NATO NCAGE Code - Five Grupa"
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* Description Text */}
      <div className="text-lg leading-relaxed text-white px-5">
        <p>
          {showTranslated(
            `FIVE Grupa posjeduje NATO NCAGE kod, što svjedoči o visokoj
            profesionalnosti i sposobnosti ispunjavanja najstrožih međunarodnih
            standarda. NCAGE (NATO Commercial and Government Entity Code) kod je
            jedinstveni identifikator koji omogućava prepoznavanje firme u NATO
            sistemu nabavki i logistike. Posjedovanje NCAGE koda donosi brojne
            prednosti. To je priznanje tehničke i operativne sposobnosti
            kompanije, što je čini pouzdanim partnerom za NATO i druge međunarodne
            organizacije.`,
            `FIVE Group possesses a NATO NCAGE code, which testifies to its high professionalism and ability to meet the strictest international standards. The NCAGE (NATO Commercial and Government Entity Code) code is a unique identifier that enables the recognition of a company within the NATO procurement and logistics system. Possessing an NCAGE code brings numerous advantages. It is a recognition of the company's technical and operational capabilities, making it a reliable partner for NATO and other international organizations.`
          )}
        </p>
        <br />
        <p>
          {showTranslated(
            `NCAGE kod omogućava kompaniji da učestvuje u NATO nabavkama i
            projektima, čime se otvaraju nove poslovne prilike i tržišta. Ovaj kod
            potvrđuje da FIVE Grupa ispunjava visoke standarde kvaliteta i
            bezbednosti, što olakšava poslovanje na globalnom nivou. FIVE Grupa
            posjedovanjem NCAGE jača svoju reputaciju i konkurentnost na tržištu.
            Time dokazuje svoju posvećenost izvrsnosti, kvalitetu i usklađenosti s
            najvišim standardima industrije. Posjedovanje NCAGE koda jedan je od
            ključnih elemenata u strategiji FIVE Grupe za kontinuirani rast i
            uspjeh na međunarodnom sceni.`,
            `The NCAGE code allows the company to participate in NATO procurements and projects, opening new business opportunities and markets. This code confirms that FIVE Group meets high standards of quality and safety, facilitating operations on a global level. By possessing the NCAGE, FIVE Group strengthens its reputation and competitiveness in the market. It demonstrates its commitment to excellence, quality, and compliance with the highest industry standards. Possessing the NCAGE code is one of the key elements in FIVE Group's strategy for continuous growth and success on the international stage.`
          )}
        </p>
      </div>
    </div>
  );
};

export default NatoPage;
