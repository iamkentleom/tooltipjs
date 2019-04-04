window.onload = () => {
    class Tooltip {
        constructor(element, props){
            this.element = element
            this.props = props
            const width = this.props.label.length
            let insert = 
                `<span class = "label">${this.props.label}</span>
                <style>
                    .tooltip{
                        position: relative;
                        display: inline-block;
                    }
                    .tooltip .label{
                        cursor: pointer;
                        visibility: hidden;
                        opacity: 0;
                        text-align: center;
                        width: ${width}ex;
                        position: absolute;
                        background-color: #555;
                        color: white;
                        border-radius: 5px;
                        padding: 5px 8px;
                        left: 50%;
                        ${this.props.position == 'top' ? 'bottom' : 'top'}: 150%;
                        margin-left: -${width/2+1}ex;
                        transition: 0.3s;
                        z-index: 1000 !important;
                    }
                    .tooltip .label::after{
                        content: "";
                        position: absolute;
                        ${this.props.position == 'top' ? 'bottom' : 'top'}: -50%;
                        left: 50%;
                        margin-${this.props.position == 'top' ? 'bottom' : 'top'}: 3px;
                        margin-left: -5px;
                        border-width: 5px;
                        border-style: solid;
                        border-color: ${this.props.position == 'top' ? '#555' : 'transparent'} transparent ${this.props.position == 'top' ? 'transparent' : '#555'} transparent;
                    }
                    .tooltip:hover > .label{
                        visibility: visible;
                        opacity: 1;
                    }
                </style>`
            this.element.insertAdjacentHTML("beforeend", insert)
            this.element.classList.add('tooltip')
            // console.log('Success')
        }
    }
    
    // Usage Example
    // new Tooltip(document.getElementById('tooltip'), {
    //     label: "Click to copy",
    //     position: "top"
    // })

}