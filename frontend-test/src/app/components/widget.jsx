import CardComponent from './ui/card';

import { useContext } from "react";

import { WidgetsContext } from "../contexts/widgets"

import { useRouter } from "next/navigation";

export default function Widget({widget}){
    const { editWidget, deleteWidget } = useContext(WidgetsContext)
    const router = useRouter()

    const handleDeleteWidget = () => {
        deleteWidget(widget.id)
    }

    const handleEditWidget = () => {
        router.push(`/edit/${widget.type}/${widget.id}`)
    }
    return(
        <CardComponent
            type={widget.type}
            title={widget.name}
            width={'w-8/12'}
            primaryButton={'Editar'}
            secondaryButton={'excluir'}
            primaryClick={handleEditWidget}
            secondaryClick={handleDeleteWidget}
        />
    )
}