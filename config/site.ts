import { NavItem } from "@/types"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
}

export const siteConfig: SiteConfig = {
  name: "TIM'S CHATBOT",
  description: "Talk with your PDFS",
  mainNav: []
}
