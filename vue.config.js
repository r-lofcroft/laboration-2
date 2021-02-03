module.export = {
    pwa: {
        manifestOptions: {
            background_color: '#ece4d9'
        },
        name: 'Anime Randomizer',
        themeColor: '#5b403f',
        workboxOptions: {
            runtimeCaching: [
              {
                handler: 'NetworkFirst',
                options: {
                  networkTimeoutSeconds: 500
                },
                urlPattern: 'https://avancera.app/cities/'
              }
            ]
          }
    }
}