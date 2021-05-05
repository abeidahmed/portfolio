import { Icon } from 'components/Icons';
import { SocialLink } from 'components/SocialLink';

export function Intro() {
  return (
    <div className="max-w-md lg:ml-auto">
      <h1 className="text-5xl font-medium text-gray-800">Abeid Ahmed</h1>
      <p className="text-xl mt-2">
        I am a web developer with several years of experience developing
        high-quality projects with Ruby on Rails and React.
        <span className="block mt-2">
          I invite you to browse through some of my work below.
        </span>
      </p>
      <div className="mt-5">
        <a
          href="https://drive.google.com/file/d/1wG_whJETWNYwNvbi5wpRse3LSy8GFc1A/view?usp=sharing"
          target="_blank"
          rel="external noopener noreferrer nofollow"
          className="text-xl inline-flex items-center hover:underline"
        >
          See my resume
          <Icon icon="link-external" className="w-4 h-4 ml-1" />
        </a>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-medium">Let's work together</h2>
        <div className="mt-4">
          <SocialLink classes="text-gray-700 hover:text-gray-500" />
        </div>
      </div>
    </div>
  );
}
