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
        myContentElement.parentElement.style.top = '66vh';
        myContentElement.parentElement.style.height = '34vh';
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
let changeShape = document.querySelector('nav i:nth-of-type(1)');
changeShape.addEventListener('click', function (e) {
    changeShape.classList.contains('fa') ? changeShape.classList.toggle('fa-circle') : changeShape.classList.toggle('fa-square');
    let allShapedElements = document.getElementsByClassName('shape');

    for (let oneShapedElement of allShapedElements) {
        oneShapedElement.classList.add('rectangle');
        oneShapedElement.classList.toggle('round');
        e.preventDefault();
        e.stopPropagation();
    }
});

// Setting elements positions depending on ID and ACTIVE SHAPE
let changeCircle = document.querySelector('nav i:nth-of-type(1)');
if (changeCircle.classList.contains('fa-circle')) {
    changeCircle.addEventListener('click', function (e) {
            let allShapedElements = document.getElementsByClassName('rectangle');
            for (let oneShapedElement of allShapedElements) {
                console.log(oneShapedElement);
                let idShapedElement = oneShapedElement.getAttribute('id');
                console.log(idShapedElement);

                switch (idShapedElement) {
                    case 'competences' :
                        if (oneShapedElement.classList.contains('round')) {
                            oneShapedElement.style.backgroundColor = 'black';
                        } else {
                            oneShapedElement.style.backgroundColor = 'blue';
                        }
                        break;
                }
            }
        }
    );
}





