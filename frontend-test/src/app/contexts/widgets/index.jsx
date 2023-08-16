'use client'

import { createContext, useState } from "react";

const WidgetsContext = createContext({});

const WidgetsProvider = ({ children }) => {
    const [widgets, setWidgets] = useState([
        {
          id: 1,
          name: "Widget 1",
        },
        {
          id: 2,
          name: "Widget 2",
        },
        {
          id: 3,
          name: "Widget 3",
        },
        {
          id: 4,
          name: "Widget 4",
          type: "line",
        },
        {
          id: 5,
          name: "Widget 5",
          type: "line",
        }
      ])

      const addWidget = (widget) => {
        setWidgets([...widgets, widget])
      }

      const editWidget = (id, updatedWidget) => {
        setWidgets(
          widgets.map((widget) => (widget.id === id ? updatedWidget : widget))
        )
      }

      const deleteWidget = (id) => {
        setWidgets(widgets.filter((widget) => widget.id !== id))
      }

    return (
        <WidgetsContext.Provider value={{
            widgets,
            addWidget,
            editWidget,
            deleteWidget
        }}>{children}</WidgetsContext.Provider>
    )
}

export { WidgetsProvider, WidgetsContext}