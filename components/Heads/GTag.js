const GTAG = 'G-ZJDJ71X3F0';

export function GTag() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTAG}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
