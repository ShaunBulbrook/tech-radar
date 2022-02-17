const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const markdown = require('markdown-it')()

const baseDirectory = './tech-radar-source/'
const outputJSONFilename = 'dist/tech-radar-source.json'

const processMarkdown = () => {
  const ringOrder = ['adopt', 'trial', 'assess', 'hold']
  fs.readdir(baseDirectory, {}, (error, files) => {
    const convertedMarkdown = files.map((fileName) => matter(fs.readFileSync(baseDirectory + fileName)))
    const techRadarReadyList = convertedMarkdown
      .reduce((accumulator, { data: { name, ring, quadrant, isNew }, content }) => {
        return [
          ...accumulator,
          {
            name,
            ring,
            quadrant,
            isNew: isNew.toString().toUpperCase(),
            description: markdown.render(content),
          },
        ]
      }, [])
      .sort((a, b) => ringOrder.indexOf(a.ring) - ringOrder.indexOf(b.ring))

    fs.writeFile(`${outputJSONFilename}`, JSON.stringify(techRadarReadyList), () => {})
  })
}
console.log(processMarkdown())
