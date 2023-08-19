'use client'

import { createContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";

const WidgetsContext = createContext({});

const WidgetsProvider = ({ children }) => {
    const [widgets, setWidgets] = useState([])


      const addWidget = (widget) => {
        setWidgets([...widgets, {id: uuidv4(), ...widget}])
        console.log(widgets)
      }

      const updateWidget = (id, updatedWidget) => {
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
            updateWidget,
            deleteWidget
        }}>{children}</WidgetsContext.Provider>
    )
}

export { WidgetsProvider, WidgetsContext}