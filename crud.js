/* wait for DOM to load */
document.addEventListener('DOMContentLoaded', (event) => {
    let tbl = document.querySelector("#notes");
    let data = [
        {
            "id": 0,
            "note": "Buy eggs."
        },
        {
            "id": 1,
            "note": "Walk dog."
        },
        {
            "id": 2,
            "note": "Go to gym."
        },
        {
            "id": 3,
            "note": "Read a book."
        },
        {
            "id": 4,
            "note": "Pay bills."
        }
    ];

    display(data);

    /* form event handling */
    document.forms['todo'].addEventListener('submit', (event) => {
        event.preventDefault();

        let noteContent = document.querySelector('textarea').value;

        data.push({"note": noteContent});
        display(data);
    });

    /* table event handling */
    tbl.addEventListener('click', (event) => {
        event.stopPropagation();

        let btn = event.target.closest('button');

        /* handle delete and update actions */
        if(btn) {

            if(btn.dataset.tooltip === 'Delete') {
                console.log('delete requested');
            }

            if(btn.dataset.tooltip === 'Update') {
                console.log('update requested');
            }
        }
    });

    function display(x) {
        let frag = "";
    
        for (let i = 0, len = x.length; i < len; i++) {
            frag += `
                <tr>
                    <td>${x[i].note}</td>
                    <td class="actions" data-id="${x[i].id}">
                        <button data-tooltip="Update"><i class="fa-solid fa-pen"></i></button><button data-tooltip="Delete"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            `;
        }
        tbl.innerHTML = frag;
    }
});