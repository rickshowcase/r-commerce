import NotFoundView from "./NotFoundView";

// Reserved Next.js file: rendered for any unmatched route and whenever
// notFound() is called (e.g. an invalid product slug). It is wrapped by the
// root layout, so the global Menu/Footer come along automatically. Not linked
// anywhere and excluded from indexing — it serves a real 404 status.
export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundView />;
}
