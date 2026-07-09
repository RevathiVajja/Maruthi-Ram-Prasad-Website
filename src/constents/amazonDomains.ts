/**
 * amazonDomains.ts
 *
 * Maps ISO 3166-1 alpha-2 country codes → Amazon storefront domains.
 *
 * Countries that have a dedicated Amazon storefront are mapped directly.
 * All other countries are routed to the geographically / linguistically
 * nearest storefront (e.g. most of Sub-Saharan Africa → amazon.com,
 * Gulf states → amazon.ae, Scandinavia → amazon.se, etc.).
 *
 * The default fallback when a code is not found is amazon.com.
 */

export const AMAZON_DOMAIN_MAP: Record<string, string> = {

    // ── Dedicated Amazon storefronts ──────────────────────────────────────────

    // South Asia
    IN: "amazon.in",         // India

    // North America
    US: "amazon.com",        // United States
    CA: "amazon.ca",         // Canada
    MX: "amazon.com.mx",     // Mexico

    // Europe
    GB: "amazon.co.uk",      // United Kingdom
    DE: "amazon.de",         // Germany
    FR: "amazon.fr",         // France
    IT: "amazon.it",         // Italy
    ES: "amazon.es",         // Spain
    NL: "amazon.nl",         // Netherlands
    SE: "amazon.se",         // Sweden
    PL: "amazon.pl",         // Poland
    BE: "amazon.com.be",     // Belgium

    // Middle East & North Africa
    AE: "amazon.ae",         // United Arab Emirates
    SA: "amazon.sa",         // Saudi Arabia
    EG: "amazon.eg",         // Egypt

    // Asia-Pacific
    JP: "amazon.co.jp",      // Japan
    AU: "amazon.com.au",     // Australia
    SG: "amazon.sg",         // Singapore

    // South America
    BR: "amazon.com.br",     // Brazil

    // Turkey
    TR: "amazon.com.tr",     // Turkey

    // ── Countries without a dedicated storefront → nearest store ──────────────

    // Europe — route to amazon.co.uk / amazon.de / amazon.fr / amazon.it etc.
    IE: "amazon.co.uk",      // Ireland
    MT: "amazon.co.uk",      // Malta
    CY: "amazon.co.uk",      // Cyprus
    GI: "amazon.co.uk",      // Gibraltar
    IM: "amazon.co.uk",      // Isle of Man
    JE: "amazon.co.uk",      // Jersey
    GG: "amazon.co.uk",      // Guernsey
    AT: "amazon.de",         // Austria
    CH: "amazon.de",         // Switzerland (German-speaking majority)
    LU: "amazon.de",         // Luxembourg
    LI: "amazon.de",         // Liechtenstein
    MC: "amazon.fr",         // Monaco
    AD: "amazon.es",         // Andorra
    SM: "amazon.it",         // San Marino
    VA: "amazon.it",         // Vatican City
    PT: "amazon.es",         // Portugal
    GR: "amazon.co.uk",      // Greece
    DK: "amazon.se",         // Denmark
    NO: "amazon.se",         // Norway
    FI: "amazon.se",         // Finland
    IS: "amazon.co.uk",      // Iceland
    EE: "amazon.de",         // Estonia
    LV: "amazon.de",         // Latvia
    LT: "amazon.de",         // Lithuania
    CZ: "amazon.de",         // Czech Republic
    SK: "amazon.de",         // Slovakia
    HU: "amazon.de",         // Hungary
    RO: "amazon.de",         // Romania
    BG: "amazon.de",         // Bulgaria
    HR: "amazon.de",         // Croatia
    SI: "amazon.de",         // Slovenia
    RS: "amazon.de",         // Serbia
    BA: "amazon.de",         // Bosnia & Herzegovina
    ME: "amazon.de",         // Montenegro
    MK: "amazon.de",         // North Macedonia
    AL: "amazon.de",         // Albania
    XK: "amazon.de",         // Kosovo
    BY: "amazon.de",         // Belarus
    UA: "amazon.de",         // Ukraine
    MD: "amazon.de",         // Moldova
    RU: "amazon.de",         // Russia (no dedicated store)
    GE: "amazon.de",         // Georgia (country)
    AM: "amazon.de",         // Armenia
    AZ: "amazon.de",         // Azerbaijan
    KZ: "amazon.de",         // Kazakhstan

    // Middle East (non-AE/SA/EG) → amazon.ae
    KW: "amazon.ae",         // Kuwait
    QA: "amazon.ae",         // Qatar
    BH: "amazon.ae",         // Bahrain
    OM: "amazon.ae",         // Oman
    YE: "amazon.ae",         // Yemen
    IQ: "amazon.ae",         // Iraq
    IR: "amazon.ae",         // Iran
    JO: "amazon.ae",         // Jordan
    LB: "amazon.ae",         // Lebanon
    SY: "amazon.ae",         // Syria
    IL: "amazon.ae",         // Israel
    PS: "amazon.ae",         // Palestine

    // North Africa (non-EG) → amazon.ae
    LY: "amazon.ae",         // Libya
    TN: "amazon.fr",         // Tunisia (French-speaking)
    MA: "amazon.fr",         // Morocco (French-speaking)
    DZ: "amazon.fr",         // Algeria (French-speaking)
    SD: "amazon.ae",         // Sudan

    // Sub-Saharan Africa → amazon.com (no dedicated store)
    NG: "amazon.com",        // Nigeria
    GH: "amazon.com",        // Ghana
    KE: "amazon.com",        // Kenya
    ZA: "amazon.com",        // South Africa
    ET: "amazon.com",        // Ethiopia
    TZ: "amazon.com",        // Tanzania
    UG: "amazon.com",        // Uganda
    SN: "amazon.fr",         // Senegal (French-speaking)
    CI: "amazon.fr",         // Côte d'Ivoire
    CM: "amazon.fr",         // Cameroon
    MG: "amazon.fr",         // Madagascar
    MZ: "amazon.com",        // Mozambique
    ZM: "amazon.com",        // Zambia
    ZW: "amazon.com",        // Zimbabwe
    BW: "amazon.com",        // Botswana
    NA: "amazon.com",        // Namibia
    AO: "amazon.com",        // Angola
    CD: "amazon.fr",         // DR Congo
    CG: "amazon.fr",         // Republic of Congo
    GA: "amazon.fr",         // Gabon
    RW: "amazon.com",        // Rwanda
    BI: "amazon.com",        // Burundi
    SO: "amazon.com",        // Somalia
    DJ: "amazon.com",        // Djibouti
    ER: "amazon.com",        // Eritrea
    SS: "amazon.com",        // South Sudan
    MR: "amazon.fr",         // Mauritania
    ML: "amazon.fr",         // Mali
    BF: "amazon.fr",         // Burkina Faso
    NE: "amazon.fr",         // Niger
    TD: "amazon.fr",         // Chad
    GN: "amazon.fr",         // Guinea
    GW: "amazon.fr",         // Guinea-Bissau
    SL: "amazon.com",        // Sierra Leone
    LR: "amazon.com",        // Liberia
    TG: "amazon.fr",         // Togo
    BJ: "amazon.fr",         // Benin
    GM: "amazon.com",        // Gambia
    CV: "amazon.com",        // Cape Verde
    ST: "amazon.com",        // São Tomé and Príncipe
    GQ: "amazon.es",         // Equatorial Guinea (Spanish-speaking)
    MU: "amazon.co.uk",      // Mauritius (English)
    SC: "amazon.co.uk",      // Seychelles
    KM: "amazon.fr",         // Comoros
    MW: "amazon.com",        // Malawi
    LS: "amazon.com",        // Lesotho
    SZ: "amazon.com",        // Eswatini
    RE: "amazon.fr",         // Réunion (French)
    YT: "amazon.fr",         // Mayotte (French)

    // South & Southeast Asia → amazon.in or amazon.sg
    PK: "amazon.in",         // Pakistan
    BD: "amazon.in",         // Bangladesh
    LK: "amazon.in",         // Sri Lanka
    NP: "amazon.in",         // Nepal
    BT: "amazon.in",         // Bhutan
    MV: "amazon.in",         // Maldives
    AF: "amazon.in",         // Afghanistan
    MM: "amazon.sg",         // Myanmar
    TH: "amazon.sg",         // Thailand
    VN: "amazon.sg",         // Vietnam
    ID: "amazon.sg",         // Indonesia
    PH: "amazon.sg",         // Philippines
    MY: "amazon.sg",         // Malaysia
    BN: "amazon.sg",         // Brunei
    KH: "amazon.sg",         // Cambodia
    LA: "amazon.sg",         // Laos
    TL: "amazon.sg",         // Timor-Leste

    // East Asia (non-JP) → amazon.com
    CN: "amazon.com",        // China (Amazon CN closed; global store)
    KR: "amazon.com",        // South Korea
    HK: "amazon.com",        // Hong Kong
    TW: "amazon.com",        // Taiwan
    MO: "amazon.com",        // Macao
    MN: "amazon.com",        // Mongolia

    // Central Asia → amazon.de (closest major store)
    UZ: "amazon.de",         // Uzbekistan
    TM: "amazon.de",         // Turkmenistan
    TJ: "amazon.de",         // Tajikistan
    KG: "amazon.de",         // Kyrgyzstan

    // Pacific Islands → amazon.com.au
    NZ: "amazon.com.au",     // New Zealand
    FJ: "amazon.com.au",     // Fiji
    PG: "amazon.com.au",     // Papua New Guinea
    SB: "amazon.com.au",     // Solomon Islands
    VU: "amazon.com.au",     // Vanuatu
    WS: "amazon.com.au",     // Samoa
    TO: "amazon.com.au",     // Tonga
    KI: "amazon.com.au",     // Kiribati
    TV: "amazon.com.au",     // Tuvalu
    NR: "amazon.com.au",     // Nauru
    MH: "amazon.com",        // Marshall Islands (US affiliated)
    FM: "amazon.com",        // Micronesia (US affiliated)
    PW: "amazon.com",        // Palau (US affiliated)
    GU: "amazon.com",        // Guam (US territory)
    AS: "amazon.com",        // American Samoa
    MP: "amazon.com",        // Northern Mariana Islands
    PF: "amazon.fr",         // French Polynesia
    NC: "amazon.fr",         // New Caledonia

    // Caribbean & Central America → amazon.com or amazon.com.mx
    CU: "amazon.com",        // Cuba
    JM: "amazon.com",        // Jamaica
    HT: "amazon.fr",         // Haiti (French-speaking)
    DO: "amazon.com",        // Dominican Republic
    PR: "amazon.com",        // Puerto Rico (US territory)
    TT: "amazon.com",        // Trinidad & Tobago
    BB: "amazon.com",        // Barbados
    LC: "amazon.com",        // Saint Lucia
    VC: "amazon.com",        // Saint Vincent
    GD: "amazon.com",        // Grenada
    AG: "amazon.com",        // Antigua & Barbuda
    DM: "amazon.com",        // Dominica
    KN: "amazon.com",        // Saint Kitts & Nevis
    BS: "amazon.com",        // Bahamas
    TC: "amazon.com",        // Turks & Caicos
    KY: "amazon.com",        // Cayman Islands
    BM: "amazon.com",        // Bermuda
    VI: "amazon.com",        // US Virgin Islands
    AW: "amazon.com",        // Aruba
    CW: "amazon.com",        // Curaçao
    SX: "amazon.com",        // Sint Maarten
    BQ: "amazon.com",        // Bonaire
    MF: "amazon.fr",         // Saint Martin (French)
    GP: "amazon.fr",         // Guadeloupe
    MQ: "amazon.fr",         // Martinique
    GT: "amazon.com.mx",     // Guatemala
    BZ: "amazon.com",        // Belize
    HN: "amazon.com.mx",     // Honduras
    SV: "amazon.com.mx",     // El Salvador
    NI: "amazon.com.mx",     // Nicaragua
    CR: "amazon.com.mx",     // Costa Rica
    PA: "amazon.com",        // Panama

    // South America (non-BR) → amazon.com or amazon.com.mx
    CO: "amazon.com",        // Colombia
    VE: "amazon.com",        // Venezuela
    PE: "amazon.com",        // Peru
    EC: "amazon.com",        // Ecuador
    CL: "amazon.com",        // Chile
    AR: "amazon.com",        // Argentina
    UY: "amazon.com",        // Uruguay
    PY: "amazon.com",        // Paraguay
    BO: "amazon.com",        // Bolivia
    GY: "amazon.com",        // Guyana
    SR: "amazon.com",        // Suriname
    GF: "amazon.fr",         // French Guiana
    FK: "amazon.co.uk",      // Falkland Islands

    // Territories & Miscellaneous
    GL: "amazon.co.uk",      // Greenland
    SJ: "amazon.se",         // Svalbard & Jan Mayen
    AX: "amazon.se",         // Åland Islands
    FO: "amazon.se",         // Faroe Islands
    PM: "amazon.fr",         // Saint Pierre & Miquelon
    WF: "amazon.fr",         // Wallis & Futuna
    TF: "amazon.fr",         // French Southern Territories
    IO: "amazon.co.uk",      // British Indian Ocean Territory
    SH: "amazon.co.uk",      // Saint Helena
    AI: "amazon.co.uk",      // Anguilla
    VG: "amazon.co.uk",      // British Virgin Islands
    MS: "amazon.co.uk",      // Montserrat
};

/**
 * Returns the Amazon storefront URL for a given ISO country code.
 * Falls back to amazon.com if the country code is unknown or null.
 */
export function getAmazonUrl(asin: string, countryCode: string | null): string {
    const domain =
        (countryCode && AMAZON_DOMAIN_MAP[countryCode]) ?? "amazon.com";
    return `https://www.${domain}/dp/${asin}?&tag=mybookstoream-21`;
}
