import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HealthCoachesPage = () => {
  // Function to decode email addresses on click
  const decodeEmail = (encoded: string) => {
    return atob(encoded);
  };

  // Function to handle email click
  const handleEmailClick = (e: React.MouseEvent, encodedEmail: string) => {
    e.preventDefault();
    const email = decodeEmail(encodedEmail);
    window.location.href = `mailto:${email}`;
  };

  // Coaches data with encoded emails
  const coaches = [
    { name: 'Pharmacist Ben - Registered Pharmacist', email: 'UGhhcm1hY2lzdEJlbkBkYWlseXdpdGhkb2MuY29t', certification: 'Registered Pharmacist' },
    { name: 'AJ', email: 'YWpAZGFpbHl3aXRoZG9jLmNvbQ==', certification: 'Certified Wholistic Health Coach' },
    { name: 'Phyllis Anderson', email: 'UGh5bGxpc0BkYWlseXdpdGhkby5jb20=', certification: 'Certified Wholistic Health Coach' },
    { name: 'Keeley B', email: 'a2VlbGV5QGRhaWx5d2l0aGRvYy5jb20=', certification: 'Certified Wholistic Health Coach' },
    { name: 'Sheri Browning', email: 'U2hlcmlAZGFpbHl3aXRoZG9jLmNvbQ==', certification: 'Certified Wholistic Health Coach' },
    { name: 'Becca Dukes - Certified Naturopathic Practitioner', email: 'YmVjY2FAZGFpbHl3aXRoZG9jLmNvbQ==', certification: 'Certified Naturopathic Practitioner' },
    { name: 'Lorna Jones', email: 'bG9ybmFAZGFpbHl3aXRoZG9jLmNvbQ==', certification: 'Certified Wholistic Health Coach' },
    { name: 'Albert Leenderts', email: 'YWxiZXJ0QGRhaWx5d2l0aGRvYy5jb20=', certification: 'Certified Wholistic Health Coach' },
    { name: 'Mary McWhorter', email: 'bWFyeUBkYWlseXdpdGhkby5jb20=', certification: 'Certified Wholistic Health Coach' },
    { name: 'Marilyn Pazera-Spear', email: 'bWFyaWx5bkBkYWlseXdpdGhkby5jb20=', certification: 'Certified Wholistic Health Coach' },
    { name: 'Ruthellen Sanchez', email: 'cnV0aGVsbGVuQGRhaWx5d2l0aGRvYy5jb20=', certification: 'Certified Wholistic Health Coach' },
    { name: 'Coach Rod Wiggins', email: 'cm9kQGRhaWx5d2l0aGRvYy5jb20=', certification: 'Certified Wholistic Health Coach' },
  ];

  return (
    <>
      <Helmet>
        <title>Certified Wholistic Health Coaches | Daily with Doc & Becca</title>
        <meta name="description" content="Connect with our team of certified wholistic health coaches for personalized guidance on your health journey." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tangy-yellow to-glorious-sunset text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Certified Wholistic Health Coaches</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connect with our team of experienced health coaches for personalized guidance on your wellness journey.
          </p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coaches.map((coach, index) => (
                <div key={index} className="bg-blue-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-health-blue">{coach.name}</h3>
                    <div className="mb-4">
                      <span className="inline-block bg-glorious-sunset text-white text-xs px-2 py-1 rounded-full font-semibold">
                        {coach.certification}
                      </span>
                    </div>
                    <button
                      onClick={(e) => handleEmailClick(e, coach.email)}
                      className="inline-flex items-center text-health-blue hover:text-blue-sky font-medium group"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-glorious-sunset group-hover:text-orange-500 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span className="border-b border-transparent group-hover:border-health-blue">
                        Contact {
                          coach.name.includes('Pharmacist Ben') ? 'Ben' :
                          coach.name.includes('Becca Dukes') ? 'Becca' :
                          coach.name.split(' ')[0]
                        }
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-health-blue to-blue-sky text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Health Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our certified coaches are here to support you every step of the way.
          </p>
          <Link 
            to="/resources" 
            className="inline-block bg-white text-health-blue hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors duration-200"
          >
            Back to Resources
          </Link>
        </div>
      </section>
    </>
  );
};

export default HealthCoachesPage;
