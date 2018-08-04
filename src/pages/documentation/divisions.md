---
title: "Divisions"
slug: "divisions"
draft: true
level: 0
order: 1
---

Divisions are used by content types for grouping. These are mostly cosmetic but required to build user interface correctly.

You can find division file under ```src/settings/divisions.js```

### Technical Details

Division properties listed below.

| Property Name 	| Description                            	|
|---------------	|----------------------------------------	|
| name          	| Will be displayed with content-types   	|
| slug          	| used in url. must be unique            	|
| icon          	| any kind of icon, defaults fontawesome 	|

Example division object is below.

```js
{
  name: 'Content',
  slug: 'content',
  icon: 'fa fa-bars'
}
```
