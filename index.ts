import fetch from "node-fetch";

const ENDPOINT = "https://restcountries.com/v2/name";

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
function flag(country: string, options: FlagOptions): Promise<data> {
    return new Promise((resolve, reject) => {
        if (!country) return reject("Country name was not provided!");
        if (!options) options = {
            type: "svg"
        };
        
        fetch(`${ENDPOINT}/${country}`)
            .then(res => res.json())
            .then(body => {
                if (!body || body.status === 404 || !body[0]) {
                    const emt: data = {
                        name: null,
                        flag: null
                    };
                    return resolve(emt);
                };

                if (options && !options.type || options.type === "svg") {
                    const emt: data = {
                        name: body[0].name,
                        flag: body[0].flag
                    };
                    return resolve(emt);
                }

                const emt: data = {
                    name: body[0].name,
                    flag: `https://www.countryflagsapi.com/png/${body[0].alpha2Code}`
                };
                resolve(emt);
            })
            .catch(reject);
    });
}

export = flag;
