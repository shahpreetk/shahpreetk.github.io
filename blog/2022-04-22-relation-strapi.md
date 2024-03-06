---
slug: child-table-data-in-strapi-api
title: Child Table Data in Strapi API
description: How to display information of related child tables for the requested parent table in Strapi API?
authors: shahpreetk
tags: [databases, strapi, sql]
---

#### How to display information of related child tables for the requested parent table in Strapi API?

Originally, when requesting a Strapi API endpoint, you can only get the information of the table you requested without the information of tables it is related to.

<!-- truncate -->

In order to get the details of tables joined to the requested table, you can try requesting the endpoint by using - `http://localhost:1337/api/tablename?populate=*`

Example:
If you have a supplier to whom you owe many payments and wish to see the payments information in the supplier information, you can request this link -->
`http://localhost:1337/api/suppliers?populate=*`

So populate here, populates the API with relations, components or dynamic zones.

#### References

- [Strapi Documentation](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html#population)
