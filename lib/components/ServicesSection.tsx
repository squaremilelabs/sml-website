import Icon from "@mdi/react"
import {
  mdiApplicationCog,
  mdiAutoMode,
  mdiBank,
  mdiBriefcase,
  mdiChartArc,
  mdiChartGantt,
  mdiOfficeBuilding,
  mdiRobot,
  mdiRobotHappy,
  mdiRocketLaunch,
} from "@mdi/js"
import { Link, ScrollShadow } from "@nextui-org/react"
import Box from "./Box"

export default function ServicesSection() {
  const services = [
    {
      title: "Internal Software Development",
      icon: mdiApplicationCog,
      content: "Custom-built SaaS apps for your business ops.",
    },
    {
      title: "Accounting",
      icon: mdiBank,
      content: "Monthly bookkeeping & day-to-day AP / AR management.",
    },
    {
      title: "FP&A",
      icon: mdiChartArc,
      content: "Robust financial models & operating budgets.",
    },
    {
      title: "AI Implementations",
      icon: mdiRobot,
      content: "Bespoke AI solutions built with OpenAI.",
    },
    {
      title: "APIs & Automations",
      icon: mdiAutoMode,
      content: "Backend automations to streamline your tech stack.",
    },
    {
      title: "Data Analytics",
      icon: mdiChartGantt,
      content: "Data engineering & report development for business intelligence.",
    },
    {
      title: "MVP Development",
      icon: mdiRocketLaunch,
      content: "Speedy design & development for your MVP launch.",
    },
    {
      title: "Productivity Improvement",
      icon: mdiBriefcase,
      content: "Tool & workflow implementations for operational excellence.",
    },
    {
      title: "Hoboken Office Space",
      icon: mdiOfficeBuilding,
      content: (
        <p>
          Short-term office space at{" "}
          <Link
            href="https://maps.app.goo.gl/12DtSA8DDi6mh3px9"
            className="text-sm"
            target="_blank"
          >
            5 Marine View Plaza
          </Link>
          .
        </p>
      ),
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
            className="flex w-full flex-col items-stretch p-0 shadow-medium !backdrop-blur-md"
          >
            <div className="flex items-center justify-between space-x-4 rounded rounded-b-none border-b border-slate-200 px-4 py-2 dark:border-slate-800">
              <Icon path={service.icon} className="w-6 shrink-0 text-primary" />
              <p className="grow font-semibold">{service.title}</p>
            </div>
            <div className="rounded p-4 text-sm">{service.content}</div>
          </Box>
        )
      })}
    </ScrollShadow>
  )
}
