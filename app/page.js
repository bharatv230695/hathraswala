"use client"
export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50 text-amber-900 px-6 py-10 sm:px-10 font-sans">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold">Hathras Wala Hing</h1>
        <p className="mt-4 text-lg text-amber-700">Pure. Authentic. Aromatic.</p>
      </header>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative w-full h-96">
          <img
            src="https://picsum.photos/200/300"
            alt="Hing Bottle"
            layout="fill"
            objectFit="contain"
            className="rounded-xl shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✔</span>
              100% Natural and Additive-Free
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✔</span>
              Sourced from Local Farmers of Hathras
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✔</span>
              Trusted by Thousands Across India
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-20 text-center">
        <h2 className="text-2xl font-semibold mb-6">Our Bestsellers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["50g Premium Hing", "100g Classic Hing", "150g Family Pack"].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="bg-yellow-100 h-40 mb-4 rounded"></div>
              <h3 className="text-lg font-semibold mb-2">{item}</h3>
              <p className="text-sm text-amber-700">From ₹{index === 0 ? 299 : index === 1 ? 499 : 699}</p>
              <button className="mt-4 px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800">Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-6">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {[
            "The aroma is unmatched! Reminds me of home.",
            "Excellent packaging and timely delivery.",
            "Totally worth the price. Love the flavor!"
          ].map((review, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow">
              <div className="flex gap-1 text-yellow-500 mb-2">
                {Array(5).fill("★").map((star, j) => <span key={j}>{star}</span>)}
              </div>
              <p className="text-gray-700">{review}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-gray-600">
        © 2025 Hathras Wala Hing. All rights reserved.
      </footer>
    </div>
  );
}
