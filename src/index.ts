import './styles.css';

const secretNumber = Math.floor(Math.random() * 10);

const squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;

let currentSquare = Math.floor(Math.random() * 10);

squares.forEach(sq => {
    if (currentSquare === secretNumber) {
        sq.dataset.secret = 'true';

    }
    currentSquare++;
    sq.addEventListener('click', handleClick);
});

function handleClick() {
    const that = this as HTMLDivElement;
    if (that.dataset.secret) {
        that.classList.add('winner');
        that.removeEventListener('click', handleClick);

        squares.forEach(sq => {
            if (sq !== that) {
                sq.classList.add('loser');
            }
        });
    } else {
        that.classList.add('loser');
        that.removeEventListener('click', handleClick);
    }
}
