const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/mensajes', (req, res) => {
    res.send(JSON.stringify(  {
      "glossary": {
          "title": "example glossary",
      "GlossDiv": {
              "title": "S",
        "GlossList": {
                  "GlossEntry": {
                      "ID": "SGML",
            "SortAs": "SGML",
            "GlossTerm": "Standard Generalized Markup Language",
            "Acronym": "SGML",
            "Abbrev": "ISO 8879:1986",
            "GlossDef": {
                          "para": "A meta-markup language, used to create markup languages such as DocBook.",
              "GlossSeeAlso": ["GML", "XML"]
                      },
            "GlossSee": "markup"
                  }
              }
          }
      }
  }));
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


/*


*/