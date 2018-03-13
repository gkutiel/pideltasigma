function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

document.addEventListener('DOMContentLoaded', () => {
    const letters = [
        { str: 'alpha', tex: '\\alpha' }, { str: 'alpha', tex: 'A' },
        { str: 'beta', tex: '\\beta' }, { str: 'beta', tex: 'B' },
        { str: 'gamma', tex: '\\gamma' }, { str: 'gamma', tex: '\\Gamma' },
        { str: 'delta', tex: '\\delta' }, { str: 'delta', tex: '\\Delta' }
    ]

    const view = document.getElementById('view')
    const answer = document.getElementById('answer')
    const ls = shuffle(letters)
    var i = 0;
    katex.render(ls[i].tex, view)
    answer.focus()
    answer.addEventListener('keyup', () => {
        const str = answer.value
        if (str !== ls[i].str) return
        answer.value = ''
        if (++i >= ls.length) {
            console.log('TODO DONE')
            return
        }

        katex.render(ls[i].tex, view)
    })
})