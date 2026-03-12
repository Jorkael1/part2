# Full Stack Open – Part 2 (React)

Ce dépôt contient mes solutions pour les exercices de la **Partie 2** du cours **Full Stack Open** de l'Université d'Helsinki.

Cette partie du cours approfondit les bases de React en introduisant la manipulation des tableaux, la gestion des formulaires, la communication avec un backend, l'utilisation de la bibliothèque Axios et l'organisation d'une application React avec plusieurs composants.

---

## 📘 Projet 1 : CourseInfo

CourseInfo est une application React qui affiche les informations de plusieurs cours et leurs exercices.

### Exercices réalisés
Exercices **2.1 → 2.5**

### Fonctionnalités
- Affichage du nom du cours
- Affichage des différentes parties d’un cours
- Calcul automatique du nombre total d’exercices
- Gestion d’un nombre dynamique de parties
- Utilisation de `reduce` pour calculer la somme des exercices
- Séparation des composants en modules

### Structure des composants

```
App
 └── Course
      ├── Header
      ├── Content
      │     └── Part
      └── Total
```

### Concepts React utilisés
- Props
- Array `map`
- Array `reduce`
- Modularisation des composants
- Organisation d'une application React

---

## 📱 Projet 2 : Phonebook

Phonebook est une application React qui permet de gérer un répertoire téléphonique.

### Exercices réalisés
Exercices **2.6 → 2.17**

### Fonctionnalités
- Ajouter une personne au répertoire
- Ajouter un numéro de téléphone
- Empêcher l’ajout de noms déjà existants
- Rechercher une personne avec un filtre
- Supprimer une personne
- Modifier un numéro existant
- Afficher des notifications pour les opérations réussies ou échouées
- Synchronisation des données avec un serveur backend

---

## ⚙️ Technologies utilisées

- React
- JavaScript (ES6+)
- Axios
- JSON Server
- HTML / CSS
- Node.js
- npm

---

## 🚀 Installation et exécution

### 1. Cloner le projet

```bash
git clone https://github.com/VOTRE_USERNAME/partie2.git
```

### 2. Installer les dépendances

Dans chaque projet :

```bash
cd courseinfo
npm install
```

ou

```bash
cd phonebook
npm install
```

---

## ▶️ Lancer les applications

### CourseInfo

```bash
npm run dev
```

### Phonebook

```bash
npm run dev
```

---

## 🗄️ Backend JSON Server (Phonebook)

Le projet Phonebook utilise **json-server** pour simuler un backend.

Pour démarrer le serveur :

```bash
npx json-server --port 3000 --watch db.json
```

Le serveur sera disponible à l'adresse :

```
http://localhost:3000/persons
```

---

## 🧠 Concepts importants pratiqués

Dans cette partie du cours, les concepts suivants ont été appliqués :

- Manipulation des tableaux dans React
- Utilisation des méthodes `map`, `filter` et `reduce`
- Gestion des formulaires contrôlés
- Communication avec un backend via Axios
- Gestion des erreurs
- Séparation de la logique backend dans des modules de service
- Organisation d’une application React

---

## 🎓 Cours

Ces exercices proviennent du cours :

**Full Stack Open – University of Helsinki**

https://fullstackopen.com/

---

## 👨‍💻 Auteur

Développé par **Jorkael Keumeze**

Étudiant et développeur passionné par le développement web full-stack.
