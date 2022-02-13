# Tech Radar with Markdown - Template

An extension of the the [thoughtworks build your own radar](https://github.com/thoughtworks/build-your-own-radar) project. This project template aims to see if staff might engage with and maintain a tech radar where the content is managed with markdown files in the repository.

If yes, it's likely that this will be re-written. - Use at your own risk.

Using this template, you should be able to maintain your library of tech radar items inside the [tech-radar-source](https://github.com/ShaunBulbrook/tech-radar/tree/main/tech-radar-source) folder. On commit, these will be built into a JSON file that can be parsed into a tech radar.

## How To Author items

Add markdown files to the tech-radar-source folder. One for each item you'd like to be rendered on the radar.

Each markdown file will require some front-matter so the right details can be added. The following properties are required:

- `name` The name of the item
- `ring` - The value of this places the item closer/further away from the center of the radar. Accepted values are:
  - `hold` This will place the item farthest from the center of the radar. Use this label on items that you are currently not using or recommending.
  - `assess` This will place the item closer than items marked as "hold". Use this to label items that you are assessing/reviewing.
  - `trial` This will place the item closer than items labelled "assess". Use this label on items that you are trialing.
  - `adopt` This will place the item in the central section of the radar. Use this label on items that you are actively using and recommend.
- `quadrant` You can use any label you'd like, _HOWEVER_ You _must_ use _exactly_ 4 categories across all items. Any more or less will result in the radar failing to render. The default values are:
  - `languages & frameworks`
  - `platforms`
  - `techniques`
  - `tools`
- `isNew` Use this to indicate if this item is new to your radar. This changes the way that your items will be displayed on the radar. Accepted values are:
  - `TRUE`
  - `FALSE`

The following is an example entry into the markdown file. The section populated with "Your content goes here" accepts markdown. Be sure to check how this renders in a browser!

```
---
name: NextJS
ring: adopt
quadrant: languages & frameworks
isNew: FALSE
---
Your content goes here.
```

## Development

Before starting development, ensure that you have requisite markdown files in the tech-radar-source folder.
There should be a minimum of 4. Each of these 4 should belong to a different quadrant. No more than 4 values should be used for the quardrant property across ALL items.

### Local

- Clone this repo then check it out.
- `pnpm i`
- `pnpm run dev` - to run application in localhost:8080. This will watch the .js and .css files and rebuild on file changes

### Publishing from a local machine

- `pnpm i`
- `pnpm run build`
- `pnpm run process-markdown`
- `pnpm run preview-dist`
