export default function Home() {
    return (
      <main className="px-6 py-12 max-w-5xl mx-auto space-y-16">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-5xl font-bold text-pink-600 mb-4">Glow & Go</h1>
          <p className="text-lg text-gray-600">
            Beauty Supply & Self-Care Studio in Brooklyn, NY
          </p>
        </section>
  
        {/* About */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Glow & Go is your trusted source for high-quality beauty supplies and wellness products.
            Located in the heart of Brooklyn, we serve our local community with curated items,
            friendly service, and a strong commitment to self-care and sustainability.
          </p>
        </section>
  
        {/* Services */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Wide selection of beauty and skincare products</li>
            <li>Eco-friendly bags and packaging</li>
            <li>Support for local vendors</li>
            <li>Clean, secure, and professionally maintained store</li>
          </ul>
        </section>
  
        {/* Contact Info */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h2>
          <div className="text-gray-700 space-y-1">
            <p><strong>Address:</strong> 123 Main Street, Brooklyn, NY 11201</p>
            <p><strong>Phone:</strong> (718) 555-1234</p>
            <p><strong>Fax:</strong> (718) 555-5678</p>
            <p><strong>Email:</strong> contact@glowandgobeauty.com</p>
          </div>
        </section>
  
        {/* Social */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Follow Us</h2>
          <p className="text-gray-700">
            Check out our latest updates on <span className="font-medium">Instagram</span>, <span className="font-medium">TikTok</span>, and our <span className="font-medium">Google Business</span> profile.
          </p>
        </section>
      </main>
    );
  }
  