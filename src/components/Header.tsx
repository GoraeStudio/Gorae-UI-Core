import "../assets/css/gridStyles.css"
const Header = () => {
  return <div  style={{backgroundColor:"white",padding:"24px", width: "100%", flexDirection:"row",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
    <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>GORAE UI</h1>
    <div className="header-container" style={{ display: "flex", gap: "12px",fontSize:"14px",flexDirection:"row",alignItems:"center" }}>
        <span style={{ cursor: "pointer" }}>Home</span>
        <span style={{ cursor: "pointer" }}>Docs</span>
        <span style={{ cursor: "pointer" }}>Github</span> 
    </div>
    <div className="header-button">
        <div style={{cursor:"pointer"}}>MENUS</div>
    </div>
    </div>
};

export default Header;

