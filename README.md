# TYPESCRIPT INTRO

* Project Setup
  * npm init -y 
  * npm i -D typescript
  * create tsconfig.json
  * npm i -D nodemon ts-node

* Turn TS to JS
  * npx tsc example.ts
  * By default ts is not converted to modern js, so add compiler opts to tsconfig.json to use latest js version
  * in package json scripts section I added build, so than TS can be converted to js with npm run build command

* tsconfig.json -> noEmitOnError: if there are type errors and not js error still prevent building. 
* npx tsc --init -> default tsconfig.json


* you can not run ts code with node, you need to run generated js code like 'node ./dist/index.js'
* or npx ts-node index.ts which first transpiles the code then runs it. 



* // @ts-ignore / // @ts-nocheck
  * only use above if you have no other solution
  * you can use  no check at the top as well
