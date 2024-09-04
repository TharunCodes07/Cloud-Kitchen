module.exports = class db{
    constructor(model){
        this.model = model;
    }
    async getUser(email_id){
        var usr = await this.model.findOne({email_id:email_id});
        return usr;
        }
}
    