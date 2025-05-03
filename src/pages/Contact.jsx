import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen text-[#8BA48D] ">
      <Header />

      <main className="flex-grow flex flex-col items-center px-4 py-12 font-playfair-sc">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#A26769] mb-10 uppercase tracking-wide">
          Contactez-nous
        </h1>

        <form className="w-full max-w-xl bg-[#F9F3E4] space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-semibold">Nom</label>
              <input
                type="text"
                className="w-full border-2 border-[#8BA48D] bg-[#F9F3E4] rounded px-3 py-2 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-semibold">Prénom</label>
              <input
                type="text"
                className="w-full border-2 border-[#8BA48D] bg-[#F9F3E4] rounded px-3 py-2 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Adresse email</label>
            <input
              type="email"
              className="w-full border-2 border-[#8BA48D] bg-[#F9F3E4] rounded px-3 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Téléphone (facultatif)</label>
            <input
              type="tel"
              className="w-full border-2 border-[#8BA48D] bg-[#F9F3E4] rounded px-3 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Message :</label>
            <textarea
              rows="5"
              className="w-full border-2 border-[#8BA48D] bg-[#F9F3E4] rounded px-3 py-2 focus:outline-none resize-none"
            ></textarea>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#A26769] text-white px-6 py-2 rounded hover:opacity-90"
            >
              Envoyer
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
