import async_regex_validate_of_password from "src/pages/validators/validate_password";
import async_regex_validate_of_username from "src/pages/validators/validate_username";
import async_regex_validate_of_email from "src/pages/validators/validate_email";
import warnedMeaasege from "src/service/errorMessageForFields";
import { handlerApiRegisterPOST } from "./handler_api";
import { BasisData, HandlerApiProps } from "src/interfaces";
import {APIPerson, APP_URL} from "src/interfaces";

/**
 * This function:
 *  - check the data from the form fields;
 *  - check the data by validation;
 *  - send data to the API;
 * @param event - event from the form
 * @returns 
 */
const handlerFormReger = async (event: React.MouseEvent): Promise<boolean> => {
    
    if (!(
        (event.target as HTMLElement).tagName.toLowerCase() === "button")
    ){
        return false;
    }
    event.preventDefault();
    let include = 0;
    
    /** 1. GET FIELDS FROM THE FORM */
    const currentTarget = (event.currentTarget as HTMLElement);
    await warnedMeaasege({include});
    const inputUserName = currentTarget.querySelector("input[placeholder='Имя пользователя']");
    const inputEmail = currentTarget.querySelector("input[type='email']");
    
    const inputPasswordDuplicateArr = currentTarget.querySelectorAll("input[type='password']");
    const inputPassword = inputPasswordDuplicateArr[0] as HTMLInputElement;                               
    const inputPasswordDuplicate = inputPasswordDuplicateArr[1] as HTMLInputElement;                               
    /** Check - we have value/data in the attribute 'value' of filed 'input' or nnot. */
    const fields = [inputUserName, inputEmail,
        inputPassword, inputPasswordDuplicate];
    const fieldsFilterArr = fields.filter((item) => (item as HTMLInputElement).value.length == 0);
    if (fieldsFilterArr.length > 0){
        /** WARNED MESSAGE WILL BE PUBLICATION */
        const labelNode = fieldsFilterArr[0]?.parentElement;
        const htmlContainer=(labelNode as HTMLElement);
        include = 1;
        await warnedMeaasege({htmlContainer, include});
        return false;
    }
    /** Simply? get the HTMLInputElement for type of checkbox  */
    const InputCheckbox = currentTarget.querySelector(".confirmation input[type='checkbox']");
    const htmlMinContainer = document.querySelector(".register_form") as HTMLElement;
    // 
    /** 2. CHECKING - DATA FROM VALUES OF FIELD ('INPUT'). iT EQUAL FOR THE REGEX TEMPLETE OR NOT */
    Promise.allSettled([
            async_regex_validate_of_username((inputUserName as HTMLInputElement).value),
            async_regex_validate_of_email((inputEmail as HTMLInputElement).value),
            async_regex_validate_of_password((inputPassword as HTMLInputElement).value),
            async_regex_validate_of_password((inputPasswordDuplicate as HTMLInputElement).value),
            (async () => ((inputPassword as HTMLInputElement).value === (inputPasswordDuplicate as HTMLInputElement).value) ? true : false)(),
            (async () => (InputCheckbox as HTMLInputElement) && (InputCheckbox as HTMLInputElement).checked ? true : false)()
        ]).then(async (response)=>{
            /** Check the data/ If we will find any error, we will be publication massage of warn and stoped the prosses */
            if (response[0].status == "fulfilled" && !response[0].value){
                /** Check the username */
                const htmlContainer = (inputUserName as HTMLInputElement).parentElement as HTMLElement; 
                include = 1;
                await warnedMeaasege({htmlContainer, include});
                return false;
            } else if (response[1].status == "fulfilled" && !response[1].value) {
                /** Check the email */
                const htmlContainer = (inputEmail as HTMLInputElement).parentElement as HTMLElement;
                include = 1;
                await warnedMeaasege({htmlContainer, include});
                return false;
            } else if ((response[2].status == "fulfilled" && !response[2].value) ||(
                response[3].status == "fulfilled" && !response[3].value
            ) ) {
                /** Check the password and duplicate of password */
                htmlMinContainer.style.position = "relative";
                include = 1;
                const message = "Одно из полей с паролем не верное или  пароли не совпадают";
                const top = true;
                await warnedMeaasege({htmlContainer:htmlMinContainer, message, top, include});
                return false;
            }  else if (response[5].status == "fulfilled" && !response[5].value) {
                htmlMinContainer.style.position = "relative";
                const top = true;
                const message = "Подтвердите согласие на обработку персональных данных";
                include = 1;
                await warnedMeaasege({htmlContainer:htmlMinContainer, message, top, include});
                return false;
                
            }
            /** If we will not find any error, we will be return data from the form fields  */
            return {
                "username": (inputUserName as HTMLInputElement).value,
                "email": (inputEmail as HTMLInputElement).value,
                "password": (inputPassword as HTMLInputElement).value
            };
        }).then( async (response) => {
            if (!response){
                return false;
            }
            /** 3. IF WE GET DATA FROM THE FORM FILEDS WE WILL BE SEND IT TO THE API */
            const dotaForm = new FormData();
            for (const [k, v] of Object.entries(response as BasisData) ){
                dotaForm.append(k, v as string);
            }
            const dataForAPI:HandlerApiProps = {
                "api": {
                    "url": APP_URL + `${APIPerson.API__POST_REGISTERATION}`,
                    "method": "POST",
                    "body": dotaForm,
                }
            };
            /** If all is OK we would be received data '{"data": 'OK"}' */
            return await handlerApiRegisterPOST(dataForAPI);
        }).catch((error) => {
            if (error){
                console.log("Error => ", error);
            }
            return false;
        }).then(async (response) => {
            console.log(response);
            return true;
        });

    /** CACK THE DATA VALIDATION */
    return false;
};
export default handlerFormReger;
