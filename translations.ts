type Locale = "en" | "sv";

type Basetranslations = {
  dashboard: string;
  menu: string;
  admin: string;
};

const enDashboardTranslations = {
  title: "Dashboard",
};

const enMenuTranslations = {
  goBack: "Go Back",
};

const enAdminTranslations = {
  title: "Admin",
  subtitle: "Admin panel",
};

type SectionTranslations = {
  dashboard: typeof enDashboardTranslations;
  menu: typeof enMenuTranslations;
  admin: typeof enAdminTranslations;
};

// ----------------------
// Template Literal: build valid keys like "en.dashboard.title"
// ----------------------
type TranslationKeys<
  L extends Locale,
  Sections extends Record<string, object>
> = {
  [K in keyof Sections]: {
    [P in keyof Sections[K] & string]: `${L}.${Extract<K, string>}.${P}`;
  }[keyof Sections[K] & string];
}[keyof Sections];

// Example: all valid translation keys for English
type EnKeys = TranslationKeys<"en", SectionTranslations>;
// => "en.dashboard.title" | "en.menu.goBack" | "en.admin.title" | "en.admin.subtitle"

// ----------------------
// Usage
// ----------------------
function t<K extends TranslationKeys<Locale, SectionTranslations>>(
  key: K
): string {
  // Imagine fetching the correct string here
  return key;
}
