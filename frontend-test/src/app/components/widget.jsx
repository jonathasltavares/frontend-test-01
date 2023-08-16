import CardComponent from './ui/card';

import { useContext } from "react";

import { WidgetsContext } from "../contexts/widgets"

export default function Widget({widget}){
    const { editWidget, deleteWidget } = useContext(WidgetsContext)

    const handleDeleteWidget = () => {
        deleteWidget(widget.id)
    }
    return(
        <CardComponent
            type={widget.type}
            title={widget.name}
            width={'w-8/12'}
            primaryButton={'Editar'}
            secondaryButton={'excluir'}
            primaryClickrimaryClick={''}
            secondaryClick={handleDeleteWidget}
        />
    )
}