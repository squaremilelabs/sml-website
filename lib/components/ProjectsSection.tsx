import { Chip, Divider, Image, Link, ScrollShadow } from "@nextui-org/react"
import Box from "./Box"

type Project = {
  imgSrc: string
  title: string
  description: string
  link: string
  linkTitle: string
  statusText: string
  statusColor: "default" | "warning" | "success"
}

const projects: Project[] = [
  {
    title: "backboard",
    imgSrc: "/backboard-logo.png",
    description: "A productivity system built for the individual contributor.",
    linkTitle: "Read Intro (Notion)",
    link: "https://squaremilelabs.notion.site/Intro-to-Backboard-1a9aece5ba118082ae09f3c876fe76a8?pvs=4",
    statusText: "public beta",
    statusColor: "warning",
  },
  {
    title: "turbo-starter",
    imgSrc:
      "https://user-images.githubusercontent.com/4060187/196936104-5797972c-ab10-4834-bd61-0d1e5f442c9c.png",
    description:
      "A monorepo starter kit for developing internal business software with a fine-tuned techstack.",
    link: "https://github.com/squaremilelabs/turbo-starter",
    linkTitle: "View in GitHub",
    statusText: "developing",
    statusColor: "default",
  },
]

export default function ProjectsSection() {
  return (
    <ScrollShadow
      orientation="vertical"
      className="grid h-full w-full grid-cols-1 content-start items-start justify-stretch justify-items-stretch gap-4 overflow-auto p-4 pb-8 sm:grid-cols-2 lg:pt-8"
    >
      {projects.map((project) => (
        <Box key={project.title} className="p-0">
          <div className="flex flex-row items-center space-x-2 border-b-1 border-slate-200 p-2 dark:border-slate-800">
            <Image
              alt={project.title}
              src={project.imgSrc}
              classNames={{ img: "w-[20px] h-[20px]" }}
            />
            <p className="flex-grow text-lg">
              <span className="text-base text-primary">@sml</span>
              <span className="text-base text-default-500">/</span>
              <span className="text-lg font-semibold">{project.title}</span>
            </p>
            <Chip variant="dot" color={project.statusColor} size="sm">
              {project.statusText}
            </Chip>
          </div>
          <div className="grow border-b border-slate-200 p-2 dark:border-slate-800">
            <p className="text-sm">{project.description}</p>
          </div>
          <div className="flex p-2">
            <Link
              href={project.link}
              className="text-xs text-default-500 underline"
              target="_blank"
            >
              {project.linkTitle}
            </Link>
          </div>
        </Box>
      ))}
    </ScrollShadow>
  )
}
