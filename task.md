# Tâ1. **Remplacer le logo**
   - Fichier : `src/components/layout/Header.tsx` (ou `src/app/layout.tsx`)
   - Tâche : mettre à jour le logo vers `/logo.svg` dans le fichier de configuration des assets.
   - Statut : ✅ Faits à réaliser

Voici la liste des modifications à apporter sur le site :

1. **Remplacer le logo**
   - Fichier : `src/components/layout/Header.tsx` (ou `src/app/layout.tsx`)
   - Tâche : mise en attente, en attente d’informations complémentaires sur le nouveau logo.

2. **Corriger l’adresse en haut de page**
   - Fichier : `src/components/layout/Header.tsx`
   - Emplacement : dans le composant Header, au niveau du bloc d’affichage de l’adresse (juste en dessous du logo)
   - Tâche : mettre à jour le texte de l’adresse avec la nouvelle valeur : `8236 Rue Pascal-Gagnon Montréal`.
   - Statut : ✅ Fait

3. **Harmoniser les chiffres (clients, projets, etc.)**
   - Fichiers :
     - `src/components/sections/StatsSection.tsx`
     - `src/app/achievements/page.tsx` (const `stats`)
     - `src/app/about/page.tsx`
   - Emplacement : récupérer les valeurs définies dans l’array `stats` de `achievements/page.tsx` et les utiliser comme source de vérité.
   - Tâche : synchroniser les nombres affichés pour qu’ils correspondent aux valeurs réelles définies dans `achievements/page.tsx` :
     - 30+ Années d'expérience
     - 1500+ Projets réalisés
     - 500+ Clients satisfaits
     - 98% Taux de satisfaction
     et les afficher identiquement sur toutes les pages.
   - Statut : ✅ Fait

4. **Supprimer « Stand d’exposition » du pied de page et des listes**
   - Fichiers :
     - `src/components/sections/ContactSection.tsx`
     - `src/components/common/ContactModal.tsx`
   - Tâche : retirer l’entrée « Stand d’exposition » des listes de services et des formulaires de contact.
   - Statut : ✅ Fait

5. **Mettre à jour la description « Expansion des services »**
   - Fichier : `src/app/about/page.tsx`
   - Tâche : changer la description pour « impression grand format et Technologie d’affichage numérique LED ».
   - Statut : ✅ Fait

6. **Réorganiser l’ordre de « Nos services »**
   - Fichier : `src/components/sections/ServicesOverview.tsx`
   - Tâche : réordonner la liste des services comme suit :
     1. Gestion de permis
     2. Conception
     3. Fabrication
     4. Installation & service après-vente
   - Statut : ✅ Fait

7. **Adapter la section « Nos réalisations »**
   - Fichier : `src/app/achievements/page.tsx`
   - Tâches :
     - supprimer la section hero bleue en tête de page
     - corriger le filtre « Tous » pour qu’il affiche réellement toutes les catégories
     - ajouter des boutons « Précédent / Suivant » dans le modal de détail pour naviguer entre les images sans fermer le modal
   - Statut : ✅ Fait

8. **Mettre à jour la section Contact**
   - Fichier : `src/components/sections/ContactSection.tsx`
   - Tâches :
     - corriger l’adresse dans « Venez nous voir » et la carte interactive vers `8236 Rue Pascal-Gagnon Montréal`
     - modifier les horaires de `8h–18h` à `8h–17h`
     - ajouter un libellé « Appel-moi pour toute question » sous l’icône téléphone
   - Statut : ✅ Fait

9. **Priorisation** : 
   1. Mettre à jour les coordonnées (adresse, horaires)
   2. Harmoniser les chiffres et réorganiser les services
   3. Corriger le filtre « Tous »
   4. Ajouter la navigation dans le modal réalisations
 - Statut : ✅ Fait
