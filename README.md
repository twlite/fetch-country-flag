# Fetch Country Flag
Simple package to fetch flag of any country by name.

# Features
- Easy
- Simple
- Fast
- TypeScript Support

# Example

```js
const flag = require("fetch-country-flag");

const data = await flag("usa", {
    type: "png",
    theme: "flat",
    size: "64"
});

console.table(data);

/*
Expected Output:
┌─────────┬──────────────────────────────────────────────┐
│ (index) │                    Values                    │
├─────────┼──────────────────────────────────────────────┤
│  name   │          'United States of America'          │
│  flag   │ 'https://www.countryflags.io/US/flat/64.png' │
└─────────┴──────────────────────────────────────────────┘
*/

```

# Join My Discord
**[https://discord.gg/2SUybzb](https://discord.gg/2SUybzb)**