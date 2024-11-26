import { ScrollShadow } from "@nextui-org/react"
import {
  AppWindow,
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ChartPie,
  HandHeart,
  Landmark,
  PlugZap,
  Rocket,
} from "lucide-react"
import Box from "./Box"

export default function ServicesSection() {
  const services: { title: string; Icon: typeof AppWindow; content: string }[] = [
    {
      title: "Internal Software Development",
      Icon: AppWindow,
      content: "Custom-built SaaS apps for your business ops.",
    },

    {
      title: "APIs & Automations",
      Icon: PlugZap,
      content: "Backend automations to streamline your tech stack.",
    },
    {
      title: "Data Analytics",
      Icon: ChartPie,
      content: "Data engineering & report development for business intelligence.",
    },
    {
      title: "AI Implementations",
      Icon: BrainCircuit,
      content: "Bespoke AI solutions built with OpenAI.",
    },
    {
      title: "MVP Development",
      Icon: Rocket,
      content: "Speedy design & development for your MVP launch.",
    },
    {
      title: "Productivity Improvement",
      Icon: BriefcaseBusiness,
      content: "Tool & workflow implementations for operational excellence.",
    },
    {
      title: "Accounting",
      Icon: Landmark,
      content: "Monthly bookkeeping & day-to-day AP / AR management.",
    },
    {
      title: "FP&A",
      Icon: ChartNoAxesCombined,
      content: "Robust financial models & operating budgets.",
    },
    {
      title: "Digital Customer Experience",
      Icon: HandHeart,
      content: "Loyalty & gift card programs, customer portals, and CRM platforms.",
    },
  ]

  return (
    <ScrollShadow
      orientation="vertical"
      className="grid h-full w-full grid-cols-1 content-start items-stretch justify-stretch justify-items-stretch gap-4 overflow-auto p-4 pb-8 sm:grid-cols-2 lg:pt-8"
    >
      {services.map((service) => {
        return (
          <Box
            key={service.title}
            className="flex w-full flex-col items-stretch p-0 !backdrop-blur-md"
          >
            <div className="flex items-center justify-between space-x-4 rounded rounded-b-none border-b border-slate-200 px-4 py-2 dark:border-slate-800">
              <div className="text-primary">
                <service.Icon />
              </div>
              <p className="grow font-semibold">{service.title}</p>
            </div>
            <div className="rounded p-4 text-sm">{service.content}</div>
          </Box>
        )
      })}
    </ScrollShadow>
  )
}
