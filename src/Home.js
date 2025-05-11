export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-pink-50 text-pink-800">
        {/* Top Bar */}
        <div className="bg-pink-700 text-white text-sm px-4 py-2 flex justify-between">
            <span>📍 123 Main St, Brooklyn</span>
            <span>📞 (718) 555-1234</span>
        </div>
    
        {/* Navbar */}
        <nav className="bg-pink-100 shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
            <h1 className="text-2xl font-extrabold text-pink-700 tracking-wide">
            Glow & Go
            </h1>
            <ul className="flex gap-6 font-semibold">
            <li><a href="#" className="hover:text-pink-500">Home</a></li>
            <li><a href="#" className="hover:text-pink-500">About</a></li>
            <li><a href="#" className="hover:text-pink-500">Services</a></li>
            <li><a href="#" className="hover:text-pink-500">Contact</a></li>
            </ul>
        </nav>
    
        {/* Hero */}
        <header className="bg-pink-200 py-20 px-6 text-center">
            <h2 className="text-5xl font-extrabold mb-4">Feel Radiant Every Day</h2>
            <p className="text-lg max-w-xl mx-auto">
            Your trusted destination for beauty, self-care, and wellness in the heart of Brooklyn.
            </p>
            <div className="mt-8">
            <a href="#" className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition">
                Shop Now
            </a>
            </div>
        </header>

        {/* About Section */}
        <section className="bg-pink-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-4">About Glow & Go</h2>
        <p className="max-w-2xl mx-auto text-pink-800 text-lg leading-relaxed">
            At Glow & Go, we’re more than a beauty store — we’re a self-care destination.
            Located in Brooklyn, we’re proud to offer curated beauty supplies and wellness essentials with a commitment to eco-conscious values and community empowerment.
        </p>
        </section>

        {/* Services Section */}
        <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-6">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto text-pink-800 text-left">
            <div className="bg-pink-50 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">✨ Premium Beauty Supplies</h3>
            <p>Top-tier skincare, haircare, and cosmetics selected just for you.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">🌿 Eco-Friendly Packaging</h3>
            <p>All our products are packed with love — and the environment — in mind.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">🤝 Local Vendor Shelf Space</h3>
            <p>We showcase and sell products made by local beauty creators.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">🛡️ Safe & Hygienic Environment</h3>
            <p>Security, cleanliness, and professionalism in every corner.</p>
            </div>
        </div>
        </section>

        {/* Contact Section */}
        <section className="bg-pink-200 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-800 mb-4">Get in Touch</h2>
        <div className="text-pink-900 text-lg space-y-2">
            <p><strong>📍 Address:</strong> 123 Main Street, Brooklyn, NY 11201</p>
            <p><strong>📞 Phone:</strong> (718) 555-1234</p>
            <p><strong>📠 Fax:</strong> (718) 555-5678</p>
            <p><strong>📧 Email:</strong> contact@glowandgobeauty.com</p>
        </div>
        </section>

        {/* Social Section */}
        <section className="bg-pink-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-4">Follow Our Glow</h2>
        <p className="text-pink-800 text-lg">
            Stay radiant and connected — find us on <span className="font-semibold">Instagram</span>, <span className="font-semibold">TikTok</span>, and <span className="font-semibold">Google Business</span> for the latest promotions and beauty tips!
        </p>
        </section>

    
        {/* Footer */}
        <footer className="bg-pink-700 text-white mt-auto py-6 px-4 text-center">
            <p className="mb-2">© 2025 Glow & Go Beauty Supply · All rights reserved.</p>
            <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">TikTok</a>
            <a href="#" className="hover:underline">Contact Us</a>
            </div>
        </footer>
        </div>
    );
}
  

