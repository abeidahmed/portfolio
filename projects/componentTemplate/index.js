import { Project } from 'components/Project';

export default function ComponentTemplate() {
  return (
    <Project
      classNames="text-purple-900 bg-rose-300"
      title="Component template"
      description="The component template is a collection of professionally designed, pre-built, fully responsive HTML snippets that you can drop into your Tailwind projects."
      images={
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <img
                src="/img/componentTemplate/grid-purple.svg"
                alt="Screenshot of purple grid"
                className="w-full overflow-hidden rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1">
              <img
                src="/img/componentTemplate/grid-yellow.svg"
                alt="Screenshot of yellow grid"
                className="w-full overflow-hidden rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div>
            <img
              src="/img/componentTemplate/dive.svg"
              alt="Screenshot of drive"
              className="w-full overflow-hidden rounded-lg shadow-lg"
            />
          </div>
        </div>
      }
      frameworks={['Rails', 'Vue.js', 'Postgresql', 'TailwindCSS']}
      githubLink="https://github.com/abeidahmed/component-template"
      liveLink="https://tailwind-component.herokuapp.com/"
    />
  );
}
