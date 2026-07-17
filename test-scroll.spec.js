const { test, expect } = require('@playwright/test');

test('NPCBRO website scroll test', async ({ page }) => {
  await page.goto('file:///Users/youngchop/Desktop/NPCBRO_SITE/index.html');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  // Test hero section is visible
  const hero = page.locator('.hero');
  await expect(hero).toBeVisible();
  
  // Scroll to story section
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(1000);
  
  // Check story section
  const story = page.locator('#story');
  await expect(story).toBeVisible();
  
  // Scroll to universe section
  await page.evaluate(() => window.scrollTo(0, 1500));
  await page.waitForTimeout(1000);
  
  // Check universe section
  const universe = page.locator('#universe');
  await expect(universe).toBeVisible();
  
  // Scroll to games section
  await page.evaluate(() => window.scrollTo(0, 2500));
  await page.waitForTimeout(1000);
  
  // Check games section
  const games = page.locator('#games');
  await expect(games).toBeVisible();
  
  // Scroll to community section
  await page.evaluate(() => window.scrollTo(0, 3500));
  await page.waitForTimeout(1000);
  
  // Check community section
  const community = page.locator('#community');
  await expect(community).toBeVisible();
  
  // Check stats are visible
  const stats = page.locator('.stats-grid');
  await expect(stats).toBeVisible();
  
  // Check countdown timer
  const countdown = page.locator('.countdown-timer');
  await expect(countdown).toBeVisible();
  
  // Check notify form
  const notifyForm = page.locator('.notify-form');
  await expect(notifyForm).toBeVisible();
  
  // Test notify form
  await page.fill('#notify-email', 'test@example.com');
  await page.click('.notify-btn');
  
  // Scroll to bottom
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);
  
  console.log('Scroll test completed successfully!');
});
