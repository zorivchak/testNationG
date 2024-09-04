import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";
import { getMovieIndex } from "../helpers/enumMovies";

class MainPage extends BasePage{
    nextButtonMovie: Locator;
    activeButtonMovie: Locator;
    buttonWatchNowForActiveMovie: Locator;
   
    constructor(page: Page){
        super(page);
        this.nextButtonMovie = this.page.locator('svg[class*="TileStackCarousel__Arrow__Icon"]').last()
        this.buttonWatchNowForActiveMovie = this.page.locator('//div[contains(@class, "SwiperSlide--active")]//a[contains(@class, "Button")]');
    }

    async clickNextButtonMovie(){
        await this.nextButtonMovie.click();
    }

    async openMyMovie(movieName: string){
        for (let i = 0; i < getMovieIndex(movieName); i++){
            await this.nextButtonMovie.click();
        }
    }

    async clickButtonWatchNowForActiveMovie(){
        await this.buttonWatchNowForActiveMovie.click();
    }
}

export default MainPage;