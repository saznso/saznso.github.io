// gets elements

const artistInput = document.querySelector('#artistName');
const songInput = document.querySelector('#songName');
const form = document.querySelector('#lyricsForm');
const output = document.querySelector('.lyrics-output pre');
const btn = document.querySelector('.fetchBtn');
const loading = document.querySelector('.loading');


// add a click event to the button

btn.addEventListener('click', () => {

    // check if the fields are NOT empty

    if (artistInput.value !== '' & songInput.Value !== '') {

        // show the loading div

        loading.style.opacity = '1';

        // fetch API data using the artist and song name from the input fields

        fetch(
            `https://api.lyrics.ovh/v1/
            ${artistInput.value}/${songInput.value}`

            // those stupid speech marks are so incredibly annoying

        )

            // take the data which is in JSON format and convert it into a regualr JS object

            .then(response => response.json())
            .then(data => {

                // if the response is not equal to undefined (the lyrics for the inserted artist and songa are found)

                if (data.lyrics !== undefined) {

                    // output the lyrics to the page

                    output.innerHTML = data.lyrics;

                    // and if the lyrics are not found

                } else {

                    // output a message

                    output.innerHTML = 'no lyrics found :(';
                }

                // hide the loading div

                loading.style.opacity = '0';

                // show the output div

                document.querySelector('.lyrics-output').style.opacity = '1';
            });
    }
});