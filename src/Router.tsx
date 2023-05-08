import { useRoutes } from "react-router-dom";
import AppLayout from "./component/sidebar/appLayout";

import Home from "./component/page/categorie/Home";
import ModeVente from "./component/page/categorie/ModeVente";
import PriseCommande from "./component/page/categorie/PriseCommande";



export default function Router() {
  return useRoutes([
    {
      
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Home",
          element: <Home />,
        },
        {
          path: "/ModeVente",
          element: <ModeVente />,
        },
        {
          path: "/PriseCommande",
          element: <PriseCommande />,
        },
      ],
    },
  ]);
}
