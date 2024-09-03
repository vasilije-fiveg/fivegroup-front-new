import React from "react";

import blogimg from "../../public/assets/nato.png";
const SingleBlog = () => {
  return (
    <div className="lg:w-[1200px] mx-auto mt-20 text-[#CAD1E9]">
      {/* Blog Title */}
      <h1 className="text-3xl text-white mb-8 leading-snug">
        FIVE GRUPA PREZENTOVALA NAPREDNA TEHNOLOŠKA RJEŠENJA ZA POTREBE
        MINISTARSTVA ODBRANE I VOJSKE CRNE GORE
      </h1>

      {/* First Image Section */}
      <div className="mb-10">
        <img
          src={blogimg} // replace with your actual image path
          alt="Blog Image 1"
          className="w-full rounded-lg shadow-md"
        />
        {/* Metadata */}
        <div className="flex justify-center gap-5 text-sm text-gray-400 mt-4">
          <span>24 Jul, 2023</span>
          <span>Kategorija: Sastanak</span>
        </div>
      </div>

      {/* First Paragraph */}
      <div className="text-base leading-relaxed mb-10">
        <p>
          FIVE Grupa prezentovala je svoja napredna tehnološka rješenja za
          potrebe ministarstva odbrane i vojske Crne Gore. Ova tehnologija ima
          veliku primjenu u vojnoj industriji, omogućavajući poboljšanje
          operativnih sposobnosti, smanjenje rizika i povećanje efikasnosti.
        </p>
        <br />
        <p>
          Na prezentaciji su istaknuti ključni tehnički aspekti novih sistema i
          njihove prednosti u odnosu na postojeća rješenja. Poseban akcenat
          stavljen je na integraciju sa već postojećim tehnologijama i lakšu
          primjenu u različitim okruženjima.
        </p>
      </div>

      {/* Second Image Section */}
      <div className="mb-10">
        <img
          src={blogimg} // replace with your actual image path
          alt="Blog Image 2"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Second Paragraph */}
      <div className="text-base leading-relaxed mb-10">
        <p>
          Tehnologija koja je prezentovana uključuje sofisticirane sisteme za
          nadzor, komunikaciju i kontrolu, koje koriste kombinaciju visoke
          tehnologije i inovativnih pristupa za poboljšanje bezbjednosti i
          efikasnosti.
        </p>
        <br />
        <p>
          Osim toga, novi sistemi omogućavaju bržu i efikasniju reakciju na
          potencijalne prijetnje, što je ključno za vojsku i njene operativne
          kapacitete. Ovaj događaj je bio značajan korak ka modernizaciji i
          unaprjeđenju vojnih sposobnosti Crne Gore.
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
