// Act on element depending on its class or ID

// If elements contain SHAPE class
let myTargetElements = document.getElementsByClassName('shape');
for (let oneTargetElement of myTargetElements) {

    // We add an event for each element
    oneTargetElement.addEventListener('click', function myfunction(e) {
        // We store the element id targetted
        let elementId = e.target.getAttribute('id');
        // If the element doesn't contains id, so its parent contains the SHAPE class
        if (!elementId) {
            // We store the parent instead
            elementId = e.target.parentElement.getAttribute('id');
        }
        // At this point elementId CONTAINS the SHAPE class

        // We choose the class to add depending on element ID
        // Which will set the type of transition
        let classToAdd = translationToAdd(elementId);
        // We store the target element
        // We add the class depending on its id
        elementId = this.firstElementChild;
        elementId.classList.add(classToAdd);

        // We set the parent element transition
        elementId = elementId.parentElement.getAttribute('id');
        newRotation(oneTargetElement);

        // We load the content of the different elements
        loadElementContent(elementId);
        oneTargetElement.removeEventListener('click', myfunction);
    });
}

// Translation depending on element ID
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


// Load the element child depending on parent element container id
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

    if (myContentElement.classList.contains('competencesContent')) {

        myContentElement.parentElement.style.height = '66vh';

    } else if (myContentElement.classList.contains('profilContent')) {

        myContentElement.parentElement.style.top = '0';
        myContentElement.parentElement.style.transition = '1s';
        myContentElement.parentElement.style.height = '100vh';

    } else if (myContentElement.classList.contains('realisationsContent')) {

        myContentElement.parentElement.style.height = '70vh';
        myContentElement.parentElement.style.transition = '1s';
        myContentElement.parentElement.style.top = '30vh';

    } else if (myContentElement.classList.contains('coordonneesContent')) {

        myContentElement.parentElement.style.height = '32vh';
    }
}

// Element rotation random X / Y
function newRotation(elementId) {
    let classToAdd = '';
    if (Math.random() > 0.5) {
        classToAdd = 'rotateElementX';
    } else {
        classToAdd = 'rotateElementY';
    }
    elementId.classList.add(classToAdd);
}

// Click on shaped elements

// Select


document.querySelector('.fa-star').addEventListener('click', function () {
        let message = document.querySelector('nav p');
        message.style.left = '0';
    setTimeout(function () {
        message.style.left= '-500px';
    }, 3000);
});

let changeShape = document.querySelector('nav i:nth-of-type(1)');
let allShapedElements = document.getElementsByClassName('shape');


changeShape.addEventListener('click', function (e) {

    changeShape.classList.toggle('fa-circle');
    changeShape.classList.toggle('fa-square');
    console.log(changeShape);

    for (let oneShapedElement of allShapedElements) {

        oneShapedElement.classList.toggle('rectangle');
        oneShapedElement.classList.toggle('round');

        // Setting elements positions depending on ID and ACTIVE SHAPE
        let idShapedElement = oneShapedElement.getAttribute('id');

        switch (idShapedElement) {

            case 'competences' :
                oneShapedElement.style.transition = '1s';

                if (oneShapedElement.classList.contains('round')) {
                    oneShapedElement.firstElementChild.style.padding = '30px';
                    oneShapedElement.style.top = '100px';
                    oneShapedElement.style.left = '0';
                    oneShapedElement.style.width = '33vw';
                } else if (oneShapedElement.classList.contains('rectangle')) {
                    oneShapedElement.style.top = '0vh';
                    oneShapedElement.style.left = '80vw';
                    oneShapedElement.style.width = '300px';

                }
                break;

            case 'realisations' :
                oneShapedElement.style.transition = '1s';

                if (oneShapedElement.classList.contains('round')) {
                    oneShapedElement.firstElementChild.style.padding = '30px';

                    oneShapedElement.style.top = '30vh';
                    oneShapedElement.style.left = '78vw';
                } else if (oneShapedElement.classList.contains('rectangle')) {
                    oneShapedElement.style.top = '30vh';
                    oneShapedElement.style.left = '0vw';
                }
                break;

            case 'coordonnees' :
                oneShapedElement.style.transition = '1s';

                if (oneShapedElement.classList.contains('round')) {
                    oneShapedElement.firstElementChild.style.padding = '30px';

                    oneShapedElement.style.top = '0vh';
                    oneShapedElement.style.left = '60vw';

                } else if (oneShapedElement.classList.contains('rectangle')) {
                    oneShapedElement.style.top = 'calc(100vh - 300px)';
                    oneShapedElement.style.left = '80vw';
                }
                break;
        }
    }
});