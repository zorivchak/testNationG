import { test, expect } from '@playwright/test';
import MainPage from '../pageObject/mainPage';
import MoviePage from '../pageObject/moviePage';
import { enumMovies } from '../helpers/enumMovies';


test('Verify the movie \'The Rise and fall of the Maya\' is opening', { tag: '@smoke' }, async ({ page }) => {
    // go to main page  
    await page.goto('');
  
    // open current movie
    const mainPage: MainPage = new MainPage(page);
    await mainPage.openMyMovie(enumMovies.TheRiseAndFallOfTheMaya);
  
    //click button watch movie
    await mainPage.clickButtonWatchNowForActiveMovie();

    //verify the logo from movie page is visible
    const moviePage: MoviePage = new MoviePage(page);
    expect(moviePage.mainLogo).toBeVisible()
 });
