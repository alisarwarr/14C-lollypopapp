module.exports = {
    siteMetadata: {
        title: 'Lollypop App'
    },
    plugins: [
        'gatsby-plugin-sass',
        `gatsby-plugin-typescript`,
        `gatsby-plugin-material-ui`,
        'gatsby-plugin-react-helmet',
        {
            resolve: "gatsby-source-graphql",
            options: {
              // Arbitrary name for the remote schema Query type
                typeName: "oneLollypop",     //set own choice
              // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
                fieldName: "ONELOLLYPOP",    //set own choice ( used in 'gatsby-node.js' to get data )
              // Create Apollo Link manually. Can return a Promise.
                url: "https://bg7tm5w35nfwvkug7nhm6cifum.appsync-api.us-east-1.amazonaws.com/graphql",
              // HTTP headers
                headers: {
                    "x-api-key": "da2-jga7zsbx65djdo66lfbmu5wly4"                                       //ENTER API KEY HERE
                }
            }
        }
    ]
}