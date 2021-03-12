export function BuiltWith({ frameworks }) {
  return (
    <div>
      <h3 className="font-medium">Built with:</h3>
      <ul className="inline-flex flex-wrap items-center text-base">
        {frameworks.map((framework) => (
          <li key={framework} className="mr-5 whitespace-nowrap">
            {framework}
          </li>
        ))}
      </ul>
    </div>
  );
}
