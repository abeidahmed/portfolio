import { Intro } from 'components/Intro';
import { Project } from 'components/Project';

export default function Index() {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-12 lg:gap-6">
      <div className="flex items-center min-h-screen px-4 py-10 sm:px-16 lg:col-span-5">
        <Intro />
      </div>
      <div className="lg:col-span-7 lg:overflow-y-auto lg:flex lg:flex-col lg:h-screen">
        <Project
          classNames="text-yellow-900 bg-yellow-300"
          title="Feeder fish"
          description="Collect issues, ideas and compliments with a simple widget. Receive them as email. Dive deep with the dashboard."
          images={
            <>
              <img
                src="/img/feederFish/feeder-flow-mobile.png"
                alt="Screenshot of feeder fish"
                className="mx-auto sm:hidden"
              />
              <img
                src="/img/feederFish/feeder-flow-large.png"
                alt="Screenshot of feeder fish"
                className="hidden sm:block"
              />
            </>
          }
          frameworks={['Rails', 'Vue.js', 'Postgresql', 'styled-components']}
        />
      </div>
    </main>
  );
}
