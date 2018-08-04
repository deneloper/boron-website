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

Due to optimization reasons, content types are not fully loaded by Boron until you access to content type by related page (create/edit and list).

You can find or create detailed properties for each content type under
```
src/settings/content-types/${division.slug}/${contentType.slug}.js
```
