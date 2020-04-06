---
title: "Sviluppare con GraphQL - Molto meglio con il Playground"
description: "GraphiQL è utile, ma il playground ha l'aspetto di un vero e proprio IDE"
date: 2020-03-15
---

Nel mio percorso di apprendimento di Gatsby, React e GraphQL comincio ad apprezzare l'utilità di graphQL, sia per l'utilizzo che ne viene fatto in Gatsby, sia per lo scopo originario per il quale fu sviluppato, ossia come alternativa a REST. Una delle caratteristiche di graphQL è di essere autodocumentale, ossia è in grado di fornire uno schema dei dati con cui interagire per mezzo delle graphQL queries. Come conseguenza di ciò gli sviluppatori di graphQL hanno messo a disposizione un'interfaccia web denominata graphiQL che consente di 'leggere' quanto esposto sull'endpoint e di scrivere e testare online le query. Benchè apprezzabile come strumento la community ha provveduto a spingere questa funzionalità ad un livello superiore, graphQL playground fornisce un'alternativa a graphiQL, con diverse funzionalità aggiuntive che facilitano di molto lo sviluppatore, quindi perchè non aggiungerlo ai tool di sviluppo di questo mio blog?
Ecco i passi da eseguire in un progetto:

- Installare il pacchetto env-cmd: <code>npm i env-cmd --save</code>
- Crea un file .env.dev nella cartella principale con dentro scritto: <code>GATSBY_GRAPHQL_IDE=playground</code>
- Modificare package.json, lo script develop diventa: <code>env-cmd -f .env.dev gatsby develop</code>

Se esegui npm run develop potrai vedere che http://localhost:8000/___graphql è un pò diversa ;-).
