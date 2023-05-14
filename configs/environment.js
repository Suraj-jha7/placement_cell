// making two objects for development and production which contains all require client data and those varible which needs to be hidden

// Below "process.env.variable_name" is used to fetch data from config.env file  


// <-----Development--------->
let development={
    name: process.env.PLACEMENT_CELL_DEVELOPMENT_ENVIRONMENT,
    port: process.env.PLACEMENT_CELL_DEVELOPMENT_PORT,
    assets_path: process.env.PLACEMENT_CELL_DEVELOPMENT_ASSETS_PATH,
    session_cookie_key: process.env.PLACEMENT_CELL_DEVELOPMENT_SESSION_COOKIE_KEY,
    db: process.env.PLACEMENT_CELL_DEVELOPMENT_DB,
    client_mail: process.env.PLACEMENT_CELL_DEVELOPMENT_CLIENT_MAIL,
    smtp:{
        host: 'smtp.gmail.com',
        port:587,
        requireTLS:true,
        auth: {
            user: process.env.PLACEMENT_CELL_DEVELOPMENT_CLIENT_MAIL,
            pass: process.env.PLACEMENT_CELL_DEVELOPMENT_CLIENT_MAIL_PASSWORD
        }
    },

    //Facebook authentication
    facebook_clientID: process.env.PLACEMENT_CELL_DEVELOPMENT_FACEBOOK_CLIENTID,
    facebook_clientSecret: process.env.PLACEMENT_CELL_DEVELOPMENT_FACEBOOK_CLIENTSECRET,
    facebook_callbackURL: process.env.PLACEMENT_CELL_DEVELOPMENT_FACEBOOK_CALLBACKURL,
    
    //google_authentication
    google_clientID: process.env.PLACEMENT_CELL_DEVELOPMENT_GOOGLE_CLIENTID,
    google_clientSecret: process.env.PLACEMENT_CELL_DEVELOPMENT_GOOGLE_CLIENTSECRET,
    google_callbackURL: process.env.PLACEMENT_CELL_DEVELOPMENT_GOOGLE_CALLBACKURL,

}


// <-----Production--------->

let production={
    name: process.env.PLACEMENT_CELL_PRODUCTION_ENVIRONMENT,
    port: process.env.PLACEMENT_CELL_PRODUCTION_PORT,
    assets_path: process.env.PLACEMENT_CELL_PRODUCTION_ASSETS_PATH,
    session_cookie_key: process.env.PLACEMENT_CELL_PRODUCTION_SESSION_COOKIE_KEY,
    db: process.env.PLACEMENT_CELL_PRODUCTION_DB,
    client_mail: process.env.PLACEMENT_CELL_PRODUCTION_CLIENT_MAIL,
    smtp:{
        host: 'smtp.gmail.com',
        port:587,
        requireTLS:true,
        auth: {
            user: process.env.PLACEMENT_CELL_PRODUCTION_CLIENT_MAIL,
            pass: process.env.PLACEMENT_CELL_PRODUCTION_CLIENT_MAIL_PASSWORD
        }
    },

    //Facebook authentication
    facebook_clientID: process.env.PLACEMENT_CELL_PRODUCTION_FACEBOOK_CLIENTID,
    facebook_clientSecret: process.env.PLACEMENT_CELL_PRODUCTION_FACEBOOK_CLIENTSECRET,
    facebook_callbackURL: process.env.PLACEMENT_CELL_PRODUCTION_FACEBOOK_CALLBACKURL,
    
    //google_authentication
    google_clientID: process.env.PLACEMENT_CELL_PRODUCTION_GOOGLE_CLIENTID,
    google_clientSecret: process.env.PLACEMENT_CELL_PRODUCTION_GOOGLE_CLIENTSECRET,
    google_callbackURL: process.env.PLACEMENT_CELL_PRODUCTION_GOOGLE_CALLBACKURL,
}

// exporting production if production.name is defined else export development
module.exports = eval(process.env.PLACEMENT_CELL_PRODUCTION_ENVIRONMENT) == undefined ? development : eval(process.env.PLACEMENT_CELL_PRODUCTION_ENVIRONMENT)

