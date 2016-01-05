# rxjs massive

```
const db = dbrx.connectSync({connectionString: connectionString});
const { findDoc, saveDoc, destroy, searchDoc } = db;
const my = db.fromTable('my_documents');

saveDoc('my_documents', {foo:'test'}).flatMap(::my.findDoc('my_documents', 0)).subscribe(::console);

// or

my.saveDoc({foo:'test'}).flatMap(::my.findDoc(0)).subscribe(::console.log);
```

## INSTALL
npm install

## TO BUILD dist/rxjs-massive.js (optional)
npm run build

## TO RUN
npm start

## TO TEST
npm run test
