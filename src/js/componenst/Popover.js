
export class Popover {
    constructor(){
        this.popovers = document.querySelectorAll('[data-toggle="popover"]')
        this.popovers.forEach(el => el.addEventListener('click', this.handlTooltip ))


    }

    handlTooltip = (event) => {
        const button = event.target
        const popoverElement = this.createTooltip(button.dataset)
        console.log(popoverElement.style, 'style');

        console.log(popoverElement.style, 'style');
        const container = button.closest('body')
        container.appendChild(popoverElement)
        

    }

    createTooltip = (dataset) => {
        const {title , content } = dataset

        const div = document.createElement('div')
        div.classList.add('popover')
        const popoverTitle = document.createElement('h2')
        popoverTitle.innerText = title
        const popoverContent = document.createElement('p')
        popoverContent.innerText = content
        div.appendChild(popoverTitle)
        div.appendChild(popoverContent)

        return div
    }
}