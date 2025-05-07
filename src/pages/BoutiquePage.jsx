import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const products = Array(12).fill({
  name: "Bouteille de vin",
  price: "6€",
  image: "/vin.png",
});

export default function BoutiquePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F3E4]">
      <Header />

      {/* Contenu principal */}
      <main className="flex flex-1 font-playfair-sc">
        {/* Sidebar */}
        <aside className="w-1/6 bg-[#F9F3E4] text-[#5C735F] px-6 py-10 border-r border-[#d9cdb7]">
          <h2 className="font-semibold mb-6">TOUT &gt; VINS</h2>
          <ul className="space-y-4 text-sm tracking-wide">
            <li className="hover:underline cursor-pointer">VINS ROUGES</li>
            <li className="hover:underline cursor-pointer">VINS BLANCS</li>
            <li className="hover:underline cursor-pointer">VINS ROSÉS</li>
          </ul>
        </aside>

        {/* Contenu central */}
        <section className="flex-1 w-5/6">
          {/* Bannière */}
          <div className="w-full h-[180px] overflow-hidden mb-10">
            <img
              src="/Composez votre planche.png"
              alt="Composez votre planche"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Grille produits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-11/12 ml-16 mb-10">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-[#F9F3E4] text-center p-6"
              >
                <div className="w-[200px] h-[200px] mx-auto mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="uppercase text-sm tracking-wide text-[#5C735F]">{product.name}</p>
                <p className="text-[#A26769] font-semibold mt-1">{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
