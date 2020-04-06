---
title: "Gatsby Remark Plugin e gli underscore cancellati"
description: "Come impostare il plugin per evitare che rimuova il carattere underscore"
date: 2020-03-28
---

Da poco mi cimento con lo scrivere il mio blog sfruttando le potenzialità offerte da Gatsby e i suoi molti plugin. Sono ancora alle prime armi con Markdown e lo stile dei miei post ancora lascia un pochino a desiderare, ma cerco di aggiornare anche i miei post passati a mano a mano che imparo qualcosa di nuovo. In uno dei miei post pubblicati mi sono accorto che l'html prodotto non era corretto, avevo inserito del testo contenente il carattere 'underscore' ma questo veniva rimosso nell'output prodotto. Alla ricerca su internet di una soluzione, ho visto qualcuno che suggeriva di usare &#92;\_ per ottenere il risultato voluto, ma aimè in VS Code ho attivo il linter per markdown che mi rimuoveva il carattere slash appena salvavo il file! Ho quindi tentato la fortuna provando a mettere 2 &#92;&#92;\_ ma niente, con 3 riuscivo finalmemte ad ottenere la visualizzazione dell'underscore ma con un slash davanti (così &#92;\_), quindi niente da fare. Continuando la mia ricerca sono giunto alle issues aperte su github proprio al plugin gatsby perchè questo comportamento del plugin non è congruente con le specifiche Markdown, per fortuna l'attuale versione del plugin consente di impostare un parametro di configurazione che risolve il problema, basta impostare l'opzione pedantica a false.Ecco quindi la configurazione minima del plugin che risolve il problema:  
<code>
{  
resolve: `gatsby-transformer-remark`,  
options: {
pedantic: false
}
}  
</code>
