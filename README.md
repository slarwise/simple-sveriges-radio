# Experimenting with Sveriges Radio API

[Docs for Sveriges Radio API](https://api.sr.se/api/documentation/v2/index.html).

To run, do

```sh
node index.js
```

## Onboarding

Assume a developer should be onboarded to this codebase. What parts can be
automated?

### Code flow

Print the call hierarchy for a function. Something basic like this:

```
list_channels
  present_fetch_result
get_channel
  present_fetch_result
```
