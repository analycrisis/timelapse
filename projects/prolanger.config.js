module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture }) {
    await page.setViewport({ width: 1280, height: 720 })

    await page.goto('https://prolanger.wrong-lang.click/')
    await capture(page, 'home')
  },
})
