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
                networkTimeoutSeconds: 5
              },
              urlPattern: /^https\:\/\/api.jikan.moe\/v3\/search\/anime.*$/
            }
          ]
        }
      }
    }