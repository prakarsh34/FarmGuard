import React from 'react';

// --- SVG Icons ---
const MissionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const VisionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const TeamMember = ({ name, role, imageUrl, bio }: { name: string, role: string, imageUrl: string, bio: string }) => (
    <div className="text-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src={imageUrl} alt={name} />
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-green-600 font-semibold">{role}</p>
        <p className="text-gray-600 mt-2 text-sm">{bio}</p>
    </div>
);


const AboutUs: React.FC = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">Empowering the Roots of Our Nation</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto px-4">
            FarmGuard is dedicated to bringing cutting-edge technology to the heart of agriculture, ensuring a sustainable and prosperous future for every farmer.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            Born from a deep respect for the agricultural community and a passion for technology, FarmGuard started as a small project in Kattankulathur, Tamil Nadu. We saw firsthand the challenges farmers faced—unpredictable weather, depleting resources, and the constant pressure to increase yields.
          </p>
          <p>
            We believed that technology, when made accessible and intuitive, could be a powerful ally. Our goal was to create a system that didn't just present data, but provided clear, actionable insights that could make a real difference in the field. From a simple weather alert system, FarmGuard has grown into a comprehensive decision support platform, but our core mission remains the same: to serve the farmer.
          </p>
        </div>
      </section>

       {/* Mission and Vision */}
       <section className="bg-gray-50 py-20">
           <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <MissionIcon />
                            <h3 className="text-3xl font-bold ml-4">Our Mission</h3>
                        </div>
                        <p className="text-lg text-gray-700">
                            To empower farmers with precise, AI-driven insights and user-friendly tools that optimize resource usage, enhance crop health, and maximize profitability, fostering a more sustainable agricultural ecosystem.
                        </p>
                    </div>
                     <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <VisionIcon />
                            <h3 className="text-3xl font-bold ml-4">Our Vision</h3>
                        </div>
                        <p className="text-lg text-gray-700">
                           To be the most trusted digital companion for farmers globally, creating a future where every farming decision is backed by intelligent data, leading to a food-secure and environmentally balanced world.
                        </p>
                    </div>
                </div>
           </div>
       </section>

      {/* Meet the Team Section */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
                name="Anishka Pradeep"
                role="AI Developer"
                imageUrl="https://placehold.co/200x200/a7f3d0/14532d?text=AS"
                bio="Anishka Pradeep is Computer Science Sophomore working towards the betterment of Society"
            />
             <TeamMember 
                name="Mink"
                role="Full Stack Developer"
                imageUrl="https://placehold.co/200x200/a7f3d0/14532d?text=MI"
                bio="Mink, a Computer Science enthusiast who believes in Hardwork, Honesty and Integrity."
            />
             <TeamMember 
                name="Shivali Upadhyay"
                role="Lead Software Engineer"
                imageUrl="https://placehold.co/200x200/a7f3d0/14532d?text=SP"
                bio="A Computer Science strategist, who works practically and believes on foundational values."
            />
        </div>
      </section>

       {/* Call to Action Section */}
       <section className="bg-green-600 text-white text-center py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4">Join Us on Our Mission</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Whether you're a farmer, an agronomist, or a technology enthusiast, we'd love to connect with you. Let's cultivate a better future together.
                </p>
                <a
                    href="/contact"
                    className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                    Contact Us
                </a>
            </div>
        </section>
    </div>
  );
};

export default AboutUs;
