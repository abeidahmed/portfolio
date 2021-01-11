import { BuiltWith } from 'components/BuiltWith';
import { Showcase } from 'components/Showcase';

export function Project({
  classNames,
  title,
  description,
  images,
  frameworks,
  githubLink,
  liveLink,
}) {
  return (
    <section
      className={`flex flex-col justify-between min-h-screen px-4 sm:px-16 lg:px-4 ${classNames}`}
    >
      <span className="flex-shrink-0 h-16" aria-hidden={true}></span>
      <article className="flex items-center flex-1 md:justify-center">
        <div className="flex-1">
          <div className="max-w-lg xl:max-w-xl md:text-center md:mx-auto">
            <h2 className="text-3xl font-medium">{title}</h2>
            <p className="mt-2 xl:text-xl">{description}</p>
          </div>
          <div className="max-w-2xl mx-auto mt-10">{images}</div>
        </div>
      </article>
      <div className="py-5 sm:flex sm:items-end sm:justify-between xl:px-8">
        <BuiltWith frameworks={frameworks} />
        <Showcase githubLink={githubLink} liveLink={liveLink} />
      </div>
    </section>
  );
}
