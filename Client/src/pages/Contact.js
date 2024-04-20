import React from 'react';

function ContactUs() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="mr-16 hidden lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 790 563" fill="none">
          {/* SVG content goes here */}
        </svg>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full border-2 border-black">
        <h1 className="text-center text-4xl font-bold mb-4 text-gray-800">Talk to Us</h1>
        <form>
          <div className="relative mb-4">
            <input type="text" id="formName" className="form-input px-10 py-3 rounded-full w-full" placeholder="Name" />
            <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0 2c3.313 0 6-2.687 6-6s-2.687-6-6-6-6 2.687-6 6 2.687 6 6 6zm0 2c-3.313 0-6 2.687-6 6h12c0-3.313-2.687-6-6-6z" />
            </svg>
          </div>
          <div className="relative mb-4">
            <input type="email" id="formEmail" className="form-input px-10 py-3 rounded-full w-full" placeholder="E-mail" />
            <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a3 3 0 0 0 3.22 0L22 8M3 8v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8m-2 0l-8 5.3L3 8" />
            </svg>
          </div>
          <div className="mb-4">
            <textarea id="formMessage" className="form-input px-4 py-3 rounded-lg w-full" rows="4" placeholder="Message"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn-primary px-12 py-2 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 focus:outline-none">Send message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
