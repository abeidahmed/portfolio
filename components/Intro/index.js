import { Icon } from 'components/Icons';

const socialLinks = [
  {
    name: 'email to abeidahmed948@gmail.com',
    icon: 'mail',
    to: 'mailto:abeidahmed948@gmail.com',
  },
  {
    name: 'linkedin',
    icon: 'linkedin',
    to: 'https://www.linkedin.com/in/abeid-ahmed-b21882172/',
  },
  {
    name: 'twitter',
    icon: 'twitter',
    to: 'https://twitter.com/iamhawaabi',
  },
  {
    name: 'github',
    icon: 'github',
    to: 'https://github.com/abeidahmed',
  },
];

export function Intro() {
  return (
    <div className="max-w-md lg:ml-auto">
      <h1 className="text-4xl font-medium text-gray-800">Abeid Ahmed</h1>
      <p className="mt-2">
        is building web-applications for more than 2 years with Ruby on Rails and React.
      </p>
      <div className="mt-5">
        <a
          href="https://doc-0o-10-docs.googleusercontent.com/docs/securesc/svr8kdonhce3hc3qi9rjin4v6tb19ffh/0jnnqpgc4kmil99mm3ncu817nnfgqmkp/1610343750000/11348492644654222639/11348492644654222639/1eAa-R58yH6y30G7fs4jJyu8k8IGybV6g?authuser=5"
          target="_blank"
          rel="external noopener noreferrer nofollow"
          className="inline-flex items-center hover:underline"
        >
          See my resume
          <Icon icon="link-external" className="w-4 h-4 ml-1" />
        </a>
      </div>
      <div className="mt-10">
        <h4 className="text-xl font-medium">Let's work together</h4>
        <ul className="flex items-center mt-4 space-x-5">
          {socialLinks.map((link) => (
            <li key={link.icon}>
              <a
                href={link.to}
                target="_blank"
                rel="external noopener noreferrer nofollow"
                aria-label={link.name}
                className="text-gray-700 transition duration-150 ease-in-out hover:text-gray-500"
              >
                <Icon icon={link.icon} className="w-6 h-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
