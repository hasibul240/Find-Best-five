// append child to the parent element function
function appendChild(player_name) {
    const append_place = document.getElementById('selected_player');
    const new_player = player_name;
    const new_player_add = document.createElement('li');
    new_player_add.className = 'player_name';
    new_player_add.innerHTML = new_player;
    append_place.appendChild(new_player_add);
};

//disable the button when the player is selected
function select_palyars_and_disable_button(button, player_name) {
    const selected_player = document.getElementsByClassName('player_name');
    const rest_buttons = document.getElementsByClassName('button');
    if (selected_player.length === 5) {
        for (let i = 0; i < selected_player.length; i++) {
            rest_buttons[i].disabled = true;
        };
        alert('You have selected 5 players');
    } else {
        button.disabled = true;
        button.style.backgroundColor = '#ccc';
        appendChild(player_name);
    };
};


//select player event handler
document.getElementById('playars').addEventListener('click', function (event) {
    const button = event.target;
    const parant_element = event.target.parentElement;
    const player_name = parant_element.querySelector('.name').innerText;
    if (event.target.className === 'button') {
        select_palyars_and_disable_button(button, player_name);
    }
});


//calculation here
// per player cost calculation here
document.getElementById('calculate_button').addEventListener('click', function () {
    const per_playar_cost = document.getElementById('per_playar_cost');
    const per_playar_count_number = parseInt(per_playar_cost.value);
    const playar_expence = document.getElementById('playar_expence');
    const per_cost = per_playar_count_number * 5;
    if (isNaN(per_playar_count_number)) {
        alert('Please Enter Amount');
    } else {
        playar_expence.innerHTML = per_cost;
    };
});


//total cost calculation here
document.getElementById('calculate_total').addEventListener('click', function () {
    const playar_expence = document.getElementById('playar_expence');
    const playar_expence_number = parseInt(playar_expence.innerText);
    const manager_cost = document.getElementById('manager_cost').value;
    const manager_cost_number = parseInt(manager_cost);
    const coach_cost = document.getElementById('coach_cost').value;
    const coach_cost_number = parseInt(coach_cost);
    const total_cost = playar_expence_number + manager_cost_number + coach_cost_number
    if (isNaN(manager_cost_number) && isNaN(coach_cost_number)) {
        alert('Please Enter Amount');
    } else {
        document.getElementById('show_total_cost').innerText = total_cost;
    };
});