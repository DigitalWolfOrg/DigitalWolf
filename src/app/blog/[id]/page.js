import BlogDetail from "./BlogDetail";
import { data } from "./data";

export async function generateStaticParams() {
  return data.map((item) => ({
    id: item.id.toString(),
  }));
}

export default function Page({ params }) {
  return <BlogDetail id={params.id} />;
}
