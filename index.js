function CustomHeader() {
  return (
    <h1>Header</h1>
  )
}

function MainContent() {
    return (
      <p>Body</p>
    )
}

ReactDOM.render(
<div>
    <CustomHeader />
    <MainContent />
</div>,
document.getElementById("root")
)