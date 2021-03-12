import { Project } from 'components/Project';

export default function FeederFish() {
  return (
    <Project
      classNames="text-yellow-900 bg-yellow-300"
      title="Feeder fish"
      description="Collect issues, ideas, and compliments with a simple widget. Receive them as an email. Dive deep with the dashboard."
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
      frameworks={['Rails', 'React', 'Postgresql', 'styled-components']}
      githubLink="https://github.com/abeidahmed/feedback-app"
      liveLink="https://feeder-fish.herokuapp.com/"
    />
  );
}
