/* wait for DOM to load */
document.addEventListener('DOMContentLoaded', (event) => {

    const noteContent = document.querySelector("#note-content");
    const saveButton = document.querySelector("#note-save");

    let tbl = document.querySelector("#notes tbody");

    async function populate() {

        const requestURL = 'https://broqin.github.io/CRUD/data/notes.json';
        const request = new Request(requestURL);
      
        const response = await fetch(request);
        const notes = await response.json();
      
        display(notes);
    }

    populate();

    document.forms['note-form'].addEventListener('submit', (event) => {
        event.preventDefault();

    });

    function display(x) {
        let frag = "";
    
        for (let i = 0, len = x.length; i < len; i++) {
            const note = x[i];
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