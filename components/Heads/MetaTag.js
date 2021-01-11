const WEBSITE = 'https://abeidahmed.me';
const TITLE = 'Abeid Ahmed - Full-stack webdeveloper';
const DESCRIPTION =
  'Abeid Ahmed is building web-applications for more than 2 years with Ruby on Rails and React.';

export function MetaTag() {
  return (
    <>
      <meta property="og:title" content={TITLE} />
      <meta property="og:url" content={WEBSITE} />
      <meta property="og:type" content="website" />
      <meta property="og:desription" content={DESCRIPTION} />
      <meta content={DESCRIPTION} name="description" />
      <meta property="og:site_name" content={TITLE} />
      <link rel="shortcut icon" href="/favicon.svg" />
    </>
  );
}
