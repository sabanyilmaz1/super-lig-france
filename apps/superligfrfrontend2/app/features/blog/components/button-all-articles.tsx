import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export const ButtonAllArticles = () => {
  return (
    <div className="flex justify-end w-full mt-8">
      <Button variant="link" className="w-full sm:w-auto" asChild>
        <Link to={"/blog/all-articles"}>
          Voir tous les articles
          <ArrowRight className="ml-2 size-4" />
        </Link>
      </Button>
    </div>
  );
};
