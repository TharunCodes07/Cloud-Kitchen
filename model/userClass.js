const mongoose = require('mongoose');
const userModel = require('../model/userModel');

module.exports = class User {
    constructor(username, email_id, address, password) {
        this.username = username;
        this.email_id = email_id;
        this.address = address;
        this.password = password;
    }

    save() {
        const newUser = new userModel({
            username: this.username,
            email_id: this.email_id,
            address: this.address,
            password: this.password
        });
        newUser.save();
        console.log('Saving new user:', newUser);
    }

    static async getUser(email_id, password) {
        const usr = await userModel.findOne({ email_id: email_id });
        if (usr) {
            if (usr.password === password) {
                return {
                    status: 'correct password',
                    username: usr.username,
                    email_id: usr.email_id,
                    address: usr.address
                };
            }
            return { status: 'wrong password' };
        }
        return { status: 'user does not exist' };
    }
}
