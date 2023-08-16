import Widget from "./widget";

export default function Widgets({ widgets}){
    return (
        <div className="flex flex-col items-center mt-10 gap-5">
            {widgets.map((widget=> <Widget widget={widget}/>))}
        </div>
    )
}