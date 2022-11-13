/* wait for DOM to load */
document.addEventListener('DOMContentLoaded', (event) => {

    const noteContent = document.querySelector("#note-content");
    const saveButton = document.querySelector("#note-save");

    let tbl = document.querySelector("#notes tbody");
    let notes = [
        {
            "id": 0,
            "content": "Buy eggs.",
            "title": "Shopping"
        },
        {
            "id": 1,
            "content": "Walk dog.",
            "title": "Fido"
        },
        {
            "id": 2,
            "content": "Go to gym.",
            "title": "Health"
        },
        {
            "id": 3,
            "content": "Read a book.",
            "title": "Education"
        },
        {
            "id": 4,
            "content": "Pay bills.",
            "title": "Tasks"
        }
    ];

    display(notes);

    document.forms['note-form'].addEventListener('submit', (event) => {
        event.preventDefault();

        let noteContent = document.querySelector('textarea').value;

        notes.push({"content": noteContent});
        display(notes);
    });

    function display(x) {
        let frag = "";
    
        for (let i = 0, len = x.length; i < len; i++) {
            const note = notes[i];
            frag += `
                <tr id="note-${note.id}">
                    <th scope="row">${note.id}</th>
                    <td>${note.title}</th>
                    <td class="actions">
                        <button>View</button>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            `;
        }
        tbl.innerHTML = frag;
    }

});