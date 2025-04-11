import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Modal from '../components/ContactUsModal'; // We'll create this component next
import FrequentlyAsked from '../components/FrequentlyAsked';

const Contactus = () => {

    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [formErrors, setFormErrors] = useState({
      fullName: '',
      phone: '',
      email: '',
      hearAbout: '',
      message: ''
    });

    const validateForm = () => {
      let isValid = true;
      const newErrors = {
        fullName: '',
        phone: '',
        email: '',
        hearAbout: '',
        message: ''
      };

      const inputs = form.current.elements;
      
      if (!inputs.fullName.value.trim()) {
        newErrors.fullName = 'Full name is required';
        isValid = false;
      }
      
      if (!inputs.phone.value.trim()) {
        newErrors.phone = 'Phone number is required';
        isValid = false;
      } else if (!/^\d+$/.test(inputs.phone.value)) {
        newErrors.phone = 'Phone number should contain only digits';
        isValid = false;
      }
      
      if (!inputs.email.value.trim()) {
        newErrors.email = 'Email is required';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email.value)) {
        newErrors.email = 'Please enter a valid email address';
        isValid = false;
      }
      
      if (!inputs.hearAbout.value) {
        newErrors.hearAbout = 'This field is required';
        isValid = false;
      }
      
      if (!inputs.message.value.trim()) {
        newErrors.message = 'Please tell us why you want to join';
        isValid = false;
      }

      setFormErrors(newErrors);
      return isValid;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);

      emailjs.sendForm(
        'service_your_service_id', // Replace with your EmailJS service ID
        'template_your_template_id', // Replace with your EmailJS template ID
        form.current,
        'your_user_id' // Replace with your EmailJS user ID
      )
      .then((result) => {
        console.log(result.text);
        setShowModal(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        alert('There was an error sending your message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    };


  return (
    <div>
      <section className="bg-blue-600 h-96">
        <h2 className="text-center text-white font-semibold pt-12 text-xl md:text-4xl">Get in Touch With Us</h2>
      </section>
      <section className="max-w-6xl mx-auto -mt-15 mb-16">
        <div className='flex justify-center -mt-24'>
          <p className=' bg-black p-2 rounded-lg text-white w-fit '>Contact Us</p>
        </div>
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md -mt-2">
          <h2 className="text-xl text-center font-bold text-gray-800 mb-6">Hi There, We will like to know you better</h2>
          
          <form 
            ref={form} 
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={`mt-1 block w-full px-3 py-2 border ${formErrors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {formErrors.fullName && (
                <p className="mt-1 text-sm text-red-600">{formErrors.fullName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`mt-1 block w-full px-3 py-2 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {formErrors.phone && (
                <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`mt-1 block w-full px-3 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
              )}
            </div>

            {/* How did you hear about us */}
            <div>
              <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700">
                How did you hear about us?
              </label>
              <select
                id="hearAbout"
                name="hearAbout"
                className={`mt-1 block w-full px-3 py-2 border ${formErrors.hearAbout ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                defaultValue=""
              >
                <option value="" disabled>Select an option</option>
                <option value="Twitter">Twitter</option>
                <option value="Facebook">Facebook</option>
                <option value="Meetup">Meetup</option>
                <option value="Course Mate">Course Mate</option>
                <option value="Events">Events</option>
              </select>
              {formErrors.hearAbout && (
                <p className="mt-1 text-sm text-red-600">{formErrors.hearAbout}</p>
              )}
            </div>

            {/* Why are you joining us */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Why are you joining us?
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className={`mt-1 block w-full px-3 py-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              ></textarea>
              {formErrors.message && (
                <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
          <Modal show={showModal} onClose={() => setShowModal(false)} />
        </div>
        
      </section>

      <FrequentlyAsked />
    </div>
  )
}

export default Contactus
