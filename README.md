# Spe-React-E03-start

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