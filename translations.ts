// type Locale = "en" | "sv";

// /** Allow arbitrarily deep objects with string leaves */
// type NestedStrings = { [k: string]: string | NestedStrings };

// /** Single source of truth (can be nested arbitrarily) */
// const translations = {
//   en: {
//     dashboard: {
//       title: "Dashboard",
//       cards: {
//         revenue: { title: "Revenue" },
//       },
//     },
//     menu: { goBack: "Go Back" },
//     admin: { title: "Admin", subtitle: "Admin panel" },
//   },
//   sv: {
//     dashboard: {
//       title: "Instrumentpanel",
//       cards: {
//         revenue: { title: "Intäkter" },
//       },
//     },
//     menu: { goBack: "Tillbaka" },
//     admin: { title: "Admin", subtitle: "Adminpanel" },
//   },
// } satisfies Record<Locale, NestedStrings>;

// /** Helpers to build dot-separated paths to string leaves */
// type Join<K, P> = K extends string | number
//   ? P extends "" ? `${K}` : `${K}.${P}`
//   : never;

// type PathsToLeaves<T> = T extends string
//   ? ""                                  // base case: leaf
//   : {                                   // recurse into objects
//       [K in keyof T & (string | number)]: Join<K, PathsToLeaves<T[K]>>
//     }[keyof T & (string | number)];

// /** All valid "locale.section.subsection.key" paths */
// type TranslationKey = {
//   [L in keyof typeof translations & string]:
//     Join<L, PathsToLeaves<typeof translations[L]>>
// }[keyof typeof translations & string];

// // Examples
// type EnKeys = Extract<TranslationKey, `en.${string}`>;
// // "en.dashboard.title" |
// // "en.dashboard.cards.revenue.title" |
// // "en.menu.goBack" |
// // "en.admin.title" | "en.admin.subtitle" | ...

// function t<K extends TranslationKey>(key: K): string {
//   // lookup logic...
//   return key;
// }

// // ✅ valid
// t("en.dashboard.cards.revenue.title");

// // ❌ compile-time errors
// // t("en.dashboard.wrong");
// // t("de.menu.goBack");