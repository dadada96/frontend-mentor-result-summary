function fetchJson() {
    fetch('./data.json').then(response => response.json()).then(json => {
        console.log(json)

        const bodyEl = document.getElementById('summaryBody')
        var div = ''

        json.forEach(element => {
            console.log(element.category)

            const category = element.category
            const icon = element.icon
            const score = element.score

            var color = ''
            if (category.toLowerCase() === 'reaction')
                color = 'red'
            else if (category.toLowerCase() === 'memory')
                color = 'yellow'
            else if (category.toLowerCase() === 'verbal')
                color = 'green'
            else if (category.toLowerCase() === 'visual')
                color = 'blue'

            div += `<div class="summary_item ${color}">
            <img src="${icon}" alt="">
            <div>${category}</div>
            <div><span>${score}</span> / 100</div>
          </div>`

            bodyEl.innerHTML = div
        });
    })
}

fetchJson()