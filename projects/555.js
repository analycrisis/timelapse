module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture }) {
    await page.setViewport({ width: 1280, height: 720 })

    await page.goto('https://tinvv.github.io/555/')
    await capture(page, 'home')
  },
})
