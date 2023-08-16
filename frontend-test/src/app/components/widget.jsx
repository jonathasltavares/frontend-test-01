import CardComponent from './ui/card';


export default function Widget({widget}){
    
    return(
        <CardComponent type={widget.type} title={widget.name} width={'w-8/12'} primaryButton={'Editar'} secondaryButton={'excluir'}/>
    )
}