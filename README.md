# [Country and live exchange rate][site]

## Introduction
Projet réalisé dans le cadre du module **Intégration de données connectées** par :<br/>
* Caroline MARTIN<br/>
* Marwa ELATRACHE<br/>
* Omar SECK<br/>
* Tharshika NAGARATNAM<br/>
* Marine PLA-COMES<br/>

## Présentation
Le but du projet était la création d'un mashup permettant la visualisation du taux de change journalier par pays et de connaitre les informations principales de ce pays.<br/>
Nous avons choisi l'euro comme monnaie de base.

## Sources
* API - Taux de change :
  Foreign exchange rates API - https://exchangeratesapi.io/ <br/>
  Permets d'avoir accès aux taux de change variant de tous les pays avec leur
  historique. La source est publiée par la banque centrale européenne.<br/>
  On a utilisé une requête pour avoir le taux de change journalier : "https://api.exchangeratesapi.io/latest?symbols"
  <br/>

* API - Information de pays :
  REST Countries - https://restcountries.eu/ <br/>
  Contient les informations spécifiques pour tous les pays.<br/>
  On a utilisé une requête qui renvoie les informations tous pays présents dans l'API : "https://restcountries.eu/rest/v2/all"
  <br/>

## Architecture
Afin de lier les deux bases de données, nous récupérerons dans un premier temps la liste des devises présentes et son taux de change actuel dans la première API. Ces informations répertoriées dans une variable nous servent à faire un filtre sur les pays présents dans la deuxième API pour ainsi affiches uniquement les pays dont nous possédons l'information sur sa devise.

## Cas d'utilisation
*On souhaite effectuer une année d'études à Stockholm*.<br/>
On veut connaitre la monnaie de la Suède et son taux de change avant de partir. Nous pouvons chercher le pays dans le tableau par son drapeau ou bien en tapant son nom dans la barre de recherche. Nous pouvons voir que la devise de la Suède est la couronne (kr) et que 1 euro vaut en ce moment aux alentours de 10 kr.

## Difficultés
**Le choix des API** : Nous avons eu du mal à trouver des API qui ne nécessitaient pas une clé et qui étaient libres d'accès dans le temps

**Harmonisation des données** : Nous sommes passés par plusieurs versions afin de pouvoir afficher le maximum d'informations sans avoir des valeurs manquantes tout en gérant le fait que c'est asynchrone.
Exemple : un pays présent dans l'API pays, pouvait avoir une devise qui n'apparaissait pas dans l'API sur le taux de change.

## Apport du projet
**Manipulation des fetch** : Ce projet nous a appris à interroger des API afin de pouvoir les réutiliser à notre mise sur un notre projet.

**Utilisation GitHub** : Ce projet a été un bon moyen de consolider et pratiquée (découvrir pour certains) la gestion de versions ainsi que le travail de groupe sur un même fichier.

**Hétérogénéité des compétences** : 
Nous avions tous des competences differentes (html/css), ce qui a créé un echange enrichissant pour tout le groupe.

**Utilisation de données** : Nous avons manipulé les données sous format JSON grâce à Javascript et conclu qu'il est important de comprendre la structure de ces données pour savoir comment les croiser efficacement.


## Lien du projet
https://tharshi-miashs.github.io/Projet_IDC/

[site]: https://tharshi-miashs.github.io/Projet_IDC/

