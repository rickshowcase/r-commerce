import { pageMetadata } from "@/lib/seo";
import LookbookView from "./LookbookView";

export const metadata = pageMetadata({
  title: "Lookbook",
  description:
    "The R Commerce visual index — an interactive signal archive of campaign imagery exploring form, motion and silhouette.",
  path: "/lookbook",
});

export default function Page() {
  return <LookbookView />;
}
