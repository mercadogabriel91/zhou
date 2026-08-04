export type Locale = "es" | "en";

export type TranslationKey = keyof typeof import("./es").es;
