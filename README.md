# REACT START

## Init de yarn

On va utiliser yarn comme gestionnaire de paquets *(on aurait pu utiliser npm)*
Dans le terminal, se placer dans le dossier du projet et taper la commande :

```
yarn init
```

Répondre aux questions : 
- nom du projet 
- autres questions : laisser par défaut

Si tout s’est bien passé, on doit voir apparaitre ce message dans la console : 

```
success Saved package.json ✨ Done in xxx s.
```
⇒ On constate qu’un fichier package.json a été crée : c’est la liste de courses des dépendances de notre projet. (équivalent de composer.json en PHP)


## Install de webpack

On veut ajouter webpack : le chef d’orchestre !
 
On demande à yarn d'installer webpack et on lui précise avec l’option —dev qu'on en aura besoin que pour le développement. 

Dans le terminal, se placer dans le dossier du projet et taper la commande :

```
yarn add webpack webpack-cli --dev

ou en 2 lignes : 
yarn add webpack --dev
yarn add webpack-cli --dev
```

un fois qu'on a fait cette commande, on doit avoir : 
-  le dossier /node_modules qui doit contenir pleins de nouveaux dossiers (équivalent de /vendor de PHP)
- 2 nouvelles lignes dan sle package.json
```
"devDependencies": {
  "webpack": "^5.73.0",
  "webpack-cli": "^4.9.2"
}
```
- un fichier yarn.lock : contient de sinfos plus précises sur quel paquet exactement a été telechargé
```
"sucre": @daddy-250gr
```


On dit à yarn d'installer webpack dans les dépendances dev parce qu'on va l'utiliser seulement en phase de developpement :

exemple :
```
  "devDependencies": {
    "moule-a-gateau": "2.0"
  },
  "dependencies": {
    "pepites-chocolat": "2.0"
  }
```

## Gitignore

On ne commit PAS les node_modules

```.gitignore
node_modules/
```

## Ecrire du JS

On crée un dossier src contenant un fichier `index.js`
```
const hello = (name) => {
  console.log(`Happy birthday ${name}`);
}

hello('Tony');
```

## l'inclure dans un fichier html

On créé un fichier index.html dans un dossier dist
On lie le fichier js avec une balise script


## Lancer webpack

Pour lancer Webpack, dans le terminal, se placer dans le dossier du projet et taper la commande :

`./node_modules/.bin/webpack`

Webpack a créé un main.js dans le dossier dist, c'est le gateaux final qu'on va pouvoir envoyer sur un serveur qui le livrera au navigateur.

Webpack a 2 modes :

- production : super optimisé pour fournir au client ... mais compliqué de débuguer
`./node_modules/.bin/webpack --mode production`

- development : un peu moins optimisé → garde une possibilité de debug avec les bons numéros de lignes des console.log
`./node_modules/.bin/webpack --mode development`

## les scripts dans package.json

On peut écrire des raccourcis / alias pour des commandes

```
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development"
  },
```

## installer le loader babel pour webapack

Taper la commande :
```
yarn add --dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```

- @babel/core : le coeur de Babel
- @babel/preset-env : le dictionnaire JS moderne
- @babel/preset-react : le dictionnaire de JSX
- babel-loader : passerelle entre babel et webpack pour que webpack puisse faire passer les fichier via babel

Créer le fichier de config de babel 

```.babelrc
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

## configure webpack pour faire dire d'utiliser babel

Creer un fichier de config de webpack `webpack.config.js` à la racine du projet.

Avec la conf suivante, on dit à webpack que tous les fichier .js doivent passer dans le babel-loader !

```
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  }
};
```

## installer le serveur de dev de webpack

Parce qu'on apas envie de refaire un build à la main et recharger la page à chaque fois qu'on fait une modif

On tape la commande 
```
yarn add webpack-dev-server --dev
```

### dire à webpack qu'il utilise ce serveur de dev

on ajoute devServer dans le fichier de config de webpack

```
module.exports = {
    mode: 'development',
    module: {
      rules: [
        { 
          test: /\.js$/, 
          use: 'babel-loader' 
        }
      ]
    },
    devServer: {
        open: true,
        static: 'dist'
    },
};
```

## lancer le serveur de dev

On ajoute un script dans le package.json pour faire le serve
```
"scripts": {
  "start": "./node_modules/.bin/webpack serve"
},
```

on lance le script avec `yarn start`
=> si on change du code, ça rebuild tout seul !! on est en hot reload 🥳

## Installer React et React-DOM 

avec yarn, on tape la commande : 

```
yarn add react react-dom
```



