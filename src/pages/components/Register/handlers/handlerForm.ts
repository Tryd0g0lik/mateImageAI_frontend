import async_regex_validate_of_password from "src/pages/validators/validate_password";
import async_regex_validate_of_username from "src/pages/validators/validate_username";
import async_regex_validate_of_email from "src/pages/validators/validate_email";
import warnedMeaasege from "src/service/errorMessageForFields";
const handlerFormReger = async (event: React.MouseEvent): Promise<void> => {
    if (!(
        (event.target as HTMLElement).tagName.toLowerCase() === "button")
    ){
        return;
    }
    event.preventDefault();
    let include = 0;
    
    /** GET FIELDS FROM THE FORM */
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
        return;
    }
    /** Checking - data from values of field ('input'). It equal for the regex templete or not/*/
    Promise.allSettled([
            async_regex_validate_of_username((inputUserName as HTMLInputElement).value),
            async_regex_validate_of_email((inputEmail as HTMLInputElement).value),
            async_regex_validate_of_password((inputPassword as HTMLInputElement).value),
            async_regex_validate_of_password((inputPasswordDuplicate as HTMLInputElement).value),
            (async () => ((inputPassword as HTMLInputElement).value === (inputPasswordDuplicate as HTMLInputElement).value) ? true : false),
        ]).then(async (response)=>{
            if (response[0].status == "fulfilled" && !response[0].value){
                /** Check the username */
                const htmlContainer = (inputUserName as HTMLInputElement).parentElement as HTMLElement; 
                include = 1;
                await warnedMeaasege({htmlContainer, include});
                return;
            } else if (response[1].status == "fulfilled" && !response[1].value) {
                /** Check the email */
                const htmlContainer = (inputEmail as HTMLInputElement).parentElement as HTMLElement;
                include = 1;
                await warnedMeaasege({htmlContainer, include});
                return;
            } else if ((response[2].status == "fulfilled" && !response[2].value) ||(
                response[3].status == "fulfilled" && !response[3].value
            ) ) {
                /** Check the password and duplicate of password */
                const htmlContainer = document.querySelector(".register_form") as HTMLElement;
                htmlContainer.style.position = "relative";
                include = 1;
                const message = "Одно из полей с паролем не верное или  пароли не совпадают";
                const top = true;
                await warnedMeaasege({htmlContainer, message, top, include});
                return;
            }  
        });

    /** CACK THE DATA VALIDATION */
    return;
};
export default handlerFormReger;
