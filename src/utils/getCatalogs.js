import wcag20508catalog from "@openacr/openacr/catalog/2.5-edition-wcag-2.0-508-en.yaml";
import wcag22508catalog from "@openacr/openacr/catalog/2.5-edition-wcag-2.2-508-en.yaml";
import wcag22catalog from "@openacr/openacr/catalog/2.5-edition-wcag-2.2-en.yaml";
import wcag22eucatalog from "@openacr/openacr/catalog/2.5-edition-wcag-2.2-eu-en.yaml";
import wcag21catalog from "@openacr/openacr/catalog/2.5-edition-wcag-2.1-en.yaml";
import wcag21508catalog from "@openacr/openacr/catalog/2.5-edition-wcag-2.1-508-en.yaml";
import wcag22301catalog from "@openacr/openacr/catalog/2.5-edition-wcag-2.2-508-eu-en.yaml";
export const wcag20508catalogName = "2.5-edition-wcag-2.0-508-en";
export const wcag22508catalogName = "2.5-edition-wcag-2.2-508-en";
export const wcag22catalogName = "2.5-edition-wcag-2.2-en";
export const wcag21catalogName = "2.5-edition-wcag-2.1-en";
export const wcag22eucatalogName = "2.5-edition-wcag-2.2-eu-en";
export const wcag21508catalogName = "2.5-edition-wcag-2.1-508-en";
export const wcag22301catalogName = "2.5-edition-wcag-2.2-508-eu-en";


export function getCatalog(catalogName) {
  if (catalogName == wcag20508catalogName) {
    return wcag20508catalog;
  }
  else if (catalogName == wcag21catalogName) {
    return wcag21catalog;
  }
  else if (catalogName == wcag21508catalogName) {
      return wcag21508catalog;
}
else if (catalogName == wcag22508catalogName) {
     return wcag22508catalog;
} 
else if (catalogName == wcag22catalogName) {
    return wcag22catalog;
 } 
else if (catalogName == wcag22eucatalogName) {
    return wcag22eucatalog;
  }
  else if (catalogName == wcag22301catalogName) {
      return wcag22301catalog;
  }
  return wcag20508catalog;
}

export function getListOfCatalogs() {
    return [
        {
            catalog: wcag20508catalogName,
            title: "VPAT® 2.5 508: Poprawione wydanie Section 508 (WCAG 2.0)",
        },
     {
          catalog: wcag22508catalogName,
          title: "VPAT® 2.5 508 + WCAG: Revised Section 508 Edition (WCAG 2.2)",
      },
       {
           catalog: wcag22catalogName,
           title: "VPAT® 2.5 WCAG: WCAG 2.2",
      },
        {
            catalog: wcag21508catalogName,
            title: "VPAT® 2.5 508 + WCAG: Poprawione wydanie Section 508 (WCAG 2.1)",
        },
        {
            catalog: wcag21catalogName,
            title: "VPAT® 2.5 WCAG: WCAG 2.1",
        },
       {
           catalog: wcag22eucatalogName,
           title: "VPAT® Rev EU: EN 301 549",
        },
        {
            catalog: wcag22301catalogName,
            title: "VPAT® Iternational Edidtion",
        },
    ];
}

export function getDefaultCatalogName() {
  return wcag21508catalogName;
}
