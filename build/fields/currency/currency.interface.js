"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/fields/currency/currency.interface.ts
var currency_interface_exports = {};
__export(currency_interface_exports, {
  FieldCurrencyDataValidator: () => FieldCurrencyDataValidator,
  FieldCurrencyInitialDataValidator: () => FieldCurrencyInitialDataValidator,
  FieldCurrencyParamsValidator: () => FieldCurrencyParamsValidator
});
module.exports = __toCommonJS(currency_interface_exports);
var import_lodash = require("lodash");
var import_zod = require("zod");

// src/fields/currency/currency.constant.ts
var CURRENCIES = [
  {
    symbol: "$",
    name: "US Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "USD",
    namePlural: "US dollars"
  },
  {
    symbol: "CA$",
    name: "Canadian Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "CAD",
    namePlural: "Canadian dollars"
  },
  {
    symbol: "\u20AC",
    name: "Euro",
    symbolNative: "\u20AC",
    decimalDigits: 2,
    rounding: 0,
    code: "EUR",
    namePlural: "euros"
  },
  {
    symbol: "AED",
    name: "United Arab Emirates Dirham",
    symbolNative: "\u062F.\u0625.\u200F",
    decimalDigits: 2,
    rounding: 0,
    code: "AED",
    namePlural: "UAE dirhams"
  },
  {
    symbol: "Af",
    name: "Afghan Afghani",
    symbolNative: "\u060B",
    decimalDigits: 0,
    rounding: 0,
    code: "AFN",
    namePlural: "Afghan Afghanis"
  },
  {
    symbol: "ALL",
    name: "Albanian Lek",
    symbolNative: "Lek",
    decimalDigits: 0,
    rounding: 0,
    code: "ALL",
    namePlural: "Albanian lek\xEB"
  },
  {
    symbol: "AMD",
    name: "Armenian Dram",
    symbolNative: "\u0564\u0580.",
    decimalDigits: 0,
    rounding: 0,
    code: "AMD",
    namePlural: "Armenian drams"
  },
  {
    symbol: "AR$",
    name: "Argentine Peso",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "ARS",
    namePlural: "Argentine pesos"
  },
  {
    symbol: "AU$",
    name: "Australian Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "AUD",
    namePlural: "Australian dollars"
  },
  {
    symbol: "man.",
    name: "Azerbaijani Manat",
    symbolNative: "\u043C\u0430\u043D.",
    decimalDigits: 2,
    rounding: 0,
    code: "AZN",
    namePlural: "Azerbaijani manats"
  },
  {
    symbol: "KM",
    name: "Bosnia-Herzegovina Convertible Mark",
    symbolNative: "KM",
    decimalDigits: 2,
    rounding: 0,
    code: "BAM",
    namePlural: "Bosnia-Herzegovina convertible marks"
  },
  {
    symbol: "Tk",
    name: "Bangladeshi Taka",
    symbolNative: "\u09F3",
    decimalDigits: 2,
    rounding: 0,
    code: "BDT",
    namePlural: "Bangladeshi takas"
  },
  {
    symbol: "BGN",
    name: "Bulgarian Lev",
    symbolNative: "\u043B\u0432.",
    decimalDigits: 2,
    rounding: 0,
    code: "BGN",
    namePlural: "Bulgarian leva"
  },
  {
    symbol: "BD",
    name: "Bahraini Dinar",
    symbolNative: "\u062F.\u0628.\u200F",
    decimalDigits: 3,
    rounding: 0,
    code: "BHD",
    namePlural: "Bahraini dinars"
  },
  {
    symbol: "FBu",
    name: "Burundian Franc",
    symbolNative: "FBu",
    decimalDigits: 0,
    rounding: 0,
    code: "BIF",
    namePlural: "Burundian francs"
  },
  {
    symbol: "BN$",
    name: "Brunei Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "BND",
    namePlural: "Brunei dollars"
  },
  {
    symbol: "Bs",
    name: "Bolivian Boliviano",
    symbolNative: "Bs",
    decimalDigits: 2,
    rounding: 0,
    code: "BOB",
    namePlural: "Bolivian bolivianos"
  },
  {
    symbol: "R$",
    name: "Brazilian Real",
    symbolNative: "R$",
    decimalDigits: 2,
    rounding: 0,
    code: "BRL",
    namePlural: "Brazilian reals"
  },
  {
    symbol: "BWP",
    name: "Botswanan Pula",
    symbolNative: "P",
    decimalDigits: 2,
    rounding: 0,
    code: "BWP",
    namePlural: "Botswanan pulas"
  },
  {
    symbol: "Br",
    name: "Belarusian Ruble",
    symbolNative: "\u0440\u0443\u0431.",
    decimalDigits: 2,
    rounding: 0,
    code: "BYN",
    namePlural: "Belarusian rubles"
  },
  {
    symbol: "BZ$",
    name: "Belize Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "BZD",
    namePlural: "Belize dollars"
  },
  {
    symbol: "CDF",
    name: "Congolese Franc",
    symbolNative: "FrCD",
    decimalDigits: 2,
    rounding: 0,
    code: "CDF",
    namePlural: "Congolese francs"
  },
  {
    symbol: "CHF",
    name: "Swiss Franc",
    symbolNative: "CHF",
    decimalDigits: 2,
    rounding: 0.05,
    code: "CHF",
    namePlural: "Swiss francs"
  },
  {
    symbol: "CL$",
    name: "Chilean Peso",
    symbolNative: "$",
    decimalDigits: 0,
    rounding: 0,
    code: "CLP",
    namePlural: "Chilean pesos"
  },
  {
    symbol: "CN\xA5",
    name: "Chinese Yuan",
    symbolNative: "CN\xA5",
    decimalDigits: 2,
    rounding: 0,
    code: "CNY",
    namePlural: "Chinese yuan"
  },
  {
    symbol: "CO$",
    name: "Colombian Peso",
    symbolNative: "$",
    decimalDigits: 0,
    rounding: 0,
    code: "COP",
    namePlural: "Colombian pesos"
  },
  {
    symbol: "\u20A1",
    name: "Costa Rican Col\xF3n",
    symbolNative: "\u20A1",
    decimalDigits: 0,
    rounding: 0,
    code: "CRC",
    namePlural: "Costa Rican col\xF3ns"
  },
  {
    symbol: "CV$",
    name: "Cape Verdean Escudo",
    symbolNative: "CV$",
    decimalDigits: 2,
    rounding: 0,
    code: "CVE",
    namePlural: "Cape Verdean escudos"
  },
  {
    symbol: "K\u010D",
    name: "Czech Republic Koruna",
    symbolNative: "K\u010D",
    decimalDigits: 2,
    rounding: 0,
    code: "CZK",
    namePlural: "Czech Republic korunas"
  },
  {
    symbol: "Fdj",
    name: "Djiboutian Franc",
    symbolNative: "Fdj",
    decimalDigits: 0,
    rounding: 0,
    code: "DJF",
    namePlural: "Djiboutian francs"
  },
  {
    symbol: "Dkr",
    name: "Danish Krone",
    symbolNative: "kr",
    decimalDigits: 2,
    rounding: 0,
    code: "DKK",
    namePlural: "Danish kroner"
  },
  {
    symbol: "RD$",
    name: "Dominican Peso",
    symbolNative: "RD$",
    decimalDigits: 2,
    rounding: 0,
    code: "DOP",
    namePlural: "Dominican pesos"
  },
  {
    symbol: "DA",
    name: "Algerian Dinar",
    symbolNative: "\u062F.\u062C.\u200F",
    decimalDigits: 2,
    rounding: 0,
    code: "DZD",
    namePlural: "Algerian dinars"
  },
  {
    symbol: "Ekr",
    name: "Estonian Kroon",
    symbolNative: "kr",
    decimalDigits: 2,
    rounding: 0,
    code: "EEK",
    namePlural: "Estonian kroons"
  },
  {
    symbol: "EGP",
    name: "Egyptian Pound",
    symbolNative: "\u062C.\u0645.\u200F",
    decimalDigits: 2,
    rounding: 0,
    code: "EGP",
    namePlural: "Egyptian pounds"
  },
  {
    symbol: "Nfk",
    name: "Eritrean Nakfa",
    symbolNative: "Nfk",
    decimalDigits: 2,
    rounding: 0,
    code: "ERN",
    namePlural: "Eritrean nakfas"
  },
  {
    symbol: "Br",
    name: "Ethiopian Birr",
    symbolNative: "Br",
    decimalDigits: 2,
    rounding: 0,
    code: "ETB",
    namePlural: "Ethiopian birrs"
  },
  {
    symbol: "\xA3",
    name: "British Pound Sterling",
    symbolNative: "\xA3",
    decimalDigits: 2,
    rounding: 0,
    code: "GBP",
    namePlural: "British pounds sterling"
  },
  {
    symbol: "GEL",
    name: "Georgian Lari",
    symbolNative: "GEL",
    decimalDigits: 2,
    rounding: 0,
    code: "GEL",
    namePlural: "Georgian laris"
  },
  {
    symbol: "GH\u20B5",
    name: "Ghanaian Cedi",
    symbolNative: "GH\u20B5",
    decimalDigits: 2,
    rounding: 0,
    code: "GHS",
    namePlural: "Ghanaian cedis"
  },
  {
    symbol: "FG",
    name: "Guinean Franc",
    symbolNative: "FG",
    decimalDigits: 0,
    rounding: 0,
    code: "GNF",
    namePlural: "Guinean francs"
  },
  {
    symbol: "GTQ",
    name: "Guatemalan Quetzal",
    symbolNative: "Q",
    decimalDigits: 2,
    rounding: 0,
    code: "GTQ",
    namePlural: "Guatemalan quetzals"
  },
  {
    symbol: "HK$",
    name: "Hong Kong Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "HKD",
    namePlural: "Hong Kong dollars"
  },
  {
    symbol: "HNL",
    name: "Honduran Lempira",
    symbolNative: "L",
    decimalDigits: 2,
    rounding: 0,
    code: "HNL",
    namePlural: "Honduran lempiras"
  },
  {
    symbol: "kn",
    name: "Croatian Kuna",
    symbolNative: "kn",
    decimalDigits: 2,
    rounding: 0,
    code: "HRK",
    namePlural: "Croatian kunas"
  },
  {
    symbol: "Ft",
    name: "Hungarian Forint",
    symbolNative: "Ft",
    decimalDigits: 0,
    rounding: 0,
    code: "HUF",
    namePlural: "Hungarian forints"
  },
  {
    symbol: "Rp",
    name: "Indonesian Rupiah",
    symbolNative: "Rp",
    decimalDigits: 0,
    rounding: 0,
    code: "IDR",
    namePlural: "Indonesian rupiahs"
  },
  {
    symbol: "\u20AA",
    name: "Israeli New Sheqel",
    symbolNative: "\u20AA",
    decimalDigits: 2,
    rounding: 0,
    code: "ILS",
    namePlural: "Israeli new sheqels"
  },
  {
    symbol: "Rs",
    name: "Indian Rupee",
    symbolNative: "\u099F\u0995\u09BE",
    decimalDigits: 2,
    rounding: 0,
    code: "INR",
    namePlural: "Indian rupees"
  },
  {
    symbol: "IQD",
    name: "Iraqi Dinar",
    symbolNative: "\u062F.\u0639.\u200F",
    decimalDigits: 0,
    rounding: 0,
    code: "IQD",
    namePlural: "Iraqi dinars"
  },
  {
    symbol: "IRR",
    name: "Iranian Rial",
    symbolNative: "\uFDFC",
    decimalDigits: 0,
    rounding: 0,
    code: "IRR",
    namePlural: "Iranian rials"
  },
  {
    symbol: "Ikr",
    name: "Icelandic Kr\xF3na",
    symbolNative: "kr",
    decimalDigits: 0,
    rounding: 0,
    code: "ISK",
    namePlural: "Icelandic kr\xF3nur"
  },
  {
    symbol: "J$",
    name: "Jamaican Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "JMD",
    namePlural: "Jamaican dollars"
  },
  {
    symbol: "JD",
    name: "Jordanian Dinar",
    symbolNative: "\u062F.\u0623.\u200F",
    decimalDigits: 3,
    rounding: 0,
    code: "JOD",
    namePlural: "Jordanian dinars"
  },
  {
    symbol: "\xA5",
    name: "Japanese Yen",
    symbolNative: "\uFFE5",
    decimalDigits: 0,
    rounding: 0,
    code: "JPY",
    namePlural: "Japanese yen"
  },
  {
    symbol: "Ksh",
    name: "Kenyan Shilling",
    symbolNative: "Ksh",
    decimalDigits: 2,
    rounding: 0,
    code: "KES",
    namePlural: "Kenyan shillings"
  },
  {
    symbol: "KHR",
    name: "Cambodian Riel",
    symbolNative: "\u17DB",
    decimalDigits: 2,
    rounding: 0,
    code: "KHR",
    namePlural: "Cambodian riels"
  },
  {
    symbol: "CF",
    name: "Comorian Franc",
    symbolNative: "FC",
    decimalDigits: 0,
    rounding: 0,
    code: "KMF",
    namePlural: "Comorian francs"
  },
  {
    symbol: "\u20A9",
    name: "South Korean Won",
    symbolNative: "\u20A9",
    decimalDigits: 0,
    rounding: 0,
    code: "KRW",
    namePlural: "South Korean won"
  },
  {
    symbol: "KD",
    name: "Kuwaiti Dinar",
    symbolNative: "\u062F.\u0643.\u200F",
    decimalDigits: 3,
    rounding: 0,
    code: "KWD",
    namePlural: "Kuwaiti dinars"
  },
  {
    symbol: "KZT",
    name: "Kazakhstani Tenge",
    symbolNative: "\u0442\u04A3\u0433.",
    decimalDigits: 2,
    rounding: 0,
    code: "KZT",
    namePlural: "Kazakhstani tenges"
  },
  {
    symbol: "LB\xA3",
    name: "Lebanese Pound",
    symbolNative: "\u0644.\u0644.\u200F",
    decimalDigits: 0,
    rounding: 0,
    code: "LBP",
    namePlural: "Lebanese pounds"
  },
  {
    symbol: "SLRs",
    name: "Sri Lankan Rupee",
    symbolNative: "SL Re",
    decimalDigits: 2,
    rounding: 0,
    code: "LKR",
    namePlural: "Sri Lankan rupees"
  },
  {
    symbol: "Lt",
    name: "Lithuanian Litas",
    symbolNative: "Lt",
    decimalDigits: 2,
    rounding: 0,
    code: "LTL",
    namePlural: "Lithuanian litai"
  },
  {
    symbol: "Ls",
    name: "Latvian Lats",
    symbolNative: "Ls",
    decimalDigits: 2,
    rounding: 0,
    code: "LVL",
    namePlural: "Latvian lati"
  },
  {
    symbol: "LD",
    name: "Libyan Dinar",
    symbolNative: "\u062F.\u0644.\u200F",
    decimalDigits: 3,
    rounding: 0,
    code: "LYD",
    namePlural: "Libyan dinars"
  },
  {
    symbol: "MAD",
    name: "Moroccan Dirham",
    symbolNative: "\u062F.\u0645.\u200F",
    decimalDigits: 2,
    rounding: 0,
    code: "MAD",
    namePlural: "Moroccan dirhams"
  },
  {
    symbol: "MDL",
    name: "Moldovan Leu",
    symbolNative: "MDL",
    decimalDigits: 2,
    rounding: 0,
    code: "MDL",
    namePlural: "Moldovan lei"
  },
  {
    symbol: "MGA",
    name: "Malagasy Ariary",
    symbolNative: "MGA",
    decimalDigits: 0,
    rounding: 0,
    code: "MGA",
    namePlural: "Malagasy Ariaries"
  },
  {
    symbol: "MKD",
    name: "Macedonian Denar",
    symbolNative: "MKD",
    decimalDigits: 2,
    rounding: 0,
    code: "MKD",
    namePlural: "Macedonian denari"
  },
  {
    symbol: "MMK",
    name: "Myanma Kyat",
    symbolNative: "K",
    decimalDigits: 0,
    rounding: 0,
    code: "MMK",
    namePlural: "Myanma kyats"
  },
  {
    symbol: "MOP$",
    name: "Macanese Pataca",
    symbolNative: "MOP$",
    decimalDigits: 2,
    rounding: 0,
    code: "MOP",
    namePlural: "Macanese patacas"
  },
  {
    symbol: "MURs",
    name: "Mauritian Rupee",
    symbolNative: "MURs",
    decimalDigits: 0,
    rounding: 0,
    code: "MUR",
    namePlural: "Mauritian rupees"
  },
  {
    symbol: "MX$",
    name: "Mexican Peso",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "MXN",
    namePlural: "Mexican pesos"
  },
  {
    symbol: "RM",
    name: "Malaysian Ringgit",
    symbolNative: "RM",
    decimalDigits: 2,
    rounding: 0,
    code: "MYR",
    namePlural: "Malaysian ringgits"
  },
  {
    symbol: "MTn",
    name: "Mozambican Metical",
    symbolNative: "MTn",
    decimalDigits: 2,
    rounding: 0,
    code: "MZN",
    namePlural: "Mozambican meticals"
  },
  {
    symbol: "N$",
    name: "Namibian Dollar",
    symbolNative: "N$",
    decimalDigits: 2,
    rounding: 0,
    code: "NAD",
    namePlural: "Namibian dollars"
  },
  {
    symbol: "\u20A6",
    name: "Nigerian Naira",
    symbolNative: "\u20A6",
    decimalDigits: 2,
    rounding: 0,
    code: "NGN",
    namePlural: "Nigerian nairas"
  },
  {
    symbol: "C$",
    name: "Nicaraguan C\xF3rdoba",
    symbolNative: "C$",
    decimalDigits: 2,
    rounding: 0,
    code: "NIO",
    namePlural: "Nicaraguan c\xF3rdobas"
  },
  {
    symbol: "Nkr",
    name: "Norwegian Krone",
    symbolNative: "kr",
    decimalDigits: 2,
    rounding: 0,
    code: "NOK",
    namePlural: "Norwegian kroner"
  },
  {
    symbol: "NPRs",
    name: "Nepalese Rupee",
    symbolNative: "\u0928\u0947\u0930\u0942",
    decimalDigits: 2,
    rounding: 0,
    code: "NPR",
    namePlural: "Nepalese rupees"
  },
  {
    symbol: "NZ$",
    name: "New Zealand Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "NZD",
    namePlural: "New Zealand dollars"
  },
  {
    symbol: "OMR",
    name: "Omani Rial",
    symbolNative: "\u0631.\u0639.\u200F",
    decimalDigits: 3,
    rounding: 0,
    code: "OMR",
    namePlural: "Omani rials"
  },
  {
    symbol: "B/.",
    name: "Panamanian Balboa",
    symbolNative: "B/.",
    decimalDigits: 2,
    rounding: 0,
    code: "PAB",
    namePlural: "Panamanian balboas"
  },
  {
    symbol: "S/.",
    name: "Peruvian Nuevo Sol",
    symbolNative: "S/.",
    decimalDigits: 2,
    rounding: 0,
    code: "PEN",
    namePlural: "Peruvian nuevos soles"
  },
  {
    symbol: "\u20B1",
    name: "Philippine Peso",
    symbolNative: "\u20B1",
    decimalDigits: 2,
    rounding: 0,
    code: "PHP",
    namePlural: "Philippine pesos"
  },
  {
    symbol: "PKRs",
    name: "Pakistani Rupee",
    symbolNative: "\u20A8",
    decimalDigits: 0,
    rounding: 0,
    code: "PKR",
    namePlural: "Pakistani rupees"
  },
  {
    symbol: "z\u0142",
    name: "Polish Zloty",
    symbolNative: "z\u0142",
    decimalDigits: 2,
    rounding: 0,
    code: "PLN",
    namePlural: "Polish zlotys"
  },
  {
    symbol: "\u20B2",
    name: "Paraguayan Guarani",
    symbolNative: "\u20B2",
    decimalDigits: 0,
    rounding: 0,
    code: "PYG",
    namePlural: "Paraguayan guaranis"
  },
  {
    symbol: "QR",
    name: "Qatari Rial",
    symbolNative: "\u0631.\u0642.\u200F",
    decimalDigits: 2,
    rounding: 0,
    code: "QAR",
    namePlural: "Qatari rials"
  },
  {
    symbol: "RON",
    name: "Romanian Leu",
    symbolNative: "RON",
    decimalDigits: 2,
    rounding: 0,
    code: "RON",
    namePlural: "Romanian lei"
  },
  {
    symbol: "din.",
    name: "Serbian Dinar",
    symbolNative: "\u0434\u0438\u043D.",
    decimalDigits: 0,
    rounding: 0,
    code: "RSD",
    namePlural: "Serbian dinars"
  },
  {
    symbol: "RUB",
    name: "Russian Ruble",
    symbolNative: "\u20BD.",
    decimalDigits: 2,
    rounding: 0,
    code: "RUB",
    namePlural: "Russian rubles"
  },
  {
    symbol: "RWF",
    name: "Rwandan Franc",
    symbolNative: "FR",
    decimalDigits: 0,
    rounding: 0,
    code: "RWF",
    namePlural: "Rwandan francs"
  },
  {
    symbol: "SR",
    name: "Saudi Riyal",
    symbolNative: "\u0631.\u0633.\u200F",
    decimalDigits: 2,
    rounding: 0,
    code: "SAR",
    namePlural: "Saudi riyals"
  },
  {
    symbol: "SDG",
    name: "Sudanese Pound",
    symbolNative: "SDG",
    decimalDigits: 2,
    rounding: 0,
    code: "SDG",
    namePlural: "Sudanese pounds"
  },
  {
    symbol: "Skr",
    name: "Swedish Krona",
    symbolNative: "kr",
    decimalDigits: 2,
    rounding: 0,
    code: "SEK",
    namePlural: "Swedish kronor"
  },
  {
    symbol: "S$",
    name: "Singapore Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "SGD",
    namePlural: "Singapore dollars"
  },
  {
    symbol: "Ssh",
    name: "Somali Shilling",
    symbolNative: "Ssh",
    decimalDigits: 0,
    rounding: 0,
    code: "SOS",
    namePlural: "Somali shillings"
  },
  {
    symbol: "SY\xA3",
    name: "Syrian Pound",
    symbolNative: "\u0644.\u0633.\u200F",
    decimalDigits: 0,
    rounding: 0,
    code: "SYP",
    namePlural: "Syrian pounds"
  },
  {
    symbol: "\u0E3F",
    name: "Thai Baht",
    symbolNative: "\u0E3F",
    decimalDigits: 2,
    rounding: 0,
    code: "THB",
    namePlural: "Thai baht"
  },
  {
    symbol: "DT",
    name: "Tunisian Dinar",
    symbolNative: "\u062F.\u062A.\u200F",
    decimalDigits: 3,
    rounding: 0,
    code: "TND",
    namePlural: "Tunisian dinars"
  },
  {
    symbol: "T$",
    name: "Tongan Pa\u02BBanga",
    symbolNative: "T$",
    decimalDigits: 2,
    rounding: 0,
    code: "TOP",
    namePlural: "Tongan pa\u02BBanga"
  },
  {
    symbol: "TL",
    name: "Turkish Lira",
    symbolNative: "TL",
    decimalDigits: 2,
    rounding: 0,
    code: "TRY",
    namePlural: "Turkish Lira"
  },
  {
    symbol: "TT$",
    name: "Trinidad and Tobago Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "TTD",
    namePlural: "Trinidad and Tobago dollars"
  },
  {
    symbol: "NT$",
    name: "New Taiwan Dollar",
    symbolNative: "NT$",
    decimalDigits: 2,
    rounding: 0,
    code: "TWD",
    namePlural: "New Taiwan dollars"
  },
  {
    symbol: "TSh",
    name: "Tanzanian Shilling",
    symbolNative: "TSh",
    decimalDigits: 0,
    rounding: 0,
    code: "TZS",
    namePlural: "Tanzanian shillings"
  },
  {
    symbol: "\u20B4",
    name: "Ukrainian Hryvnia",
    symbolNative: "\u20B4",
    decimalDigits: 2,
    rounding: 0,
    code: "UAH",
    namePlural: "Ukrainian hryvnias"
  },
  {
    symbol: "USh",
    name: "Ugandan Shilling",
    symbolNative: "USh",
    decimalDigits: 0,
    rounding: 0,
    code: "UGX",
    namePlural: "Ugandan shillings"
  },
  {
    symbol: "$U",
    name: "Uruguayan Peso",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "UYU",
    namePlural: "Uruguayan pesos"
  },
  {
    symbol: "UZS",
    name: "Uzbekistan Som",
    symbolNative: "UZS",
    decimalDigits: 0,
    rounding: 0,
    code: "UZS",
    namePlural: "Uzbekistan som"
  },
  {
    symbol: "Bs.F.",
    name: "Venezuelan Bol\xEDvar",
    symbolNative: "Bs.F.",
    decimalDigits: 2,
    rounding: 0,
    code: "VEF",
    namePlural: "Venezuelan bol\xEDvars"
  },
  {
    symbol: "\u20AB",
    name: "Vietnamese Dong",
    symbolNative: "\u20AB",
    decimalDigits: 0,
    rounding: 0,
    code: "VND",
    namePlural: "Vietnamese dong"
  },
  {
    symbol: "FCFA",
    name: "CFA Franc BEAC",
    symbolNative: "FCFA",
    decimalDigits: 0,
    rounding: 0,
    code: "XAF",
    namePlural: "CFA francs BEAC"
  },
  {
    symbol: "CFA",
    name: "CFA Franc BCEAO",
    symbolNative: "CFA",
    decimalDigits: 0,
    rounding: 0,
    code: "XOF",
    namePlural: "CFA francs BCEAO"
  },
  {
    symbol: "YR",
    name: "Yemeni Rial",
    symbolNative: "\u0631.\u064A.\u200F",
    decimalDigits: 0,
    rounding: 0,
    code: "YER",
    namePlural: "Yemeni rials"
  },
  {
    symbol: "R",
    name: "South African Rand",
    symbolNative: "R",
    decimalDigits: 2,
    rounding: 0,
    code: "ZAR",
    namePlural: "South African rand"
  },
  {
    symbol: "ZK",
    name: "Zambian Kwacha",
    symbolNative: "ZK",
    decimalDigits: 0,
    rounding: 0,
    code: "ZMK",
    namePlural: "Zambian kwachas"
  },
  {
    symbol: "ZWL$",
    name: "Zimbabwean Dollar",
    symbolNative: "ZWL$",
    decimalDigits: 0,
    rounding: 0,
    code: "ZWL",
    namePlural: "Zimbabwean Dollar"
  }
];

// src/fields/currency/currency.interface.ts
var CurrencyDisplayFormat = /* @__PURE__ */ ((CurrencyDisplayFormat2) => {
  CurrencyDisplayFormat2["COMMA"] = "commas-separator";
  CurrencyDisplayFormat2["THOUSAND"] = "thousand-unit";
  return CurrencyDisplayFormat2;
})(CurrencyDisplayFormat || {});
var FieldCurrencyInitialDataValidator = import_zod.z.number().nullable().default(null);
var FieldCurrencyParamsValidator = import_zod.z.object({
  currency: import_zod.z.enum((0, import_lodash.map)(CURRENCIES, "symbol")).nullable().default(null),
  decimalPlaces: import_zod.z.coerce.number().int().gte(0).lte(6).nullable().default(null),
  format: import_zod.z.nativeEnum(CurrencyDisplayFormat).nullable().default(null),
  allowNegative: import_zod.z.boolean().default(false)
}).default({
  currency: null,
  decimalPlaces: null,
  format: null,
  allowNegative: false
});
var FieldCurrencyDataValidator = FieldCurrencyInitialDataValidator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldCurrencyDataValidator,
  FieldCurrencyInitialDataValidator,
  FieldCurrencyParamsValidator
});
