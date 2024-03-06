import { expect } from "chai";
import { HomeScreen } from "../../../screens/homeScreen";
import { loginDetails } from "../../../resources/customTypes/loginDetails";
import * as credentials from "../../../resources/testdata/credentials.json";
import { LoggerHelper } from "../../../../customLogger/loggerHelper";
import { LoginUtil } from "../../../utilities/loginUtil";

let homeScreen: HomeScreen;
let loginUtil: LoginUtil;

const specName: string = 'Login test scenario';

describe("Login to the application", () => {

    before(async () => {
        homeScreen = new HomeScreen();
        loginUtil = new LoginUtil();
        LoggerHelper.setupLogger(specName);
    });

    it('Login to the app with valid credentials', async () => {
        
        const data: loginDetails = credentials.credentialsSets.validCredentials as loginDetails;

        await loginUtil.performLogin(data.username, data.password, data.otp);
        await homeScreen.navigateToProfile();

        const userName = await homeScreen.getUserNameInTitle();
        expect(userName).to.equal("Jack Sparrow");
    });

});