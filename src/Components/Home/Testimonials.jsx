const data=[
    {
        review: 'I was blown away by the ease and speed with which I was able to place my order, as well as the speed with which it was sent and arrived. The fabric poster was excellent. This is a service I will definitely use again!',
        name: 'A.M.',
        place: 'U.S.'
    },
    {
        review: "My friend recommended that I use your service just when I was about to give up on my dissertation. Because I was trapped and didn't know what to do, the suggestion came at a good moment. I'm now a PhD holder, and I'm overjoyed about it. Thank you for your help",
        name: 'N.M.',
        place: 'U.S.'
    },{
        review: "I am immensely grateful for the PhD Assistance desk-based data collection services I received for my research project. The team was efficient and meticulous, demonstrating a strong understanding of my research objectives. They conducted comprehensive literature reviews, collected relevant data from various sources, and organized it in a structured manner. Their attention to detail and accuracy ensured that the data collected was reliable and relevant to my study. I highly recommend their services to any researcher in need of desk-based data collection - Thanks, team- ",
        name: 'Dr Michael Johnson',
        place: 'Researcher'
    },{
        review: "I used a fantastic research assistance service. They provided me with thorough guidance at every stage of the project from developing solid procedures to establishing precise goals. Their assistance with creating targeted questionnaires and leading informative focus groups improved the quality of my data collection. My findings would not have been possible without the accurate statistical analysis they offered. I was impressed by how well-developed the content was including the appendices and a structured literature review. I heartily endorse using their services. ",
        name: 'Deno',
        place: 'New York'
    },

]

import { FaQuoteLeft } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      };
    return (
      <section className="relative isolate overflow-hidden bg-pink-100 px-6 py-16 sm:py-20 lg:px-8">
        
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-blue-100 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="text-blue-900 text-center text-4xl font-semibold">Testimonials</h1>
          <figure className="mt-10">
          <Slider {...settings} className='bg-gray-100 rounded-3xl p-6'>
            {data.map((person, index) => (
            <div key={index}>
            <blockquote className="text-center sm:text-xl font-serif  leading-8 text-gray-700  sm:leading-9">
            <FaQuoteLeft className="text-indigo-200 h-6 w-6 mr-2" />
              <p>{person.review}</p>
            </blockquote>
            
            <figcaption className="mt-6 flex items-center justify-center">
                <img
                  className="h-12 w-12 rounded-full object-cover mr-4"
                  src={`https://randomuser.me/api/portraits/men/${index}.jpg`}
                  alt={`Portrait of ${person.name}`}
                />
                <div className="text-base">
                  <p className="font-semibold text-gray-900">{person.name}</p>
                  <p className="text-gray-600">{person.place}</p>
                </div>
            </figcaption>
            </div>
            ))}
          </Slider>
          </figure>
        </div>
        
      </section>
    )
  }
  