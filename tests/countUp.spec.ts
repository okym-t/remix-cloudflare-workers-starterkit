import { test, expect } from './setup'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('count up', async ({ page }) => {
  await page.locator('data-testid=count-up-button').click()
  await expect(page.locator('data-testid=count')).toContainText('1')
})
