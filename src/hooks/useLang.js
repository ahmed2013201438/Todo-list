import React from 'react'
import i18n from 'i1n8/i1n8'

const initLang = localStorage.getItem("site-lang") || "en"
const LangContext = React.createContext()

const LangProvider = (props) => {
  const [lang, setLang] = React.useState(initLang)

  const switchLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en"
    i18n.changeLanguage(newLang).then(() => {
      setLang(newLang)
      localStorage.setItem("site-lang", newLang)
    })
  }

  return (
    <LangContext.Provider
      value={{
        lang: i18n.language,
        switchLanguage,
        isRtl: lang === "ar",
        t: (...args) => i18n.t(...args)
      }}
    >
      {props.children}
    </LangContext.Provider>
  )
}

const useLang = () => React.useContext(LangContext)

export { LangProvider, useLang }