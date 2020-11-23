// Agir sur un élément selon son id ou sa classe

// Si les éléments ont la classe rectangle ...
let myTargetElements = document.getElementsByClassName('rectangle');
for (let oneTargetElement of myTargetElements) {

    // On prend un élément parmi la collection et on lui ajoute un écouteur au CLIC
    oneTargetElement.addEventListener('click', function myfunction(e) {
        // On enregistre l'id de l'élément qui subit l'événement
        let elementId = e.target.getAttribute('id');
        // Si l'élément n'a pas d'id (c'est donc son parent qui a la classe rectangle)
        if (!elementId) {
            // On récupère son parent à la place
            elementId = e.target.parentElement.getAttribute('id');
        }
        // A ce stade elementId === l'id de l'élément qui a la classe rectangle

        // On choisit la classe à ajouter au titre de l'élément en fonction de l'id
        // ce qui fera changer sa translation
        let classToAdd = translationToAdd(elementId);
        // On récupère le titre de l'élément ciblé
        // et on lui ajoute sa classe selon son id
        elementId = this.firstElementChild;
        elementId.classList.add(classToAdd);
        // on réalise la translation de l'élément parent

        elementId = elementId.parentElement.getAttribute('id');
        newRotation(oneTargetElement);

        loadElementContent(elementId);
        oneTargetElement.removeEventListener('click', myfunction);
    });
}

// Applique la translation selon l'id de l'élément
function translationToAdd(elementId) {
    let classToAdd = '';
    switch (elementId) {
        case 'competences' :
            classToAdd = 'toTop';
            break;
        case 'profil' :
            classToAdd = 'toLeft';
            break;
        case 'coordonnees' :
            classToAdd = 'toRight';
            break;
        case 'realisations' :
            classToAdd = 'toBottom';
            break;
        default :
            classToAdd = 'disappear';
    }
    return classToAdd;
}


// Sélectionne l'élément enfant à afficher
// en fonction de l'id de l'élément
function loadElementContent(elementId) {
    let classToAdd = '';
    switch (elementId) {
        case 'competences' :
            classToAdd = 'competencesContent';
            break;
        case 'profil' :
            classToAdd = 'profilContent';
            break;
        case 'coordonnees' :
            classToAdd = 'coordonneesContent';
            break;
        case 'realisations' :
            classToAdd = 'realisationsContent';
            break;
        default :
            classToAdd = 'disappear';
    }

    myContentElement = document.querySelector("." + classToAdd);
    myContentElement.style.opacity = '1';
    console.log(myContentElement);

    if (myContentElement.classList.contains('profilContent')) {

        myContentElement.parentElement.style.top = '0';
        myContentElement.parentElement.style.transition = '1s';
        myContentElement.parentElement.style.height = '100vh';

    } else if (myContentElement.classList.contains('realisationsContent')) {
        myContentElement.parentElement.style.height = '80vh';
        myContentElement.parentElement.style.transition = '1s';
        myContentElement.parentElement.style.top = '20vh';

    } else if (myContentElement.classList.contains('competencesContent')) {
        myContentElement.parentElement.style.top = '0';
        myContentElement.parentElement.style.height = '66vh';
    } else if (myContentElement.classList.contains('coordonneesContent')) {
        myContentElement.parentElement.style.top= '66vh';
        myContentElement.parentElement.style.height = '34vh';
    }
}


function newRotation(elementId) {
    let classToAdd = '';
    if (Math.random() > 0.5) {
        classToAdd = 'rotateElementX';
    } else {
        classToAdd = 'rotateElementY';
    }
    elementId.classList.add(classToAdd);
}
