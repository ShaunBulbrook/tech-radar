const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const markdown = require('markdown-it')()

const baseDirectory = './tech-radar-source/'
const outputJSONFilename = 'src/tech-radar-source.json'

const processMarkdown = () => {
  fs.readdir(baseDirectory, {}, (error, files) => {
    const convertedMarkdown = files.map((fileName) => matter(fs.readFileSync(baseDirectory + fileName)))
    const techRadarReadyList = convertedMarkdown.reduce(
      (accumulator, { data: { name, ring, quadrant, isNew }, content }) => {
        return [
          ...accumulator,
          {
            name,
            ring,
            quadrant,
            isNew,
            description: markdown.render(content),
          },
        ]
      },
      [],
    )

    fs.writeFile(`${outputJSONFilename}`, JSON.stringify(techRadarReadyList), () => {})
  })
}
console.log(processMarkdown())
