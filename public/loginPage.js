"use strict"

const userForm = new UserForm();

userForm.loginFormCallback = function (data) {
    ApiConnector.login(data, (serverResponse) => {
        if (serverResponse.success) {
            location.reload();
        } else {
            this.setLoginErrorMessage(serverResponse.error);
        }
    })
}

userForm.registerFormCallback = function (data) {
    ApiConnector.register(data, (serverResponse) => {
        if (serverResponse.success) {
            location.reload();
        } else {
            this.setLoginErrorMessage(serverResponse.error);
        }
    })
}