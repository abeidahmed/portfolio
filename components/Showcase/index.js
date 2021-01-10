import { Icon } from 'components/Icons';

export function Showcase({ githubLink, liveLink }) {
  return (
    <ul className="flex items-center justify-end mt-6 space-x-5 text-yellow-700 sm:justify-start sm:mt-0">
      <li>
        <a href={githubLink}>
          <Icon
            icon="github"
            type="stroke"
            className="w-5 h-5 transition duration-150 ease-in-out hover:opacity-75"
            strokeWidth={2}
          />
        </a>
      </li>
      <li>
        <a href={liveLink}>
          <Icon
            icon="eye"
            type="stroke"
            className="w-5 h-5 transition duration-150 ease-in-out hover:opacity-75"
            strokeWidth={2}
          />
        </a>
      </li>
    </ul>
  );
}
