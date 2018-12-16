# Node.js Beispiele

Für alle Beispiele muss eine aktuelle Node.js Version (https://nodejs.org/) installiert sein.

## nodesever.js

1. Commandline/Terminal öffnen.
2. `node nodeserver.js`.
3. Auf http://localhost:3000/ im Browser wechseln.

## gulp

1. Gulp-CLI global installieren: `npm install -g gulp-cli`.
2. Da eine ``package.json`` vorhanden ist, können die notwendigen lokalen Node.js Module direkt installiert werden: `npm install`.
3. Commandline/Terminal öffnen.
4. Tasks ausführen, z.B. `gulp` oder `gulp scripts`.

## sass

1. node-sass global installieren: `npm install -g node-sass`.
2. Commandline/Terminal öffnen.
3. SCSS-Datei zu CSS-Datei konvertieren: `node-sass _scss\main.scc css\main.css`.
4. Nach jeder Änderung in der SCSS-Datei muss dieser Aufruf erneut durchgeführt werden.
