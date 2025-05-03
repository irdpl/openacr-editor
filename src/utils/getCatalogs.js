import wcag20508catalog from "@openacr/openacr/catalog/2.5-edition-wcag-2.0-508-en.yaml";
import wcag21catalog from "@openacr/openacr/catalog/2.5-edition-wcag-2.1-en.yaml";
import wcag21508catalog from "@openacr/openacr/catalog/2.5-edition-wcag-2.1-508-eu-en.yaml";

import wcag22eucatalog from "@openacr/openacr/catalog/2.5-edition-wcag-2.1-eu-en.yaml";
export const wcag20508catalogName = "2.5-edition-wcag-2.0-508-en";
const wcag21catalogName = "2.5-edition-wcag-2.1-en";
const wcag21508catalogName = "2.5-edition-wcag-2.1-508-en";
const wcag22eucatalogName = "2.5-edition-wcag-2.1-eu-en";


// ./catalog/2.5-edition-wcag-2.1-508-en.yaml


export function getCatalog(catalogName) {
  if (catalogName == wcag20508catalogName) {
    return wcag20508catalog;
  } else if (catalogName == wcag21catalogName) {
    return wcag21catalog;
  } else if (catalogName == wcag21508catalogName) {
      return wcag21508catalog;
  } else if (catalogName == wcag22eucatalogName) {
      return wcag22eucatalog;
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
      catalog: wcag21508catalogName,
      title: "VPAT® 2.5 508 + WCAG: Poprawione wydanie Section 508 (WCAG 2.1)",
    },
    {
      catalog: wcag21catalogName,
      title: "VPAT® 2.5 WCAG: WCAG 2.1",
      },
      {
          catalog: wcag22eucatalogName,
          title: "VPAT® 2.5 WCAG + ENSI EN 301 549",
      },
  ];
}

export function getDefaultCatalogName() {
  return wcag21508catalogName;
}
