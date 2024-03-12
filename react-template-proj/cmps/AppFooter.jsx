const { useState } = React

import { ColorInput } from "./dynamic-inputs/ColorInput.jsx"
import { FontsizeInput } from "./dynamic-inputs/FontSizeInput.jsx"

export function AppFooter() {
    const [cmpType, setCmpType] = useState('color')
    const [footerStyle, setFooterStyle] = useState({
        backgroundColor: 'pink',
        fontSize: '16px'
    })

    function onChangeStyle(newStyle) {
        setFooterStyle((prevStyle) => ({ ...prevStyle, ...newStyle }))
    }

    console.log('footerStyle', footerStyle)

    return <footer style={footerStyle} className="app-footer full main-layout" >
        <section>
            <h3>Hello {`Puki`}, Pick a color</h3>
            <select onChange={(ev) => { setCmpType(ev.target.value) }}>
                <option value="color">Color</option>
                <option value="fontSize">Font size</option>
            </select>
        </section>
        <section>
            <DynamicCmp cmpType={cmpType} onChangeStyle={onChangeStyle} footerStyle={footerStyle} />
        </section>
    </footer>
}

function DynamicCmp(props) {
    switch (props.cmpType) {
        case 'color':
            return <ColorInput {...props} />
        case 'fontSize':
            return <FontsizeInput {...props} />
    }
}