let hod = 0;
document.getElementById('game').onclick = function (event) {
    if (event.target.className == 'block') {
        if (hod % 2 == 0) {
            event.target.innerHTML = 'X';
        } else {
            event.target.innerHTML = '0';
        }
        hod++;
        checkWinner();

    }

    function checkWinner() {
        debugger;
        var allBlock = document.getElementsByClassName('block');
        // for X
        if (
            (allBlock[0].innerHTML == 'X' && allBlock[1].innerHTML == 'X' && allBlock[2].innerHTML == 'X') ||
            (allBlock[3].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[5].innerHTML == 'X') ||
            (allBlock[6].innerHTML == 'X' && allBlock[7].innerHTML == 'X' && allBlock[8].innerHTML == 'X') ||
            (allBlock[0].innerHTML == 'X' && allBlock[3].innerHTML == 'X' && allBlock[6].innerHTML == 'X') ||
            (allBlock[1].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[7].innerHTML == 'X') ||
            (allBlock[2].innerHTML == 'X' && allBlock[5].innerHTML == 'X' && allBlock[8].innerHTML == 'X') ||
            (allBlock[0].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[8].innerHTML == 'X') ||
            (allBlock[2].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[6].innerHTML == 'X')
        ) {
            alert("Победил X");
            // сброс значений
            for (let i = 0; i < 9; i++) {
                allBlock[i].innerHTML = '';
            }
            hod = 0;

        } else // проверяем на ничью
            if (hod == 9) {
                alert('Ничья');
                // сброс значений
                for (let i = 0; i < 9; i++) {
                    allBlock[i].innerHTML = '';
                }
                hod = 0;
            }

        // for 0
        if (
            (allBlock[0].innerHTML == '0' && allBlock[1].innerHTML == '0' && allBlock[2].innerHTML == '0') ||
            (allBlock[3].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[5].innerHTML == '0') ||
            (allBlock[6].innerHTML == '0' && allBlock[7].innerHTML == '0' && allBlock[8].innerHTML == '0') ||
            (allBlock[0].innerHTML == '0' && allBlock[3].innerHTML == '0' && allBlock[6].innerHTML == '0') ||
            (allBlock[1].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[7].innerHTML == '0') ||
            (allBlock[2].innerHTML == '0' && allBlock[5].innerHTML == '0' && allBlock[8].innerHTML == '0') ||
            (allBlock[0].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[8].innerHTML == '0') ||
            (allBlock[2].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[6].innerHTML == '0')
        ) {
            alert("Победил 0");
            // сброс значений
            for (let i = 0; i < 9; i++) {
                allBlock[i].innerHTML = '';
            }
            hod = 0;
        } else // проверяем на ничью
            if (hod == 9) {
                alert('Ничья');
                // сброс значений
                for (let i = 0; i < 9; i++) {
                    allBlock[i].innerHTML = '';
                }
                hod = 0;
            }
    }
}