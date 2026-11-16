import "./DrillDetails.css";

function DrillDetails(props:any) 
{
    let drill=props.drill;
    return (
        <div className="drill">
        <h2>{drill.Name}</h2>
        <h3>Ranks: {drill.Ranks}</h3>
        <h3>Category: {drill.Category}</h3>

        <h3>Instructor Focus</h3>
        <p>{drill.Instructor_Focus}</p>

        <table className="table big-table">
        <thead>
        <tr>
        <th>Learning Potential</th>
        <th>Physical Development</th>
        <th>Fun</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>{drill.Learning_Potential}</td>
        <td>{drill.Physical_Development}</td>
        <td>{drill.Fun}</td>
        </tr>
        </tbody>
        </table>
        
        <h3>Reasoning</h3>
        <p>{drill.Reasoning}</p>

        <h3>Advice</h3>
        <p>{drill.Advice}</p>

        <button type="button" onClick={()=>props.onClick(-1)} className="theme-accent btn-solid btn-styled">Go Back</button>
        </div>
    )
}

export default DrillDetails;