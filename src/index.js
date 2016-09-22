import Tabletop from 'tabletop'
import _ from 'lodash'

export default function getAutocompleteValues(key) {
  return new Promise((resolve, _reject) => {
    const tabletopConfig = {
      key,
      debug: true,
      callback: (...args) => setAutocompleteValues(resolve, ...args),
      callbackContext: this
    }

    Tabletop.init(tabletopConfig)
  })
}

function setAutocompleteValues(resolve, __, tabletop) {
  const rows = tabletop.sheets('Master Data Elements').all()

  const map = {}
  _.each(rows, row => {
    const id = row['Dynamic Attribute Input ID']
    const values = row['Normalized Input Values']

    if (id && values && !map[id]) {
      map[id] = values.split('|')
    }
  })

  resolve(map)
}
