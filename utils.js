let headers =
{
    contentHeader:
    {
        'Content-Type':'application/json'
    },

    urlRegexpById: (controllerName) =>
    {
        let regularExp = new RegExp(`/api\/${controllerName}\/([0-9]+)`)


        return regularExp
    },

    urlRegexp: (controllerName) =>
    {
        let regularExp = new RegExp(`/api\/${controllerName}`)


        return regularExp
    } 
}


module.exports = headers