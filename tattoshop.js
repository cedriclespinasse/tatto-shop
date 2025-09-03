// pages/index.js
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ink Haven Tattoo Studio</title>
        <meta name="description" content="Ink Haven Tattoo Studio – Bold, Creative, Timeless." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-white font-sans">
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center bg-[url('/tattoo-hero.jpg')] bg-cover bg-center">
          <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">Ink Haven</h1>
          <p className="mt-4 text-xl md:text-2xl drop-shadow-lg">Bold. Creative. Timeless.</p>
          <a href="#portfolio" className="mt-8 px-6 py-3 bg-red-600 rounded-full text-white font-semibold hover:bg-red-700 transition">
            View Portfolio
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 md:px-20 bg-gray-800">
          <h2 className="text-4xl font-bold mb-6 text-center">About Us</h2>
          <p className="max-w-3xl mx-auto text-center text-gray-300">
            At Ink Haven, we turn ideas into permanent art. Our artists specialize in custom designs, from traditional to modern tattoo styles. Every piece is crafted with precision, creativity, and passion.
          </p>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-6 md:px-20 bg-gray-900">
          <h2 className="text-4xl font-bold mb-10 text-center">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img src="/tattoo1.jpg" alt="Tattoo 1" className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold">Dragon Sleeve</h3>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img src="/tattoo2.jpg" alt="Tattoo 2" className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold">Floral Backpiece</h3>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img src="/tattoo3.jpg" alt="Tattoo 3" className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold">Geometric Arm</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 md:px-20 bg-gray-800">
          <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
          <p className="text-center text-gray-300 mb-6">
            Ready to get inked? Reach out and book your session today.
          </p>
          <form className="max-w-2xl mx-auto flex flex-col gap-4">
            <input type="text" placeholder="Name" className="p-3 rounded bg-gray-700 border border-gray-600"/>
            <input type="email" placeholder="Email" className="p-3 rounded bg-gray-700 border border-gray-600"/>
            <textarea placeholder="Message" className="p-3 rounded bg-gray-700 border border-gray-600"></textarea>
            <button type="submit" className="px-6 py-3 bg-red-600 rounded-full text-white font-semibold hover:bg-red-700 transition">
              Send Message
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-gray-400 bg-gray-900">
          &copy; 2025 Ink Haven Tattoo Studio. All rights reserved.
        </footer>
      </main>
    </>
  )
}
