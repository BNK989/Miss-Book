export function FontsizeInput({ onChangeStyle, footerStyle }) {
    const fontSizes = ['14px', '17px', '20px', '24px']

    return <section className="color-input">
        <div className="items-container flex">
            {
                fontSizes.map(fontSize => <div key={fontSize}
                    style={{ fontSize }}
                    onClick={() => onChangeStyle({ fontSize })}
                    className={`item ${fontSize === footerStyle.fontSize ? 'selected' : ''}`}>

                    {fontSize}
                </div>)
            }
        </div>
    </section>
}