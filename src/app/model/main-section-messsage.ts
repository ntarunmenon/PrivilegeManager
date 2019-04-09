export enum MainSectionMessage {
    DISABLE_EMPLOYEE, RESET_PASSWORD, SAVE_SUCCESSFULL
}

export namespace MainSectionMessage {
    export function getMessage(mode:MainSectionMessage) {
       switch(mode) {
           case MainSectionMessage.RESET_PASSWORD:
                return "Password has been reset successfully"
            case MainSectionMessage.DISABLE_EMPLOYEE:
                return "Employee has been disabled successfully"
            case MainSectionMessage.SAVE_SUCCESSFULL:
                return "Save successfull" 
       }
    }
}