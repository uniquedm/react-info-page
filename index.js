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
function MainContent() {
    return (
        <p>Main Body</p>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
<div>
    <CustomNav/>
    <MainContent/>
</div>)