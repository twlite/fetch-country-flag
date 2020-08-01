interface FlagOptions {
    type?: "svg" | "png";
    size?: "16" | "24" | "32" | "48" | "64";
    theme?: "flat" | "shiny";
}
interface data {
    name?: string | null;
    flag?: string | null;
}
/**
 * Resolves country flag
 * @param country Country name
 * @param options Flag options
 */
declare function flag(country: string, options: FlagOptions): Promise<data>;
export = flag;
