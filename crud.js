/*
    1. remove
*/

let data = [
    {
        note: 'Buy eggs.'
    }, {
        note: 'Walk dog.'
    }, {
        note: 'Go to gym.'
    }, {
        note: 'Read a book.'
    }, {
        note: 'Pay bills.'
    }
];

/* wait for DOM to load */
document.addEventListener('DOMContentLoaded', (event) => {

    let tbl = document.querySelector("#notes");
    let frag = "";

    for (let i = 0, len = data.length; i < len; i++) {
        frag += `
            <tr>
                <td>${data[i].note}</td>
                <td class="actions">
                    <button data-tooltip="Update"><i class="fa-solid fa-pen"></i></button><button data-tooltip="Delete"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `;
    }

    tbl.innerHTML = frag;

    document.forms['to-do'].addEventListener('click', (event) => {
        event.preventDefault();

        if(event.target.type === undefined) { return; }

        console.log(event.target.type);

        /* handle textarea */
        if(event.target.type === 'textarea') {
            console.log('textarea clicked');
        }

        /* handle submit */
        if(event.target.type === 'submit') {
            
        }
    });

    let realTable = document.querySelector('table');

    tbl.addEventListener('click', (event) => {
        event.preventDefault();

        //if(event.target.type === undefined) { return; }

        console.log(event.target.tagName);
    });
});