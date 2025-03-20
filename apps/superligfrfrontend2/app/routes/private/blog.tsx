import { HeaderPage } from "~/components/common/header-page";
import { BlogList } from "~/features/blog/components/blog-list";

export default function BlogPage() {
  return (
    <section className="min-h-screen">
      <HeaderPage
        title="Blog"
        subtitle="Découvrez les dernières actualités et analyses de la Süper Lig"
      />
      <BlogList />
    </section>
  );
}
