import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 class={`page-title ${displayClass ?? ""}`}>
      <a href={baseDir}>
        <image class="logo" src={`${baseDir}/Attachments/logo.svg`}></image>
      </a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}

.logo {
  width: 24pt;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
