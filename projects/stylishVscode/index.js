import { Project } from 'components/Project';

export default function StylishVscode() {
  return (
    <Project
      classNames="bg-gray-900 text-gray-300"
      title="Stylish vscode"
      description="Style your vscode like the way you want. Start picking color schemes and fonts to get started."
      images={
        <>
          <img
            src="/img/stylishVscode/stylish-vscode-all.png"
            alt="Screenshot of feeder fish"
            className="mx-auto"
          />
        </>
      }
      frameworks={['Rails', 'Vue.js', 'Postgresql', 'styled-components']}
    />
  );
}
