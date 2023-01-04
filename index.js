function CustomNav() {
    return (
        <nav>
            <h1>React App</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<CustomNav/>)