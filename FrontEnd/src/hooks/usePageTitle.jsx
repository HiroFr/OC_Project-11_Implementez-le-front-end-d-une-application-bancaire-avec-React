import { useEffect } from "react";

// Hook personnalisé pour mettre à jour le titre de la page
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
