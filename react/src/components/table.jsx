function Table(props) {
    return (
        <tbody>
            <tr>
                <th scope="row">{props.projectid}</th>
                <td>{props.projectname}</td>
                <td>{props.projectCreation}</td>
                <td>{props.projectActivation}</td>
                <td>{props.projectPhase}</td>
                <td>{props.projectOwner}</td>
                <td>{props.projectBudget}</td>
                <td>{props.projectGenObjetive}</td>
                <td>{props.projectSpObjetive}</td>
                <td>{props.projectProgress}</td>
            </tr>
        </tbody>
    )

}

export default Table;