import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export const ButtonAllArticles = () => {
  return (
    <div className="flex justify-end w-full mt-8">
      <Button variant="link" className="w-full sm:w-auto" asChild>
        <a href={"https://www.superlig.fr/blog"} target="_blank">
          Voir tous les articles
          <ArrowRight className="ml-2 size-4" />
        </a>
      </Button>
    </div>
  );
};
