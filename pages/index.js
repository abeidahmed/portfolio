import { Icon } from 'components/Icons';

export default function Index() {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-12 md:gap-6">
      <div className="flex items-center min-h-screen px-4 py-10 sm:px-16 lg:col-span-5">
        <div className="max-w-md lg:ml-auto">
          <h1 className="text-4xl font-medium text-gray-800">Abeid Ahmed</h1>
          <p className="mt-2">
            is building web-applications for more than 2 years with Ruby on Rails and React.
          </p>
          <div className="mt-5">
            <a href="#" className="hover:underline">
              See my resume
            </a>
          </div>
          <div className="mt-10">
            <h4 className="text-xl font-medium">Let's work together</h4>
            <ul className="flex items-center mt-4 space-x-5">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition duration-150 ease-in-out hover:text-gray-500"
                >
                  <Icon icon="mail" className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition duration-150 ease-in-out hover:text-gray-500"
                >
                  <Icon icon="linkedin" className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition duration-150 ease-in-out hover:text-gray-500"
                >
                  <Icon icon="twitter" className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:col-span-7">
        <section className="flex flex-col justify-between min-h-screen px-4 text-yellow-900 bg-yellow-300 sm:px-16 lg:px-4">
          <span className="flex-shrink-0 h-16" aria-hidden={true}></span>
          <article className="flex items-center flex-1 md:justify-center">
            <div className="flex-1">
              <div className="max-w-lg xl:max-w-xl md:text-center md:mx-auto">
                <h2 className="text-3xl font-medium">Feeder fish</h2>
                <p className="mt-2 xl:text-xl">
                  Collect issues, ideas and compliments with a simple widget. Receive them as email.
                  Dive deep with the dashboard.
                </p>
              </div>
              <div className="max-w-2xl mx-auto mt-10">
                <img
                  src="/img/feeder-flow-mobile.png"
                  alt="Screenshot of feeder fish"
                  className="mx-auto sm:hidden"
                />
                <img
                  src="/img/feeder-flow-large.png"
                  alt="Screenshot of feeder fish"
                  className="hidden sm:block"
                />
              </div>
            </div>
          </article>
          <div className="py-5 sm:flex sm:items-end sm:justify-between xl:px-8">
            <div>
              <h6 className="font-medium">Built with:</h6>
              <ul className="inline-flex flex-wrap items-center text-base">
                <li className="mr-5 whitespace-nowrap">Rails</li>
                <li className="mr-5 whitespace-nowrap">Vue.js</li>
                <li className="mr-5 whitespace-nowrap">Postgresql</li>
                <li className="mr-5 whitespace-nowrap">styled-components</li>
              </ul>
            </div>
            <ul className="flex items-center justify-end mt-6 space-x-5 text-yellow-700 sm:justify-start sm:mt-0">
              <li>
                <a href="#">
                  <Icon
                    icon="github"
                    type="stroke"
                    className="w-5 h-5 transition duration-150 ease-in-out hover:opacity-75"
                    strokeWidth={2}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon
                    icon="eye"
                    type="stroke"
                    className="w-5 h-5 transition duration-150 ease-in-out hover:opacity-75"
                    strokeWidth={2}
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
