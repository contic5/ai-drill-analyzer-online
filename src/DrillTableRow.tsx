function DrillTableRow(props:any) 
{
    let drill=props.drill;
    return (
        <tr>
        <td><button type="button" onClick={()=>props.onClick(drill.ID)} className="theme-primary btn-solid btn-styled">{drill.Name}</button></td>
        <td>{drill.Ranks}</td>
        <td>{drill.Category}</td>
        <td>{drill.Learning_Potential}</td>
        <td>{drill.Physical_Development}</td>
        <td>{drill.Fun}</td>
        </tr>
    )
}

export default DrillTableRow;