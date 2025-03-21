
const Contactus = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-500 to-blue-300 text-white py-16 md:py-24 text-center relative">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Get in Touch <br /> With Us</h1>
        <button className="bg-black text-white py-2 px-6 md:py-3 md:px-8 rounded-full hover:opacity-80 transition">CONTACT US</button>
      </section>

      {/* Contact Form Card */}
      <section className="flex justify-center px-4 -mt-16 md:-mt-20 relative z-10">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-xl">
          <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Bibendum amet at molestie mattis.</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full name</label>
              <input type="text" placeholder="Placeholder" className="w-full border p-2 md:p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" placeholder="Placeholder" className="w-full border p-2 md:p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input type="tel" placeholder="Placeholder" className="w-full border p-2 md:p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium">How did you hear about us?</label>
              <select className="w-full border p-2 md:p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Placeholder</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Why are you reaching?</label>
              <input type="text" placeholder="Placeholder" className="w-full border p-2 md:p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <button type="submit" className="bg-pink-500 text-white py-2 md:py-3 px-5 md:px-6 rounded-full w-full hover:bg-pink-600 transition">Submit</button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-pink-100 py-12 md:py-20 px-4">
        <h2 className="text-sm uppercase text-center mb-2 tracking-widest text-gray-600">Frequently Asked Questions</h2>
        <h3 className="text-xl md:text-2xl font-bold text-center mb-8">Bibendum amet at molestie mattis.</h3>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            "Who should use the app?",
            "What is included with my subscription?",
            "How do I get paid?",
            "Is my personal information safe?",
            "How can we get in touch?",
          ].map((question, idx) => (
            <details key={idx} className="border p-3 md:p-4 rounded bg-white">
              <summary className="cursor-pointer font-medium">{question}</summary>
              <p className="mt-2 text-sm text-gray-600">Placeholder answer.</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contactus;

