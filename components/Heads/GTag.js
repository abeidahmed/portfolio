export function GTag() {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GTAG}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
