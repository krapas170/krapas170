import config from "./config.json";

// config.json is authored as a single-element array; unwrap it once here so the
// rest of the app never has to care about that shape.
const site = Array.isArray(config) ? config[0] : config;

export const GITHUB_USERNAME = site.username;
export const DISPLAY_NAME = site.name;
export const EMAIL = "krapas170@gmail.com";
export const WEBSITE = "https://krapas170.de";
export const LOCATION = "Allgäu, Deutschland";
export const MAIL_SUBJECT = "Kontakt über deine Website";

export const SOCIALS = [
  site.linkedin && {
    name: "LinkedIn",
    href: `https://linkedin.com/in/${site.linkedin}/`,
    icon: "fa-brands fa-linkedin-in",
  },
  {
    name: "GitHub",
    href: `https://github.com/${site.username}/`,
    icon: "fa-brands fa-github",
  },
  {
    name: "Facebook",
    href: "https://m.facebook.com/pascal.kray/",
    icon: "fa-brands fa-facebook",
  },
  site.twitter && {
    name: "Twitter",
    href: `https://twitter.com/${site.twitter}`,
    icon: "fa-brands fa-twitter",
  },
  site.medium && {
    name: "Medium",
    href: `https://medium.com/@${site.medium}/`,
    icon: "fa-brands fa-medium-m",
  },
  site.dribbble && {
    name: "Dribbble",
    href: `https://dribbble.com/${site.dribbble}`,
    icon: "fa-brands fa-dribbble",
  },
].filter(Boolean);

export const EMPLOYERS = [
  { name: "ID.KOM", href: "https://www.idkom.de/" },
  { name: "Kray IT Allgäu", href: "https://kray-allgaeu.de/" },
];

export default site;
