import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ExternalRedirect = ({ url }: { url: string }) => {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);

  return (
    <>
      <Helmet>
        <title>Weiterleitung zum Datei-Upload | Neuhaus-IT</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={url} />
      </Helmet>
      <main className="container mx-auto px-4 py-20 text-center">
        <p>Sie werden weitergeleitet …</p>
        <a href={url} rel="noopener" className="text-primary underline">Zur Upload-Seite</a>
      </main>
    </>
  );
};

export default ExternalRedirect;