const MenuTop = () => {
  return (
    <div className="topMenuContainer">
      <div className="menuTopLeft">
        <h1>Options for everyone</h1>
        <p>
          We have spent a lot of time listening to our customers, to find create
          a menu for everyone. Take a look at the menu below.
        </p>
        <div className="buttons">
          <div className="button">
            <button>
              <a style={{ color: "white" }} href="#menu">
                Menu
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="menuTopRight">
        <img
          className="imageContain"
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="Coffee"
        />
      </div>
    </div>
  )
}

export default MenuTop

/*
  1) Make a box on top using grid 
      picture on the right 
      writing on the left 

*/
