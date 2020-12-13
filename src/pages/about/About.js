import React from 'react';

const About = () => {
  return (
    <section className="bg-white text-center dosis-normal">
      <h1 className="pt-24 pb-8 dosis-bold text-4xl">ABOUT</h1>

      <div className="block text-center lg:flex max-w-5xl mx-auto lg:space-x-11 mb-28">
        <img src="/about/about.jpg" alt="studio-img" className="w-1/2 inline-block" />
        <div className="text-left w-1/2 mx-auto">
          <h4 className="text-blue-500 pt-16">WHO WE ARE</h4>
          <h2 className="dosis-bold text-2xl max-w-96 tracking-wider">SIMPLY DUMMY TEXT OF THE PRINTING INDUSTRY.</h2>
          <p className="py-8 text-gray-400">Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit amet when an unknown printer took a galley of type.Vivamus id tempor felis.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit amet.</p>
          <div className="flex space-x-5">
            <img src="/about/jack.jpg" alt="jack-wilcox" className="w-28 h-28 rounded-full border-4 border-gray-300 inline-block"/>
            <div>
              <p className="dosis-bold font-bold pt-2">Jack Wilcox</p>
              <p className="text-sm text-gray-400">Photographer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex sm:justify-around flex-wrap text-gray-600 mb-8 justify-between">
        <div className="w-1/2 sm:w-1/5 mb-16 mb-16 sm:mb-0">
          <i className="far fa-lightbulb fa-3x"></i>
          <p className="text-red-500 dosis-bold text-5xl pt-3 pb-4">645</p>
          <h6 className="dosis-bold">PROJECTS DONE</h6>
        </div>
        <div className="w-1/2 sm:w-1/5 mb-16 sm:mb-0">
          <i className="far fa-heart fa-3x"></i>
          <p className="text-red-500 dosis-bold text-5xl pt-3 pb-4">563</p>
          <h6 className="dosis-bold">SATISFIED CLIENTS</h6>
        </div>
        <div className="w-1/2 sm:w-1/5">
          <i className="fas fa-magic fa-3x"></i>
          <p className="text-red-500 dosis-bold text-5xl pt-3 pb-4">1145</p>
          <h6 className="dosis-bold">AWARDS</h6>
        </div>
        <div className="w-1/2 sm:w-1/5">
          <i className="far fa-smile fa-3x"></i>
          <p className="text-red-500 dosis-bold text-5xl pt-3 pb-4">1045</p>
          <h6 className="dosis-bold">HAPPY CLIENTS</h6>
        </div>
      </div>

    </section>
  )
}

export default About;