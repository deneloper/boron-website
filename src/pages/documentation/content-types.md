---
title: "Content Types"
slug: "content-types"
draft: true
level: 0
order: 2
---

Content Types are backbone of the Boron. Everything related to UI and API controlled by content types.

You can find content types file under

```
src/settings/content-types.js
```
### Basic Content Type

Basic content type properties listed below.

| Property Name 	| Description                            	|
|---------------	|----------------------------------------	|
| name          	| Name of the content-type. Will be used everwhere   	|
| slug          	| used in url. must be unique            	|
| division          	| must match related division slug 	|

This is example of basic content-type object.

```js
{
  name: 'Articles',
  slug: 'articles',
  division: 'content'
}
```

### Detailed Content Type

Due to optimization reasons, content types are not fully loaded by Boron until you access to content type by related page (create/edit and list).

You can find or create detailed properties for each content type under
```
src/settings/content-types/${division.slug}/${contentType.slug}.js
```

If you are creating a new content type, you need two file to edit or create. An example for articles;

```
src/settings/content-types.js
src/settings/content-types/content/articles.js
```

These two files connected by ```contentType.slug``` property, defined in basic content type object.
