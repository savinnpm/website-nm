import React from 'react'

const VideosContext = React.createContext(null)

export const VideosProvider = (props) => {
  return (
    <VideosContext.Provider value={props.videos}>
      {props.children}
    </VideosContext.Provider>
  )
}

export const useVideosContext = () => {
  const context = React.useContext(VideosContext)
  if (context === undefined) {
    throw new Error('useVideosContext must be used within a VideosContextProvider')
  }

  return context
}
