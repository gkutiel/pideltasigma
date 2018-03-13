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
        { str: 'delta', tex: '\\delta' }, { str: 'delta', tex: '\\Delta' },
        { str: 'epsilon', tex: '\\epsilon' },
        { str: 'epsilon', tex: '\\varepsilon' }, {
            str: 'epsilon',
            tex: 'E'
        },
        { str: 'zeta', tex: '\\zeta' }, { str: 'zeta', tex: 'Z' },
        { str: 'eta', tex: '\\eta' }, { str: 'eta', tex: 'H' }, {
            str: 'theta',
            tex: '\\theta'
        }, { str: 'theta', tex: '\\Theta' }, { str: 'theta', tex: '\\vartheta' },
        {
            str: 'iota',
            tex: '\\iota'
        }, { str: 'iota', tex: 'I' }, {
            str: 'kappa',
            tex: '\\kappa'
        }, { str: 'kappa', tex: 'K' }, {
            str: 'lambda',
            tex: '\\lambda'
        }, { str: 'lambda', tex: '\\Lambda' }, { str: 'mu', tex: '\\mu' },
        { str: 'mu', tex: 'M' }, { str: 'nu', tex: '\\nu' }, {
            str: 'nu',
            tex: 'N'
        }, { str: 'xi', tex: '\\xi' }, {
            str: 'xi',
            tex: '\\Xi'
        }, { str: 'omicron', tex: 'o' }, {
            str: 'omicron',
            tex: 'O'
        }, { str: 'pi', tex: '\\pi' }, {
            str: 'pi',
            tex: '\\Pi'
        }, { str: 'rho', tex: '\\rho' }, { str: 'rho', tex: '\\varrho' },
        {
            str: 'rho',
            tex: 'P'
        }, { str: 'sigma', tex: '\\sigma' }, {
            str: 'sigma',
            tex: '\\Sigma'
        }, { str: 'tau', tex: '\\tau' }, {
            str: 'tau',
            tex: 'T'
        }, { str: 'upsilon', tex: '\\upsilon' }, {
            str: 'upsilon',
            tex: '\\Upsilon'
        }, { str: 'phi', tex: '\\phi' }, { str: 'phi', tex: '\\varphi' },
        {
            str: 'phi',
            tex: '\\Phi'
        }, { str: 'chi', tex: '\\chi' }, {
            str: 'chi',
            tex: 'X'
        }, { str: 'psi', tex: '\\psi' }, {
            str: 'psi',
            tex: '\\Psi'
        },
        { str: 'omega', tex: '\\omega' }, { str: 'omega', tex: '\\omega' }
    ]

    var i;
    const view = document.getElementById('view')
    const answer = document.getElementById('answer')
    const count = document.getElementById('count')
    const ls = shuffle(letters)

    function start() {
        i = 0;
        katex.render(ls[i].tex, view)
        answer.focus()
        updateCounter()
    }

    function updateCounter() {
        count.textContent = (i + 1) + '/' + ls.length
    }

    answer.addEventListener('keyup', () => {
        const str = answer.value.toLowerCase()
        if (str !== ls[i].str) return
        answer.value = ''
        if (++i >= ls.length) {
            view.textContent = 'Well Done !!!'
            return
        }

        updateCounter()
        katex.render(ls[i].tex, view)
    })

    start()
})