const { useState } = React

export function LongTxt({ txt }) {
    console.log(txt)
  const [isLongTxtShown, setIsLongTxtShown] = useState(false)

  function onToggleLongTxt () {
    setIsLongTxtShown((prev) => !prev)
  }

  function getTxtToShow (isLongTxtShown, txt) {
    if (txt.length < 100) return txt
    return isLongTxtShown ? txt : txt.substring(0, 100) 
  }

  const txtToShow = getTxtToShow(isLongTxtShown, txt)
  return (
    <section className='longTxt'>
      <p onClick={onToggleLongTxt}>{txtToShow}<span>{txt.length > 100 ? '...' : ''}</span></p>
    </section>
  )
}
