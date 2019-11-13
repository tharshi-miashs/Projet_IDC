# Country and live exchange rate

## Introduction
Notre Projet a pour but de faire une visualisation des pays avec la monnaie qu'ils utilisent ainsi que les taux de changes liés, avec l'euro comme base.
## Sources
* API - Taux de change :
  Foreign exchange rates API - https://exchangeratesapi.io/
  Permet d'avoir accés aux taux de changes variant de tous les pays avec leur
  historique. La source est publiée par la banque centrale européenne.
  On a utilisé une requête pour avoir le taux de change journalier.

* API - Information de pays :
  REST Countries - https://restcountries.eu/
  Contient les informations spécifiques pour tous les pays.
  On a utilisé une requête qui renvoie les informations de chaque pays passé dans les paramétres.

## Architecture
Pour harmoniser les deux bases de données nous avons due faire un tableau de la liste des pays dont le deuxième API nous fournissait le taux de change.

## Cas d'utilisation
*On souhaite effectuer une année d'étude à Stockholm*. 
On veut connaitre la monnaie de la Suède et son taux de change avant de partir: Nous pouvons cherche le pays dans le tableau par son drapeau ou bien en tapant son nom dans la barre de recherche. Nous pouvons voir que la Suède a pour monnaie la couronne (kr) et que 1 euro vaut en ce moment au alentour de 10 kr.

## Difficultés
**Répartition des tâches** : Après avoir pris connaissance des API, il a été difficile de s'attribuer correctement des tâches; deux membre ont convergées petit à petit en effectuer le même travail.  
**Hétérogénéité des compétences** : Chacun de nous avions des difficultés, il y a donc eu séparément un travail sur  
la mise en forme des données (html/css) et un travail sur les requêtes d'API

Pour harmoniser les deux bases de données nous avons due faire un tableau de la liste des pays dont le deuxième API nous fournissait le taux de change.

## Apport du Projet
**Gestion git**  
**Manipulation des fetch** : Ce projet nous a appris à interroger aux moins deux api pour fournir les données à notre mise en
forme html.  
**Utilisation de données** : Nous avions manipuler des données sous format JSON grâce à JavaScript et conclu qu'il est important de comprendre la structure de ces données pour savoir comment les croiser efficacement.

# Projet_IDC
 site https://tharshi-miashs.github.io/Projet_IDC/
