import React from 'react';import React from 'react';

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

import profileImage from '../assets/p-removebg-preview-Picsart-AiImageEnhancer.png';import profileImage from '../assets/p-removebg-preview-Picsart-AiImageEnhancer.png';



const Hero: React.FC = () => {const Hero: React.FC = () => {

  const scrollToProjects = () => {  const scrollToProjects = () => {

    const element = document.getElementById('projects');    const element = document.getElementById('projects');

    if (element) {    if (element) {

      const yOffset = -80;      const yOffset = -80;

      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });      window.scrollTo({ top: y, behavior: 'smooth' });

    }    }

  };  };



  const downloadResume = () => {  const downloadResume = () => {

    const link = document.createElement('a');    const link = document.createElement('a');

    link.href = '/satya_sarthak_manohari_resume.pdf';    link.href = '/satya_sarthak_manohari_resume.pdf';

    link.download = 'Satya_Sarthak_Manohari_Resume.pdf';    link.download = 'Satya_Sarthak_Manohari_Resume.pdf';

    document.body.appendChild(link);    document.body.appendChild(link);

    link.click();    link.click();

    document.body.removeChild(link);    document.body.removeChild(link);

  };  };



  return (  return (

    <section id="hero" className="min-h-screen relative overflow-hidden">    <section id="hero" className="min-h-screen relative overflow-hidden">

      <div       <div 

        className="absolute inset-0 bg-cover bg-no-repeat bg-center"        className="absolute inset-0 bg-cover bg-no-repeat bg-center"

        style={{        style={{

          backgroundImage: `url(${profileImage})`,          backgroundImage: `url(${profileImage})`,

          backgroundPosition: 'center 20%'          backgroundPosition: 'center 20%'

        }}        }}

      ></div>      ></div>

            

      <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60"></div>      <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60"></div>

            

      <div className="min-h-screen relative z-10 flex items-center">      <div className="min-h-screen relative z-10 flex items-center">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-screen py-20 lg:py-0">          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-screen py-20 lg:py-0">

                        

            {/* Empty columns on desktop for spacing */}            {/* Empty columns on desktop for spacing */}

            <div className="hidden lg:block"></div>            <div className="hidden lg:block"></div>

            <div className="hidden lg:block"></div>            <div className="hidden lg:block"></div>

                        

            {/* Content - spans full width on mobile, right column on desktop */}            {/* Content - spans full width on mobile, right column on desktop */}

            <div className="col-span-1 text-center lg:text-left">            <div className="col-span-1 text-center lg:text-left">

              <div className="animate-fade-in-up space-y-6">              <div className="animate-fade-in-up space-y-6">

                <div className="mb-8">                <div className="mb-8">

                  <h1 className="relative mb-6">                  <h1 className="relative mb-6">

                    <span className="block text-lg sm:text-xl md:text-2xl text-white font-light mb-4">                    <span className="block text-lg sm:text-xl md:text-2xl text-white font-light mb-4">

                      Hello, I'm                      Hello, I'm

                    </span>                    </span>

                                        

                    <div className="space-y-3">                    <div className="space-y-3">

                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-2xl">                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-2xl">

                        Satya Sarthak Manohari                        Satya Sarthak Manohari

                      </div>                      </div>

                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-blue-300 drop-shadow-lg">                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-blue-300 drop-shadow-lg">

                        Cybersecurity Enthusiast                        Cybersecurity Enthusiast

                      </div>                      </div>

                    </div>                    </div>

                                        

                    <div className="relative mt-6">                    <div className="relative mt-6">

                      <div className="w-20 h-0.5 bg-white mx-auto lg:mx-0"></div>                      <div className="w-20 h-0.5 bg-white mx-auto lg:mx-0"></div>

                    </div>                    </div>

                  </h1>                  </h1>

                </div>                

                                                  </h1>

                <p className="text-base sm:text-lg md:text-xl text-white font-medium drop-shadow-lg">                </div>

                  <span className="text-blue-200 font-semibold">BTech Student</span> •                 

                  <span className="text-white font-semibold"> Learner and Performer</span>                <p className="text-base sm:text-lg md:text-xl text-white font-medium drop-shadow-lg">

                </p>                  <span className="text-blue-200 font-semibold">BTech Student</span> • 

                  <span className="text-white font-semibold"> Learner and Performer</span>

                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500 bg-opacity-20 backdrop-blur-sm border border-green-400 border-opacity-30">                </p>

                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>

                  <span className="text-xs sm:text-sm font-bold text-green-100">🏆 TryHackMe Top 10%</span>                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500 bg-opacity-20 backdrop-blur-sm border border-green-400 border-opacity-30">

                </div>                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>

                                  <span className="text-xs sm:text-sm font-bold text-green-100">🏆 TryHackMe Top 10%</span>

                <p className="text-sm sm:text-base text-white text-opacity-90 leading-relaxed max-w-md mx-auto lg:mx-0 drop-shadow-lg">                </div>

                  Passionate about cybersecurity and technology innovation.                 

                  Exploring advanced penetration testing and network security.                <p className="text-sm sm:text-base text-white text-opacity-90 leading-relaxed max-w-md mx-auto lg:mx-0 drop-shadow-lg">

                </p>                  Passionate about cybersecurity and technology innovation. 

                  Exploring advanced penetration testing and network security.

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-8">                </p>

                  <button

                    onClick={scrollToProjects}                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-8">

                    className="w-full sm:w-auto bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"                  <button

                  >                    onClick={scrollToProjects}

                    View My Work                    className="w-full sm:w-auto bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"

                    <ArrowDown size={16} />                  >

                  </button>                    View My Work

                  <button                     <ArrowDown size={16} />

                    onClick={downloadResume}                  </button>

                    className="w-full sm:w-auto bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"                  <button 

                  >                    onClick={downloadResume}

                    Download Resume                    className="w-full sm:w-auto bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"

                    <ArrowDown size={16} />                  >

                  </button>                    Download Resume

                </div>                    <ArrowDown size={16} />

                  </button>

                <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-6">                </div>

                  <a

                    href="https://github.com"                <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-6">

                    target="_blank"                  <a

                    rel="noopener noreferrer"                    href="https://github.com"

                    className="text-white hover:text-blue-200 transition-colors duration-300 transform hover:scale-110 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-2 sm:p-3 hover:bg-opacity-20"                    target="_blank"

                    aria-label="GitHub"                    rel="noopener noreferrer"

                  >                    className="text-white hover:text-blue-200 transition-colors duration-300 transform hover:scale-110 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-2 sm:p-3 hover:bg-opacity-20"

                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />                    aria-label="GitHub"

                  </a>                  >

                  <a                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />

                    href="https://www.linkedin.com/in/satya-sarthak-manohari-b2a609297"                  </a>

                    target="_blank"                  <a

                    rel="noopener noreferrer"                    href="https://www.linkedin.com/in/satya-sarthak-manohari-b2a609297"

                    className="text-white hover:text-blue-200 transition-colors duration-300 transform hover:scale-110 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-2 sm:p-3 hover:bg-opacity-20"                    target="_blank"

                    aria-label="LinkedIn"                    rel="noopener noreferrer"

                  >                    className="text-white hover:text-blue-200 transition-colors duration-300 transform hover:scale-110 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-2 sm:p-3 hover:bg-opacity-20"

                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />                    aria-label="LinkedIn"

                  </a>                  >

                  <a                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />

                    href="mailto:manoharisatyasarthak@gmail.com"                  </a>

                    className="text-white hover:text-blue-200 transition-colors duration-300 transform hover:scale-110 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-2 sm:p-3 hover:bg-opacity-20"                  <a

                    aria-label="Mail"                    href="mailto:manoharisatyasarthak@gmail.com"

                  >                    className="text-white hover:text-blue-200 transition-colors duration-300 transform hover:scale-110 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-2 sm:p-3 hover:bg-opacity-20"

                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />                    aria-label="Mail"

                  </a>                  >

                </div>                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />

              </div>                  </a>

            </div>                </div>

          </div>              </div>

        </div>            </div>

      </div>          </div>

        </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">      </div>

        <ArrowDown className="text-white text-opacity-70 animate-bounce" size={24} />

      </div>      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">

    </section>        <ArrowDown className="text-white text-opacity-70 animate-bounce" size={24} />

  );      </div>

};    </section>

  );

export default Hero;};

export default Hero;
