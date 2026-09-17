import type { Locale } from "./i18n/locales";

export type ProjectCategory = "residential" | "commercial";

export type Project = {
  slug: string;
  image: string;
  place: string;
  category: ProjectCategory;
  label: Record<Locale, string>;
};

export const projects: Project[] = [
  {
    slug: "living-sao-francisco-de-assis",
    image: "/images/portfolio/living-sao-francisco-de-assis-rs.jpg",
    place: "São Francisco de Assis, RS",
    category: "residential",
    label: { pt: "Living", en: "Living room", it: "Soggiorno" },
  },
  {
    slug: "living-santa-maria",
    image: "/images/portfolio/living-santa-maria-rs.jpg",
    place: "Santa Maria, RS",
    category: "residential",
    label: { pt: "Sala de estar", en: "Living room", it: "Soggiorno" },
  },
  {
    slug: "apartamento-royal",
    image: "/images/portfolio/apartamento-royal-santa-maria-rs.jpg",
    place: "Santa Maria, RS",
    category: "residential",
    label: { pt: "Apartamento Royal", en: "Royal Apartment", it: "Appartamento Royal" },
  },
  {
    slug: "sala-de-estar-goiania",
    image: "/images/portfolio/sala-de-estar-goiania-go.jpg",
    place: "Goiânia, GO",
    category: "residential",
    label: { pt: "Sala de estar", en: "Living room", it: "Soggiorno" },
  },
  {
    slug: "cozinha-santa-maria",
    image: "/images/portfolio/cozinha-santa-maria-rs.jpg",
    place: "Santa Maria, RS",
    category: "residential",
    label: { pt: "Cozinha", en: "Kitchen", it: "Cucina" },
  },
  {
    slug: "cozinha-porto-alegre",
    image: "/images/portfolio/cozinha-porto-alegre-rs.jpg",
    place: "Porto Alegre, RS",
    category: "residential",
    label: { pt: "Cozinha", en: "Kitchen", it: "Cucina" },
  },
  {
    slug: "quarto-mezanino-garopaba",
    image: "/images/portfolio/quarto-mezanino-garopaba-sc.jpg",
    place: "Garopaba, SC",
    category: "residential",
    label: { pt: "Quarto mezanino", en: "Mezzanine bedroom", it: "Camera mezzanino" },
  },
  {
    slug: "recepcao-el-mundo-seguros",
    image: "/images/portfolio/recepcao-el-mundo-seguros-santa-maria-rs.jpg",
    place: "Santa Maria, RS",
    category: "commercial",
    label: {
      pt: "Recepção — El Mundo Seguros",
      en: "Reception — El Mundo Seguros",
      it: "Reception — El Mundo Seguros",
    },
  },
  {
    slug: "banheiro-el-mundo-seguros",
    image: "/images/portfolio/banheiro-el-mundo-seguros-santa-maria-rs.jpg",
    place: "Santa Maria, RS",
    category: "commercial",
    label: { pt: "Banheiro — El Mundo Seguros", en: "Bathroom — El Mundo Seguros", it: "Bagno — El Mundo Seguros" },
  },
];
