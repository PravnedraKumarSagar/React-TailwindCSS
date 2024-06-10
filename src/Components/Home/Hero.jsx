import img from "../../assets/3.jpg"
import phd from "../../assets/phd.png"

export default function Hero() {

  return (
    <div className="bg-white py-2 sm:py-10">
      <div className="relative isolate px-6  lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-evenly py-8 md:py-16 lg:py-24">
          <div className="max-w-lg mt-10">
            <h1 className="text-4xl font-bold sm:mt-10 tracking-tight text-gray-900 sm:text-5xl">
              Successfully Mentored
            </h1>
            <p className="mt-6 text-2xl leading-8 text-gray-600">
              Research Scholars & Authors across the Globe
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a> */}
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="max-w-xl mt-8 md:mt-0">
            <img className=" drop-shadow-2xl" src={phd} alt="phd" />
            {/* <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
              <img className="object-cover" src={img} alt="phd" />
            </div> */}
          </div>
        </div>
        <div className="text-center mt-16  lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 lg:px-8">
            Why Ph.D. Assistance?
            </h1>
            <h1 className="text-3xl font-medium text-blue-900 sm:text-4xl lg:px-8">
            A Trusted & Academically Sound Mentors representing various Countries
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-24rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-45rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}