import { deleteNote } from "../module/note-delete.js";

/* wait for DOM to load */
document.addEventListener('DOMContentLoaded', (event) => {
    let tbl = document.querySelector("#notes tbody");
    let notes = [
        {
            "id": 0,
            "content": "Buy eggs."
        },
        {
            "id": 1,
            "content": "Walk dog."
        },
        {
            "id": 2,
            "content": "Go to gym."
        },
        {
            "id": 3,
            "content": "Read a book."
        },
        {
            "id": 4,
            "content": "Pay bills."
        }
    ];

    display(notes);

    /* form event handling */
    document.forms['note-form'].addEventListener('submit', (event) => {
        event.preventDefault();

        let noteContent = document.querySelector('textarea').value;

        notes.push({"content": noteContent});
        display(notes);
    });

    /* table event handling */
    tbl.addEventListener('click', (event) => {
        event.stopPropagation();

        let btn = event.target.closest('button');

        /* handle delete and update actions */
        if(btn) {
            deleteNote(0);
        }
    });

    function display(x) {
        let frag = "";
    
        for (let i = 0, len = x.length; i < len; i++) {
            const note = notes[i];
            frag += `
                <tr id="note-${note.id}">
                    <td scope="row">${note.id}
                    <th scope="row">${note.content}</th>
                    <td scope="row" class="actions">
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            `;
        }
        tbl.innerHTML = frag;
    }
});