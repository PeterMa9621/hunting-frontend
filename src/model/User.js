class User {
    username = '';
    email = '';
    session = '';
    is_admin = '';
    created_at = '';
    updated_at = '';

    constructor({username, email, session, is_admin, created_at, updated_at}) {
        this.username = username === undefined ? '' : username;
        this.email = email === undefined ? '' : email;
        this.session = session === undefined ? '' : session;
        this.is_admin = is_admin === undefined ? '' : is_admin;
        this.created_at = created_at === undefined ? '' : created_at;
        this.updated_at = updated_at === undefined ? '' : updated_at;
    }
}

module.exports = User;