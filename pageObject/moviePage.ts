import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

class MoviePage extends BasePage{
    mainLogo: Locator;
   
    constructor(page: Page){
        super(page);
        this.mainLogo = this.page.locator('img[class*=\'FloatLeft\']');
    }
}

export default MoviePage;