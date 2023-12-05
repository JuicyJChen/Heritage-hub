import { createContext, useState } from "react"

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [token, setToken] = useState("")
  const [event, setEvent] = useState({})
  const [createEventData, setCreateEventData] = useState({
    dateAndTime: "Friday December 13 2023",
    hostedBy: "618c863f19da5468323f186b",
    eventImage:
      "https://logowik.com/content/uploads/images/chicago-bears2550.jpg",
    eventType: "group",
    groupDetail: {
      groupName: "Chicago Bears",
      groupPrivate: "Public group",
    },
    eventLocationType: "In person",
    attendees: ["618c863f19da5468323f186b"],
  })
  const [purchased, setPurchased] = useState(false)

  const values = {
    user,
    token,
    purchased,
    setPurchased,
    setUser,
    setToken,
    event,
    setEvent,
    setCreateEventData,
    createEventData,
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
