# watchtower-autocomplete-values-fetcher

get autocomplete values by dynamic_attribute_id for dropdown

## Usage

```javascript
import getAutocompleteValues from 'watchtower-autocomplete-values-fetcher'
const key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' // key to the google spreadsheet with the data
getAutocompleteValues(key).then((autocomplete) => your_code)

// autocomplete looks like
//  {
//    1: ['value1', 'value2'],
//    2: ['value3', 'value4']
//  }

// 1 and 2 - dynamic_attribute ids
```
