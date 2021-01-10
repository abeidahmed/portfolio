import { BuiltWith } from 'components/BuiltWith';
import { Showcase } from 'components/Showcase';
import { Intro } from 'components/Intro';

export default function Index() {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-12 md:gap-6">
      <div className="flex items-center min-h-screen px-4 py-10 sm:px-16 lg:col-span-5">
        <Intro />
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
            <BuiltWith frameworks={['Rails', 'Vue.js', 'Postgresql', 'styled-components']} />
            <Showcase githubLink="#" liveLink="#" />
          </div>
        </section>
      </div>
    </main>
  );
}
