
export function ColorInput({  onChangeStyle, footerStyle }) {
    const colors = ['#B4FF9F', '#F9FFA4', '#FFD59E', '#FFA1A1']

    function onSetColor(color) {
        const style = { backgroundColor: color }
        onChangeStyle(style)
    }

    return <section className="color-input">
        <div className="items-container flex">
            {
                colors.map(color => <div key={color}
                    className={`item ${color === footerStyle.backgroundColor ? 'selected' : ''}`}
                    onClick={() => onSetColor(color)}
                    style={{ backgroundColor: color }}
                ></div>)
            }
        </div>
    </section>
}