menuScroll
==========

Gestion du positionnement (fixé ou non) des menus par rapport à la scrollbar.

**Dans cette documentation**

1. [Utilisation](#utilisation)
2. [Options](#options)

## Utilisation

```javascript
$('.mycustomclass').menuScroll ();
```

Lorsque la position de la scrollbar a dépassé une certaine hauteur, la bibliothèque applique un style CSS à l'élément '.mycustomclass'.
Cela permet de gérer en CSS un autre positionnement et d'y appliquer des effets de transition en CSS3.
Par défaut, la bibliothèque appliquera 2 styles: 'fixed' et 'fixed-animated'.
Le 2nd est appliqué 10ms après le premier pour permettre une gestion plus fine des transitions en CSS3.

## Options

```javascript
$('.mycustomclass').menuScroll ({
    minHeight : 70, // Hauteur de référence à partir de laquelle appliquer les styles CSS.
    cssClass : 'fixed' // Intitulé de classe à appliquer.
});
```
