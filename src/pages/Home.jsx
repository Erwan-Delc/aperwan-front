import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-[#F9F3E4] text-[#5C735F]">
            <Header />

            {/* Bannière en pleine largeur */}
            <section className="w-full flex justify-center mt-8">
                <img
                    src="/aperwan-banner.png"
                    alt="Bannière"
                    className="w-[1200px] max-w-full h-auto rounded-xl shadow"
                />
            </section>

            <main className=" px-4 flex flex-col gap-10">
                {/* Cartes */}
                <section className="w-full flex justify-center mt-10">
                    <   div className="w-[1200px] max-w-full flex justify-between gap-6">
                        <img
                            src="/card1.png"
                            alt="Qui sommes-nous ?"
                            className="w-1/3 rounded-xl shadow transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                        <img
                            src="/card2.png"
                            alt="Composez votre planche"
                            className="w-1/3 rounded-xl shadow transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                        <img
                            src="/card3.png"
                            alt="Nos vins"
                            className="w-1/3 rounded-xl shadow transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                    </div>
                </section>


                <section className="w-full flex justify-center mt-1 bg-[#F9F3E4]">
                    <div className="w-[1200px] max-w-full bg-[#8BA48D] text-white rounded-xl p-8 flex flex-col md:flex-row gap-6 shadow">

                        {/* Texte à gauche */}
                        <div className="md:w-1/3 space-y-3">
                            <h2 className="text-xl font-semibold">📍 Où sommes-nous ?</h2>
                            <p>
                                Venez découvrir le goût du terroir chez Aper’wan, dans notre espace convivial à Hasnon.
                            </p>

                            <div>
                                <p className="font-semibold">Adresse :</p>
                                <p>📫 54 allée des Ormes<br />59178 Hasnon, France</p>
                            </div>

                            <div>
                                <p className="font-semibold">Téléphone :</p>
                                <p>📞 +33 7 81 75 64 31</p>
                            </div>

                            <div>
                                <p className="font-semibold">Email :</p>
                                <p>📧 aperwan@gmail.com</p>
                            </div>
                        </div>

                        {/* Carte à droite */}
                        <div className="md:w-2/3 h-[300px] rounded-xl overflow-hidden">
                            <iframe
                                title="Carte Aper'wan"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.5252139375366!2d3.3703502158110157!3d50.35683797946064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2e8be9243a505%3A0x6484b4382769a0f6!2s54%20All%C3%A9e%20des%20Ormes%2C%2059178%20Hasnon!5e0!3m2!1sfr!2sfr!4v1714432130202!5m2!1sfr!2sfr"
                            ></iframe>
                        </div>
                    </div>
                </section>


            </main>

            <Footer />
        </div>
    )
}
