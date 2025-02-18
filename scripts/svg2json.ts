import { promises as fs } from 'node:fs'

import {
  cleanupSVG,
  importDirectory,
  isEmptyColor,
  parseColors,
  runSVGO,
} from '@iconify/tools'

// https://iconify.design/docs/libraries/tools/export/json.html
(async () => {
  const prefix = 'custom'
  // Import icons
  const iconSet = await importDirectory('svgs', {
    prefix,
  })

  console.log(`building ${prefix} icon ${iconSet.count()} icons...`)
  // Validate, clean up, fix palette and optimise
  iconSet.forEach((name, type) => {
    if (type !== 'icon') {
      return
    }

    const svg = iconSet.toSVG(name)
    if (!svg) {
      // Invalid icon
      iconSet.remove(name)
      return
    }

    // Clean up and optimise icons
    try {
      // Clean up icon code
      cleanupSVG(svg)

      // Assume icon is monotone: replace color with currentColor, add if missing
      // If icon is not monotone, remove this code
      parseColors(svg, {
        defaultColor: 'currentColor',
        callback: (_attrs, colorStr, color) => {
          return !color || isEmptyColor(color) ? colorStr : 'currentColor'
        },
      })

      // Optimise
      runSVGO(svg)
    }
    catch (err) {
      // Invalid icon
      console.error(`Error parsing ${name}:`, err)
      iconSet.remove(name)
      return
    }

    // Update icon
    iconSet.fromSVG(name, svg)
  })

  // Export as IconifyJSON
  const exported = `${JSON.stringify(iconSet.export(), null, '\t')}\n`

  const buildDist = `src/assets/${iconSet.prefix}.json`
  // Save to file
  await fs.writeFile(buildDist, exported, 'utf8')
  console.log(`build ${prefix} icon success to ${buildDist}!`)
})()
